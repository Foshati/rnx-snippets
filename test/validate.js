/**
 * RNX Snippets - JSON Validation Script
 * Validates that all snippet files are properly formatted
 */

const fs = require('fs');
const path = require('path');

const SNIPPETS_DIR = path.join(__dirname, '../src/snippets');

console.log('🔍 Validating snippet files...\n');

const files = fs.readdirSync(SNIPPETS_DIR).filter(f => f.endsWith('.json'));

let hasErrors = false;

for (const file of files) {
  const filepath = path.join(SNIPPETS_DIR, file);
  
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    JSON.parse(content);
    console.log(`✅ ${file} - Valid`);
  } catch (error) {
    console.log(`❌ ${file} - Invalid: ${error.message}`);
    hasErrors = true;
  }
}

console.log('\n' + (hasErrors ? '❌ Validation failed' : '✅ All files valid'));
process.exit(hasErrors ? 1 : 0);
