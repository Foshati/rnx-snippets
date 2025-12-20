/**
 * RNX Snippets - Snippet Validation Tests
 * Tests to ensure all snippets are valid JSON and have proper structure
 */

const fs = require('fs');
const path = require('path');

const SNIPPETS_DIR = path.join(__dirname, '../src/snippets');
const REQUIRED_FIELDS = ['prefix', 'body', 'description'];

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

function log(type, message) {
  const prefix = type === 'pass' ? `${colors.green}✓${colors.reset}` 
               : type === 'fail' ? `${colors.red}✗${colors.reset}` 
               : `${colors.yellow}⚠${colors.reset}`;
  console.log(`  ${prefix} ${message}`);
}

function testSnippetFile(filename) {
  const filepath = path.join(SNIPPETS_DIR, filename);
  console.log(`\nTesting ${filename}:`);
  
  let passed = 0;
  let failed = 0;

  // Test 1: File exists
  if (!fs.existsSync(filepath)) {
    log('fail', 'File does not exist');
    return { passed: 0, failed: 1 };
  }
  log('pass', 'File exists');
  passed++;

  // Test 2: Valid JSON
  let snippets;
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    snippets = JSON.parse(content);
    log('pass', 'Valid JSON format');
    passed++;
  } catch (error) {
    log('fail', `Invalid JSON: ${error.message}`);
    return { passed, failed: failed + 1 };
  }

  // Test 3: Has snippets
  const snippetNames = Object.keys(snippets);
  if (snippetNames.length === 0) {
    log('fail', 'No snippets found');
    failed++;
  } else {
    log('pass', `Found ${snippetNames.length} snippets`);
    passed++;
  }

  // Test 4: Each snippet has required fields
  let allValid = true;
  for (const name of snippetNames) {
    const snippet = snippets[name];
    for (const field of REQUIRED_FIELDS) {
      if (!snippet[field]) {
        log('fail', `Snippet "${name}" missing field: ${field}`);
        allValid = false;
        failed++;
      }
    }
    
    // Test body is an array
    if (snippet.body && !Array.isArray(snippet.body)) {
      log('fail', `Snippet "${name}" body should be an array`);
      allValid = false;
      failed++;
    }
  }
  
  if (allValid) {
    log('pass', 'All snippets have required fields');
    passed++;
  }

  // Test 5: Prefixes are unique
  const prefixes = snippetNames.map(name => snippets[name].prefix);
  const uniquePrefixes = new Set(prefixes);
  if (prefixes.length === uniquePrefixes.size) {
    log('pass', 'All prefixes are unique');
    passed++;
  } else {
    log('fail', 'Duplicate prefixes found');
    failed++;
  }

  return { passed, failed };
}

// Main test runner
console.log('\n🧪 RNX Snippets Test Suite\n');
console.log('='.repeat(40));

const files = ['ts-snippets.json', 'js-snippets.json'];
let totalPassed = 0;
let totalFailed = 0;

for (const file of files) {
  const { passed, failed } = testSnippetFile(file);
  totalPassed += passed;
  totalFailed += failed;
}

console.log('\n' + '='.repeat(40));
console.log(`\n📊 Results: ${colors.green}${totalPassed} passed${colors.reset}, ${totalFailed > 0 ? colors.red : ''}${totalFailed} failed${colors.reset}\n`);

process.exit(totalFailed > 0 ? 1 : 0);
