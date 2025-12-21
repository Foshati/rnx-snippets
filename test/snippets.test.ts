import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const SNIPPETS_DIR = join(__dirname, '../src/snippets')
const REQUIRED_FIELDS = ['prefix', 'body', 'description'] as const

interface Snippet {
  prefix: string
  body: string[]
  description: string
}

interface SnippetFile {
  [key: string]: Snippet
}

function loadSnippetFile(filename: string): SnippetFile {
  const filepath = join(SNIPPETS_DIR, filename)
  const content = readFileSync(filepath, 'utf-8')
  return JSON.parse(content)
}

describe('TypeScript Snippets', () => {
  const filepath = join(SNIPPETS_DIR, 'ts-snippets.json')

  it('file exists', () => {
    expect(existsSync(filepath)).toBe(true)
  })

  it('is valid JSON', () => {
    expect(() => loadSnippetFile('ts-snippets.json')).not.toThrow()
  })

  it('has snippets', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    expect(Object.keys(snippets).length).toBeGreaterThan(0)
  })

  it('all snippets have required fields', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    for (const [name, snippet] of Object.entries(snippets)) {
      for (const field of REQUIRED_FIELDS) {
        expect(snippet[field], `Snippet "${name}" missing field: ${field}`).toBeDefined()
      }
    }
  })

  it('body is an array', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    for (const [name, snippet] of Object.entries(snippets)) {
      expect(Array.isArray(snippet.body), `Snippet "${name}" body should be an array`).toBe(true)
    }
  })

  it('prefixes are unique', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    const prefixes = Object.values(snippets).map(s => s.prefix)
    const uniquePrefixes = new Set(prefixes)
    expect(prefixes.length).toBe(uniquePrefixes.size)
  })
})

describe('JavaScript Snippets', () => {
  const filepath = join(SNIPPETS_DIR, 'js-snippets.json')

  it('file exists', () => {
    expect(existsSync(filepath)).toBe(true)
  })

  it('is valid JSON', () => {
    expect(() => loadSnippetFile('js-snippets.json')).not.toThrow()
  })

  it('has snippets', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    expect(Object.keys(snippets).length).toBeGreaterThan(0)
  })

  it('all snippets have required fields', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    for (const [name, snippet] of Object.entries(snippets)) {
      for (const field of REQUIRED_FIELDS) {
        expect(snippet[field], `Snippet "${name}" missing field: ${field}`).toBeDefined()
      }
    }
  })

  it('body is an array', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    for (const [name, snippet] of Object.entries(snippets)) {
      expect(Array.isArray(snippet.body), `Snippet "${name}" body should be an array`).toBe(true)
    }
  })

  it('prefixes are unique', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    const prefixes = Object.values(snippets).map(s => s.prefix)
    const uniquePrefixes = new Set(prefixes)
    expect(prefixes.length).toBe(uniquePrefixes.size)
  })
})

describe('Snippet Content', () => {
  // Valid prefixes for shared hooks and Next.js features
  const VALID_SHARED_PREFIXES = ['us', 'ue', 'uem', 'uc', 'ur', 'um', 'ucb', 'urd', 'nuc', 'nus']
  
  it('TypeScript snippets have at least 20 entries', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    expect(Object.keys(snippets).length).toBeGreaterThanOrEqual(20)
  })

  it('JavaScript snippets have at least 20 entries', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    expect(Object.keys(snippets).length).toBeGreaterThanOrEqual(20)
  })

  it('TypeScript prefixes are valid', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    for (const snippet of Object.values(snippets)) {
      const isValid = snippet.prefix.startsWith('ts') || VALID_SHARED_PREFIXES.includes(snippet.prefix)
      expect(isValid, `Invalid prefix: ${snippet.prefix}`).toBe(true)
    }
  })

  it('JavaScript prefixes are valid', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    for (const snippet of Object.values(snippets)) {
      const isValid = snippet.prefix.startsWith('js') || VALID_SHARED_PREFIXES.includes(snippet.prefix)
      expect(isValid, `Invalid prefix: ${snippet.prefix}`).toBe(true)
    }
  })

  it('includes React hooks snippets', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    const prefixes = Object.values(snippets).map(s => s.prefix)
    
    expect(prefixes).toContain('us')   // useState
    expect(prefixes).toContain('ue')   // useEffect
    expect(prefixes).toContain('uc')   // useContext
    expect(prefixes).toContain('ur')   // useRef
    expect(prefixes).toContain('um')   // useMemo
    expect(prefixes).toContain('ucb')  // useCallback
  })

  it('includes Next.js App Router snippets', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    const prefixes = Object.values(snippets).map(s => s.prefix)
    
    expect(prefixes).toContain('nuc')     // use client
    expect(prefixes).toContain('nus')     // use server
    expect(prefixes).toContain('tsload')  // loading
    expect(prefixes).toContain('tserr')   // error
    expect(prefixes).toContain('ts404')   // not found
    expect(prefixes).toContain('tsapi')   // API route
  })
})
