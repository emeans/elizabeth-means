'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './TokensViewer.module.css'

type Props = {
  baseSpace: string[]
  baseSize: string[]
  baseBorder: string[]
  baseColor: string[]
  baseFont: string[]
  applied: string[]
  appliedMeta: Record<string, { lightRef: string | null; darkRef: string | null }>
}

type TabKey = 'core' | 'base' | 'applied'

function resolveCssVar(varName: string): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`)
  return (v || '').trim()
}

function readTabFromUrl(): TabKey {
  if (typeof window === 'undefined') return 'core'
  const params = new URLSearchParams(window.location.search)
  const t = params.get('tab')
  if (t === 'core' || t === 'base' || t === 'applied') return t
  return 'core'
}

function writeTabToUrl(tab: TabKey) {
  const url = new URL(window.location.href)
  url.searchParams.set('tab', tab)
  window.history.replaceState(null, '', url.toString())
}

export default function TokensViewerClient({
  baseSpace,
  baseSize,
  baseBorder,
  baseColor,
  baseFont,
  applied,
  appliedMeta,
}: Props) {
  const [tab, setTab] = useState<TabKey>('core')
  const [resolved, setResolved] = useState<Record<string, string>>({})
  const [appliedResolved, setAppliedResolved] = useState<{ light: Record<string, string>; dark: Record<string, string> }>({
    light: {},
    dark: {},
  })

  const varNames = useMemo(
    () => [...baseSpace, ...baseSize, ...baseBorder, ...baseColor, ...baseFont, ...applied],
    [applied, baseBorder, baseColor, baseFont, baseSize, baseSpace],
  )

  useEffect(() => {
    setTab(readTabFromUrl())
    const onPop = () => setTab(readTabFromUrl())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    writeTabToUrl(tab)
  }, [tab])

  useEffect(() => {
    const next: Record<string, string> = {}

    for (const name of varNames) {
      next[name] = resolveCssVar(name)
    }

    setResolved(next)
  }, [varNames])

  useEffect(() => {
    // Resolve applied values for BOTH themes side-by-side.
    // We temporarily toggle `data-theme` on <html> to ensure var() chains resolve correctly.
    const html = document.documentElement
    const originalTheme = html.getAttribute('data-theme')

    const resolveForTheme = (theme: 'light' | 'dark') => {
      html.setAttribute('data-theme', theme)
      const next: Record<string, string> = {}
      for (const name of applied) next[name] = resolveCssVar(name)
      return next
    }

    const light = resolveForTheme('light')
    const dark = resolveForTheme('dark')

    if (originalTheme == null) html.removeAttribute('data-theme')
    else html.setAttribute('data-theme', originalTheme)

    setAppliedResolved({ light, dark })
  }, [applied])

  const isColorValue = (v: string | undefined) => {
    if (!v) return false
    const s = v.trim().toLowerCase()
    return (
      s.startsWith('#') ||
      s.startsWith('rgb(') ||
      s.startsWith('rgba(') ||
      s.startsWith('hsl(') ||
      s.startsWith('hsla(')
    )
  }

  const tokenParts = (varName: string): { category: string; type: string; item: string } => {
    const parts = varName.split('-').filter(Boolean)
    const category = parts[0] ?? '—'
    const type = parts[1] ?? '—'
    const item = parts.length > 2 ? parts.slice(2).join('-') : '—'
    return { category, type, item }
  }

  const appliedColorTokens = useMemo(() => {
    return applied.filter((name) => {
      const meta = appliedMeta[name]
      const byRef =
        (meta?.lightRef != null && meta.lightRef.startsWith('color-')) ||
        (meta?.darkRef != null && meta.darkRef.startsWith('color-'))
      if (byRef) return true
      return isColorValue(appliedResolved.light[name]) || isColorValue(appliedResolved.dark[name])
    })
  }, [applied, appliedMeta, appliedResolved.dark, appliedResolved.light])

  const appliedDimensionTokens = useMemo(() => {
    const colorSet = new Set(appliedColorTokens)
    return applied.filter((name) => !colorSet.has(name))
  }, [applied, appliedColorTokens])

  useEffect(() => {
    // Re-resolve when the theme toggle changes `data-theme` on <html>.
    const update = () => {
      const next: Record<string, string> = {}
      for (const name of varNames) next[name] = resolveCssVar(name)
      setResolved(next)
    }

    const obs = new MutationObserver(() => update())
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    // Also update immediately (covers initial mount ordering).
    update()

    return () => obs.disconnect()
  }, [varNames])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    window.setTimeout(() => {
      const el = document.getElementById(hash)
      el?.scrollIntoView({ block: 'start' })
    }, 50)
  }, [])

  return (
    <>
      <div className={styles.topNav} aria-label="Token viewer navigation">
        <div className={styles.topNavTitle}>Token Viewer</div>
        <div className={styles.tabRow} role="tablist" aria-label="Token sets">
          <button
            type="button"
            className={styles.tab}
            role="tab"
            aria-selected={tab === 'core'}
            onClick={() => setTab('core')}
          >
            Core
          </button>
          <button
            type="button"
            className={styles.tab}
            role="tab"
            aria-selected={tab === 'base'}
            onClick={() => setTab('base')}
          >
            Base
          </button>
          <button
            type="button"
            className={styles.tab}
            role="tab"
            aria-selected={tab === 'applied'}
            onClick={() => setTab('applied')}
          >
            Applied
          </button>
        </div>

        <div className={styles.topNavLinks} role="navigation" aria-label="Sections">
          {tab === 'core' && (
            <>
              <a className={styles.topNavLink} href="#base-space">
                core.space
              </a>
              <a className={styles.topNavLink} href="#base-size">
                core.size
              </a>
              <a className={styles.topNavLink} href="#base-border">
                core.border
              </a>
              <a className={styles.topNavLink} href="#base-color">
                core.color
              </a>
              <a className={styles.topNavLink} href="#base-font">
                core.font
              </a>
            </>
          )}

          {tab === 'base' && (
            <>
              <a className={styles.topNavLink} href="#applied-colors">
                base.colors
              </a>
              <a className={styles.topNavLink} href="#applied-dimensions">
                base.dimensions
              </a>
            </>
          )}
        </div>
      </div>

      {tab === 'core' && (
        <>

      <section className={styles.section} id="base-space">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>base.space</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              {baseSpace.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.tokenName}>{varName}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{resolved[varName] || '—'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section} id="base-size">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>base.size</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              {baseSize.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.tokenName}>{varName}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{resolved[varName] || '—'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section} id="base-border">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>base.border</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              {baseBorder.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.tokenName}>{varName}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{resolved[varName] || '—'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section} id="base-color">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>base.color</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Swatch</th>
                <th className={styles.thCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              {baseColor.map((varName) => {
                const color = resolved[varName] || ''
                return (
                  <tr key={varName}>
                    <td className={styles.tdCell}>
                      <span className={styles.tokenName}>{varName}</span>
                    </td>
                    <td className={styles.tdCell + ' ' + styles.swatchCell}>
                      <div className={styles.swatch} style={{ background: color || 'transparent' }} />
                    </td>
                    <td className={styles.tdCell}>
                      <span className={styles.valueMono}>{color || '—'}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section} id="base-font">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>base.font</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Value</th>
              </tr>
            </thead>
            <tbody>
              {baseFont.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.tokenName}>{varName}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{resolved[varName] || '—'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
        </>
      )}

      {tab === 'base' && (
        <>
      <section className={styles.section} id="applied-colors">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>applied.colors</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Category</th>
                <th className={styles.thCell}>Type</th>
                <th className={styles.thCell}>Item</th>
                <th className={styles.thCell}>Light</th>
                <th className={styles.thCell}>Dark</th>
              </tr>
            </thead>
            <tbody>
              {appliedColorTokens.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{tokenParts(varName).category}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{tokenParts(varName).type}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{tokenParts(varName).item}</span>
                  </td>
                  <td className={`${styles.tdCell} ${styles.colorCellLight}`}>
                    {(() => {
                      const val = appliedResolved.light[varName]
                      const show = isColorValue(val)
                      const lightRef = appliedMeta[varName]?.lightRef
                      const fallbackLabel = appliedMeta[varName]?.lightRef ?? val ?? '—'
                      return (
                        <span className={styles.valueMono}>
                          {show ? (
                            <span className={styles.swatchRow}>
                              <span className={styles.swatch} style={{ background: val }} />
                              <span>{lightRef ?? fallbackLabel}</span>
                            </span>
                          ) : (
                            val || '—'
                          )}
                        </span>
                      )
                    })()}
                  </td>
                  <td className={`${styles.tdCell} ${styles.colorCellDark}`}>
                    {(() => {
                      const val = appliedResolved.dark[varName]
                      const show = isColorValue(val)
                      const darkRef = appliedMeta[varName]?.darkRef
                      const fallbackLabel = appliedMeta[varName]?.darkRef ?? val ?? '—'
                      return (
                        <span className={styles.valueMono}>
                          {show ? (
                            <span className={styles.swatchRow}>
                              <span className={styles.swatch} style={{ background: val }} />
                              <span>{darkRef ?? fallbackLabel}</span>
                            </span>
                          ) : (
                            val || '—'
                          )}
                        </span>
                      )
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section} id="applied-dimensions">
        <div className={styles.sectionTitleRow}>
          <div>
            <div className={styles.sectionTitle}>applied.dimensions</div>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCell}>Token</th>
                <th className={styles.thCell}>Ref</th>
                <th className={styles.thCell}>Light</th>
                <th className={styles.thCell}>Dark</th>
              </tr>
            </thead>
            <tbody>
              {appliedDimensionTokens.map((varName) => (
                <tr key={varName}>
                  <td className={styles.tdCell}>
                    <span className={styles.tokenName}>{varName}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>
                      {(() => {
                        const meta = appliedMeta[varName]
                        const lightRef = meta?.lightRef
                        const darkRef = meta?.darkRef
                        if (!lightRef && !darkRef) return '—'
                        if (lightRef && darkRef && lightRef === darkRef) return lightRef
                        return `${lightRef ?? '—'} / ${darkRef ?? '—'}`
                      })()}
                    </span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{appliedResolved.light[varName] || '—'}</span>
                  </td>
                  <td className={styles.tdCell}>
                    <span className={styles.valueMono}>{appliedResolved.dark[varName] || '—'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
        </>
      )}

      {tab === 'applied' && (
        <div className={styles.emptyState}>
          Component-level tokens aren’t exported yet. Once you add a third token layer in Figma (core / base
          / applied), this tab can render component tokens with the same tables.
        </div>
      )}
    </>
  )
}

