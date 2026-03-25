import fs from 'fs'
import path from 'path'
import TokensViewerClient from './TokensViewerClient'

function parseCssCustomPropertyNames(cssText: string): string[] {
  const names = new Set<string>()
  const re = /--([a-zA-Z0-9-]+)\s*:/g
  let m: RegExpExecArray | null
  while ((m = re.exec(cssText)) !== null) {
    names.add(m[1])
  }
  return [...names]
}

function parseFirstCustomPropertyValues(cssText: string): Record<string, string> {
  // Grabs the first `--foo: bar;` encountered for each variable name.
  // In this repo, the first definition is the core `:root` block (base values),
  // and later blocks can override (e.g. light semantic tokens, dark mode overrides).
  const out: Record<string, string> = {}
  const re = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g
  let m: RegExpExecArray | null
  while ((m = re.exec(cssText)) !== null) {
    const name = m[1]
    const value = m[2].trim()
    if (!(name in out)) out[name] = value
  }
  return out
}

function numericTokenValue(raw: string | undefined): number | null {
  if (!raw) return null
  // Common cases in this codebase: "8px", "1200px", "1rem", "0.875rem"
  const m = raw.trim().match(/^(-?\d+(\.\d+)?)(px|rem)?$/)
  if (!m) return null
  const n = Number(m[1])
  if (Number.isNaN(n)) return null
  const unit = m[3] ?? ''
  if (unit === 'rem') return n * 16
  return n
}

function sortByNumericValueThenName(varNames: string[], firstValues: Record<string, string>): string[] {
  return [...varNames].sort((a, b) => {
    const av = numericTokenValue(firstValues[a])
    const bv = numericTokenValue(firstValues[b])
    if (av != null && bv != null && av !== bv) return av - bv
    if (av != null && bv == null) return -1
    if (av == null && bv != null) return 1
    return a.localeCompare(b)
  })
}

function typographyGroupKey(varName: string): string {
  if (varName.startsWith('typography-line-height-')) return 'typography-line-height'
  if (varName.startsWith('typography-weight-')) return 'typography-weight'
  if (varName.startsWith('typography-size-')) return 'typography-size'
  return 'typography'
}

function sortTypographyByGroupThenValue(varNames: string[], firstValues: Record<string, string>): string[] {
  return [...varNames].sort((a, b) => {
    const ag = typographyGroupKey(a)
    const bg = typographyGroupKey(b)
    if (ag !== bg) return ag.localeCompare(bg)

    const av = numericTokenValue(firstValues[a])
    const bv = numericTokenValue(firstValues[b])
    if (av != null && bv != null && av !== bv) return av - bv
    if (av != null && bv == null) return -1
    if (av == null && bv != null) return 1
    return a.localeCompare(b)
  })
}

type CssVarGroups = {
  core: Record<string, string>
  light: Record<string, string>
  dark: Record<string, string>
}

function parseTokensCssByBlock(cssText: string): CssVarGroups {
  // tokens.css structure:
  // 1) :root { core values }
  // 2) :root { light semantic values }
  // 3) [data-theme='dark'] { dark overrides }
  const core: Record<string, string> = {}
  const light: Record<string, string> = {}
  const dark: Record<string, string> = {}

  const lines = cssText.split('\n')
  let rootBlockCount = 0
  let mode: 'none' | 'core' | 'light' | 'dark' = 'none'

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (line === ':root {') {
      rootBlockCount += 1
      mode = rootBlockCount === 1 ? 'core' : 'light'
      continue
    }
    if (line.startsWith("[data-theme='dark']") && line.endsWith('{')) {
      mode = 'dark'
      continue
    }
    if (line === '}') {
      mode = 'none'
      continue
    }

    if (mode === 'none') continue

    const m = line.match(/^--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/)
    if (!m) continue
    const name = m[1]
    const value = m[2].trim()

    if (mode === 'core') core[name] = value
    if (mode === 'light') light[name] = value
    if (mode === 'dark') dark[name] = value
  }

  return { core, light, dark }
}

function extractVarRef(rawValue: string | undefined): string | null {
  if (!rawValue) return null
  // Examples:
  //   var(--color-neutral-50)
  //   var(--color-neutral-50, #fff)
  const m = rawValue.match(/var\(\s*--([a-zA-Z0-9-]+)\s*(?:,|\))/)
  return m ? m[1] : null
}

export default function TokensViewerPage() {
  const cssPath = path.join(process.cwd(), 'app', 'tokens.css')
  const cssText = fs.readFileSync(cssPath, 'utf8')

  const allVarNames = parseCssCustomPropertyNames(cssText).sort((a, b) => a.localeCompare(b))
  const firstValues = parseFirstCustomPropertyValues(cssText)
  const groups = parseTokensCssByBlock(cssText)

  const baseSpace = sortByNumericValueThenName(
    allVarNames.filter((v) => v.startsWith('spacing-')),
    firstValues,
  )
  const baseSize = sortByNumericValueThenName(
    allVarNames.filter((v) => v.startsWith('max-width-')),
    firstValues,
  )
  const baseBorder = sortByNumericValueThenName(
    allVarNames.filter((v) => v.startsWith('border-radius-') || v.startsWith('border-width-')),
    firstValues,
  )
  const baseColor = allVarNames.filter((v) => v.startsWith('color-'))
  const baseFont = sortTypographyByGroupThenValue(
    allVarNames.filter((v) => v.startsWith('typography-')),
    firstValues,
  )

  const applied = allVarNames.filter(
    (v) =>
      v.startsWith('surface-') ||
      v.startsWith('text-') ||
      v.startsWith('action-') ||
      v.startsWith('border-') ||
      v.startsWith('icon-') ||
      v.startsWith('shadow-') ||
      v.startsWith('radius-') ||
      v.startsWith('size-max-width-'),
  )

  const appliedMeta: Record<string, { lightRef: string | null; darkRef: string | null }> = {}
  for (const name of applied) {
    appliedMeta[name] = {
      lightRef: extractVarRef(groups.light[name]),
      darkRef: extractVarRef(groups.dark[name]),
    }
  }

  return (
    <TokensViewerClient
      baseSpace={baseSpace}
      baseSize={baseSize}
      baseBorder={baseBorder}
      baseColor={baseColor}
      baseFont={baseFont}
      applied={applied}
      appliedMeta={appliedMeta}
    />
  )
}

