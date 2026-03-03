# Automated Figma → CSS Workflow

## The workflow

1. Design in Figma and update your design tokens.
2. Export from Figma: **Core**, **Light Mode**, and **Dark Mode** (see below).
3. Place the JSON files in **`app/tokens/`** (this folder).
4. From the **project root**, run: `npm run build-tokens`
5. Generated CSS is written to **`app/tokens.css`**.

**One command from project root. Every time.** ✨

## Initial setup

### 1. Install dependencies

From the **project root**:

```bash
npm install
```

(The root `package.json` has the `build-tokens` script; this folder has an optional `package.json` for the watcher.)

### 2. Token files in this folder

The build script expects these files in **`app/tokens/`**:

| File | Description |
|------|-------------|
| `Core.tokens.json` | Core/primitives (colors, spacing, etc.) |
| `Light Mode.tokens.json` | Light mode semantic tokens |
| `Dark Mode.tokens.json` | Dark mode semantic tokens |

Figma export filenames must match exactly (including spaces). Place your Figma exports here.

### 3. Run the build

From the **project root**:

```bash
npm run build-tokens
```

You should see something like:

```
🎨 Building design tokens from Figma exports...
📖 Reading token files...
🔄 Transforming Figma format to CSS...
✅ Successfully generated ./app/tokens.css
```

## Exporting from Figma

1. Open the **Variables** panel in Figma (⌥⌘K / Ctrl+Alt+K).
2. Right‑click your **Design Tokens** (or equivalent) collection.
3. Export **modes** so you get Core (if used) plus Light and Dark mode JSON.
4. Save/name the files to match: `Core.tokens.json`, `Light Mode.tokens.json`, `Dark Mode.tokens.json`.
5. Put them in `app/tokens/` and run `npm run build-tokens` from the project root.

## Using the generated CSS

The app already imports tokens in **`app/globals.css`**:

```css
@import './tokens.css';
```

Use the variables anywhere:

```css
body {
  background: var(--surface-primary);
  color: var(--text-primary);
}
```

### Dark mode

Tokens switch by theme. The app sets:

```html
<html data-theme="dark">
```

Same variable names; `app/tokens.css` defines both `:root` and `[data-theme='dark']`.

## Optional: auto-rebuild on file change

From **`app/tokens/`**, you can run:

```bash
npm run watch-tokens
```

(Requires `npm install` in `app/tokens/` for nodemon.) This watches JSON files in this folder and runs the build from the project root when they change. If you prefer, just run `npm run build-tokens` from the project root after each Figma export.

## Generated output

**`app/tokens.css`** contains:

- **Core** — base values (e.g. `--color-neutral-500`).
- **`:root`** — light mode semantic tokens (e.g. `--surface-primary`, `--text-primary`).
- **`[data-theme='dark']`** — dark mode overrides.

The script resolves Figma aliases to `var(--...)` so semantic tokens stay linked to core tokens.

## Troubleshooting

### "Core.tokens.json not found" (or Light/Dark)

- Run **`npm run build-tokens` from the project root**, not from `app/tokens/`.
- Ensure the JSON files are in **`app/tokens/`** with exact names: `Core.tokens.json`, `Light Mode.tokens.json`, `Dark Mode.tokens.json`.

### Generated CSS is empty

- Export the full token collection from Figma (not only primitives).
- Check that the JSON files are valid and not empty.

### Colors look wrong

- Confirm you exported the correct mode (Light vs Dark) into the right file.
- In Figma, check that semantic tokens are linked to the intended primitives.

### Dimensions missing units

The script adds `px` for variables whose names contain "radius", "max-width", or "size". For other units, adjust the script’s unit logic.
