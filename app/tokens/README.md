# Automated Figma → CSS Workflow Setup

## 🎯 The Complete Workflow

```
1. Design in Figma → Update your design tokens
2. Export from Figma → Light Mode.tokens.json + Dark Mode.tokens.json
3. Drop in /tokens → Replace old exports
4. Run: npm run build-tokens → Automated transformation
5. Done! → Updated CSS ready to use
```

**One command. Every time. Forever.** ✨

## 📦 Initial Setup (5 minutes)

### Step 1: Install Dependencies

In your project root:

```bash
# Install npm packages if you haven't already
npm install
```

### Step 2: Add Files to Your Project

Copy these files from what I created:

```
your-project/
└── tokens/                      ← Create this folder
    ├── build-tokens.js          ← The transformation script
    ├── package.json             ← Add the packages
    ├── Light_Mode_tokens.json   ← Your Figma exports go here
    └── Dark_Mode_tokens.json
```


### Step 3: Test It!

```bash
# Export from Figma first (see below)
# Then run:
npm run build-tokens
```

You should see:
```
🎨 Building design tokens from Figma exports...
📖 Reading token files...
🔄 Transforming Figma format to CSS...
✅ Successfully generated ../tokens.css
```

## 📤 Exporting from Figma

### Every Time You Make Changes:

1. **Open Variables panel** in Figma (⌥⌘K / Ctrl+Alt+K)
2. **Right click** on your **Design Tokens** collection
3. **Select "Export modes"**

## 🔄 Using the Generated CSS

### Import in Your Main/Global CSS

```css
/* src/styles/main.css */
@import './tokens.css';

/* Now use the variables */
body {
  background: var(--surface-primary);
  color: var(--text-primary);
}

.button {
  background: var(--action-primary-default);
  border-radius: var(--radius-button);
}

.button:hover {
  background: var(--action-primary-hover);
}
```

### Dark Mode Just Works!

The same variables automatically switch in dark mode:

```javascript
// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Toggle back to light
document.documentElement.setAttribute('data-theme', 'light');
```

## 🚀 Advanced: Auto-Rebuild on Export

### Run the watcher:

```bash
npm run watch-tokens
```

Now leave this running in a terminal. Whenever you:
1. Export new tokens from Figma
2. Save to the `tokens/` folder
3. CSS auto-regenerates!

You'll see:
```
[nodemon] restarting due to changes...
🎨 Building design tokens from Figma exports...
✅ Successfully generated ../tokens.css
```

## 🎨 The Generated Output

### tokens.css looks like:

```css
/**
 * Design Tokens
 * Generated from Figma Variables export
 * 
 * DO NOT EDIT MANUALLY
 */

/* LIGHT MODE (Default) */
:root {
  /* Surface colors (backgrounds) */
  --surface-primary: #F5F5F5;
  --surface-secondary: #E8E8E8;
  
  /* Text colors */
  --text-primary: #2C2A42;
  --text-inverse: #F5F5F5;
  
  /* Interactive elements */
  --action-primary-default: #3A5E4B;
  --action-primary-hover: #49755D;
  
  /* ... all your tokens organized by category ... */
}

/* DARK MODE */
[data-theme='dark'] {
  /* Colors automatically adjust */
  --surface-primary: #2C2A42;
  --text-primary: #F5F5F5;
  --action-primary-default: #A47756;
  /* ... */
}
```



## 🐛 Troubleshooting

### "Cannot find module"
Make sure `build-tokens.js` is in your project root where you run the command.

### "tokens/Light_Mode_tokens.json not found"
- Create a `tokens/` folder in your project
- Export from Figma and save there

### Generated CSS is empty
- Make sure you exported from the **Design Token** collection, not only Primitives
- Check that the JSON files aren't empty

### Colors look wrong
- Verify you selected the correct mode (Light vs Dark)
- Check that your Figma tokens are connected to primitives

### Dimensions missing units
The script automatically adds `px` to:
- Any variable with "radius" in the name
- Any variable with "max-width" in the name
- Any variable with "size" in the name

If you need different units, edit the script's `addUnits` logic.

