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
  it('TypeScript snippets have exactly 10 entries', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    expect(Object.keys(snippets).length).toBe(10)
  })

  it('JavaScript snippets have exactly 10 entries', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    expect(Object.keys(snippets).length).toBe(10)
  })

  it('TypeScript prefixes start with "ts"', () => {
    const snippets = loadSnippetFile('ts-snippets.json')
    for (const snippet of Object.values(snippets)) {
      expect(snippet.prefix.startsWith('ts')).toBe(true)
    }
  })

  it('JavaScript prefixes start with "js"', () => {
    const snippets = loadSnippetFile('js-snippets.json')
    for (const snippet of Object.values(snippets)) {
      expect(snippet.prefix.startsWith('js')).toBe(true)
    }
  })
})
