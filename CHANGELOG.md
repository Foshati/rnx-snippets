# Changelog

All notable changes to the "RNX Snippets" extension will be documented in this file.

## [1.1.0] - 2025-12-21

### Added
- 🪝 **React Hooks Snippets** - Complete set of React hooks
  - `us` - useState hook
  - `ue` - useEffect hook
  - `uem` - useEffect on mount (empty deps)
  - `uc` - useContext hook
  - `ur` - useRef hook
  - `um` - useMemo hook
  - `ucb` - useCallback hook
  - `urd` - useReducer hook
- 🔧 **Custom Hook Templates**
  - `tsh` / `jsh` - Custom hook boilerplate
  - `tsctx` / `jsctx` - Context Provider with hook
- 🚀 **Next.js App Router Snippets**
  - `nuc` - 'use client' directive
  - `nus` - 'use server' directive
  - `tsload` / `jsload` - Loading component
  - `tserr` / `jserr` - Error boundary component
  - `ts404` / `js404` - Not Found page
  - `tsapi` / `jsapi` - API Route Handler
  - `tsmeta` - Static Metadata
  - `tsgmeta` - Generate Metadata function
  - `tssa` / `jssa` - Server Action

### Changed
- 📊 Total snippets increased from 20 to 50+
- 📝 Improved snippet descriptions

## [1.0.3] - 2025-12-20

### Added
- 🚀 Automatic publishing to VS Code Marketplace and Open VSX
- 📦 GitHub Releases with downloadable VSIX files

### Changed
- ⚙️ Improved CI/CD pipeline with full automation

## [1.0.2] - 2025-12-20

### Changed
- 🧪 Migrated tests to TypeScript with Vitest
- 🔧 Added GitHub Actions CI/CD workflows
- 📊 16 comprehensive tests for snippet validation

## [1.0.1] - 2025-12-20

### Changed
- 📁 Reorganized project structure (src/, test/, public/)
- 🖼️ Improved icon quality (PNG + SVG)
- 🧪 Added test suite for snippet validation
- 📝 Updated README with development commands

## [1.0.0] - 2025-12-20

### Added
- 🎉 Initial release
- ⚡ 20 professional React & Next.js snippets
- 📝 Full TypeScript support (`tsc`, `tsp`, `tsl`, `ts0`, `ts1`)
- 📄 Full JavaScript support (`jsc`, `jsp`, `jsl`, `js0`, `js1`)
- 🔄 Export-at-bottom variants for all snippets
- 🔥 Next.js App Router ready (layouts, pages)
- 📦 Support for `.js`, `.jsx`, `.ts`, `.tsx` files