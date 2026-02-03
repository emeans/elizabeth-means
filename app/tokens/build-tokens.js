#!/usr/bin/env node
/**
 * Build Design Tokens from Figma Exports
 * 
 * This script transforms Figma-exported token JSON into production-ready CSS
 * with proper variable references for aliased tokens
 * 
 * Usage:
 *   node build-tokens.js
 * 
 * Expects:
 *   - Core.tokens.json
 *   - Light Mode.tokens.json
 *   - Dark Mode.tokens.json
 * 
 * Outputs:
 *   - tokens.css (combined core + light + dark modes with var() references)
 */

const fs = require('fs');
const path = require('path');

// ========================================
// HELPER FUNCTIONS
// ========================================
function pxToRem(pxValue, baseSize = 16) {
    const rem = pxValue / baseSize;
    // Round to 3 decimal places for cleaner output
    return Math.round(rem * 1000) / 1000;
}

function extractValue(token) {
  const { $type, $value, $extensions } = token;
  
  // CHECK FOR ALIAS FIRST!
  // If this token references another token, use var() instead of the literal value
  if ($extensions && $extensions['com.figma.aliasData']) {
    const aliasData = $extensions['com.figma.aliasData'];
    if (aliasData.targetVariableName) {
      // Convert "color/neutral/50" to "color-neutral-50"
      const varName = aliasData.targetVariableName.replace(/\//g, '-');
      return `var(--${varName})`;
    }
  }
  
  // No alias - extract the literal value
  
  // Handle color type
  if ($type === 'color') {
    if (typeof $value === 'object' && $value.hex) {
      const hex = $value.hex.toUpperCase();
      const alpha = $value.alpha;
      
      if (alpha !== undefined && alpha < 1) {
        const r = Math.round($value.components[0] * 255);
        const g = Math.round($value.components[1] * 255);
        const b = Math.round($value.components[2] * 255);
        const roundedAlpha = Math.round(alpha * 100) / 100;
        return `rgba(${r}, ${g}, ${b}, ${roundedAlpha})`;
      }
      
      return hex;
    }
    return $value;
  }
  
  // Handle number type (radius, sizes, line-height, etc.)
  if ($type === 'number') {
    return $value;
  }
  
  // Handle dimension type
  if ($type === 'dimension') {
    if (typeof $value === 'object' && $value.value !== undefined) {
      return `${$value.value}${$value.unit || 'px'}`;
    }
    return $value;
  }
  
  return $value;
}

function tokensToCss(tokens, mode = 'core') {
  let css = '';
  
  function processTokens(obj, path = []) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;
      
      const currentPath = [...path, key];
      
      if (value.$value !== undefined) {
        // We have a token!
        const variableName = currentPath.join('-');
        let cssValue = extractValue(value);
        
        // Add units to naked numbers that look like dimensions
        // BUT only if it's not already a var() reference
        if (typeof cssValue === 'number') {
          if (variableName.includes('radius') || 
              variableName.includes('radius') || 
              variableName.includes('max-width') ||
              variableName.includes('spacing') ||
              variableName.includes('border-width')) {
            cssValue = `${cssValue}px`;
          }
          if ( variableName.includes('size')) {
            cssValue = `${pxToRem(cssValue, 16)}rem`; // 16px = 1rem
          }
          // Line-height stays unitless
        }
        
        css += `  --${variableName}: ${cssValue};\n`;
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        // Recurse deeper
        processTokens(value, currentPath);
      }
    }
  }
  
  processTokens(tokens);
  return css;
}

// ========================================
// MAIN BUILD FUNCTION
// ========================================

function buildTokens() {
  console.log('🎨 Building design tokens from Figma exports...\n');
  
  // Check for input files
  const corePath = './app/tokens/Core.tokens.json';
  const lightPath = './app/tokens/Light Mode.tokens.json';
  const darkPath = './app/tokens/Dark Mode.tokens.json';
  
  if (!fs.existsSync(corePath)) {
    console.error(`❌ Error: ${corePath} not found`);
    console.error('   Please export Core tokens from Figma and place in project root');
    process.exit(1);
  }

  if (!fs.existsSync(lightPath)) {
    console.error(`❌ Error: ${lightPath} not found`);
    console.error('   Please export Light Mode tokens from Figma and place in project root');
    process.exit(1);
  }
  
  if (!fs.existsSync(darkPath)) {
    console.error(`❌ Error: ${darkPath} not found`);
    console.error('   Please export Dark Mode tokens from Figma and place in project root');
    process.exit(1);
  }
  
  // Read and parse tokens
  console.log('📖 Reading token files...');
  const coreTokens = JSON.parse(fs.readFileSync(corePath, 'utf8'));
  const lightTokens = JSON.parse(fs.readFileSync(lightPath, 'utf8'));
  const darkTokens = JSON.parse(fs.readFileSync(darkPath, 'utf8'));
  
  // Convert to CSS
  console.log('🔄 Transforming Figma format to CSS...');
  console.log('   ↳ Detecting aliases and converting to var() references...');
  const coreCss = tokensToCss(coreTokens, 'core');
  const lightCss = tokensToCss(lightTokens, 'light');
  const darkCss = tokensToCss(darkTokens, 'dark');
  
  // Combine into final output
  const output = `/**
 * Design Tokens
 * Generated from Figma Variables export
 * 
 * DO NOT EDIT MANUALLY - This file is auto-generated
 * To update: Export from Figma → Drop JSON files in project root → Run: npm run build-tokens
 */

/* ========================================
   CORE
   Base design values (colors, spacing, etc.)
   These are the foundation - design tokens reference these
   ======================================== */
:root {
${coreCss}}

/* ========================================
   LIGHT MODE (Default)
   Design tokens that reference core tokens
   ======================================== */
:root {
${lightCss}}

/* ========================================
   DARK MODE
   Same design token names, different core references
   ======================================== */
[data-theme='dark'] {
${darkCss}}
`;
  
  // Write output file to current directory
  const outputPath = './app/tokens.css';
  fs.writeFileSync(outputPath, output, 'utf8');
  
  console.log(`\n✅ Successfully generated ${outputPath}`);
  console.log('📁 Import in your CSS: @import "./tokens.css";');
  console.log(`📊 Core: ${Object.keys(coreTokens).length} token groups`);
  console.log(`📊 Light mode: ${Object.keys(lightTokens).length} token groups`);
  console.log(`📊 Dark mode: ${Object.keys(darkTokens).length} token groups`);
  console.log('\n💡 Semantic tokens now use var() references to core tokens!');
  console.log('   Example: --surface-primary: var(--color-neutral-50)\n');
}

// Run the build
try {
  buildTokens();
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}