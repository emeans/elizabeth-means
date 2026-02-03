# App styling

This directory uses a three-layer styling approach: design tokens, application globals, and component modules.

## 1. Design tokens — `tokens.css`

**`tokens.css`** is **directly exported from Figma**. Do not edit it by hand.

- **Source:** Figma Variables → export JSON → `app/tokens/` → run `npm run build-tokens` (see `app/tokens/README.md`).
- **Contents:** CSS custom properties for colors, spacing, typography, borders, shadows, and semantic tokens (e.g. `--surface-primary`, `--text-primary`, `--action-primary-default`) for light and dark themes.
- **Usage:** Other stylesheets reference these via `var(--token-name)` (e.g. `color: var(--text-primary)`).

## 2. Application-level styles — `globals.css`

**`globals.css`** sets up **application-wide** styles.

- **Imports:** `tokens.css` (so tokens are available everywhere).
- **Defines:** Typography (e.g. `--font-body`, `--font-heading`), layout aliases (e.g. `--max-width`, `--border-radius`), and base element styles (reset, `body`, headings, links, `.container`, `.section`, etc.).
- **Scope:** Global; applies to the whole app. Used by `app/layout.tsx`.

## 3. Component and page styles — `*.module.css`

All other styles live in **CSS modules** next to the code that uses them.

- **Location:** Each component or page has its own `*.module.css` (e.g. `Button.module.css`, `Contact.module.css`, `page.module.css`).
- **Usage:** Components import their module and use the class names; styles reference tokens with `var(--token-name)` so they stay on-brand and theme-aware.
- **Scope:** Scoped by CSS modules; no global leakage.

## Summary

| Layer        | File(s)           | Role                                      |
|-------------|-------------------|-------------------------------------------|
| Tokens      | `tokens.css`      | Figma export; design values and semantics |
| Application | `globals.css`     | App-wide styles and token/typography setup |
| Components  | `*.module.css`    | Component- and page-specific styles       |

To change design values, update tokens in Figma and re-export; to change app-wide behavior, edit `globals.css`; to change a single component or page, edit its `*.module.css`.
