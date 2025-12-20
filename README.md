<p align="center">
  <img src="./public/icon.png" height="128"/>
</p>

<h1 align="center">RNX Snippets</h1>

<p align="center">
  <strong>Professional React & Next.js Snippets for VS Code</strong>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=Foshati.rnx-snippets">
    <img src="https://img.shields.io/visual-studio-marketplace/v/Foshati.rnx-snippets.svg?color=blue&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="VS Code Marketplace"/>
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=Foshati.rnx-snippets">
    <img src="https://img.shields.io/visual-studio-marketplace/d/Foshati.rnx-snippets.svg?color=green" alt="Downloads"/>
  </a>
  <a href="https://github.com/Foshati/rnx-snippets/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-orange.svg" alt="License"/>
  </a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Create components, pages, and layouts in seconds |
| 📝 **Dual Language** | Full support for JavaScript & TypeScript |
| 🔥 **Next.js Ready** | Optimized for Next.js 13+ App Router |
| 🪝 **React Hooks** | Complete set of hooks snippets |
| 🎯 **Intuitive Prefixes** | Easy-to-remember shortcuts |

## 📦 Installation

### From Marketplace (Recommended)

1. Open **VS Code**
2. Go to **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"RNX Snippets"**
4. Click **Install**

Or install via command:
```bash
ext install Foshati.rnx-snippets
```

### 🛠 Manual Installation

For **Cursor**, **Windsurf**, **Antigravity**, **VSCodium**, or offline installation:

1. Download the `.vsix` file from [Releases](https://github.com/Foshati/rnx-snippets/releases)

2. Install via terminal:
```bash
# VS Code
code --install-extension rnx-snippets-1.1.0.vsix --force

# Cursor
cursor --install-extension rnx-snippets-1.1.0.vsix --force

# Antigravity
antigravity --install-extension rnx-snippets-1.1.0.vsix --force

# VSCodium
codium --install-extension rnx-snippets-1.1.0.vsix --force
```

3. Or drag the `.vsix` file into the Extensions view

## 🚀 Snippets

### 🪝 React Hooks

| Prefix | Description |
|--------|-------------|
| `us` | useState Hook |
| `ue` | useEffect Hook |
| `uem` | useEffect on Mount (empty deps) |
| `uc` | useContext Hook |
| `ur` | useRef Hook |
| `um` | useMemo Hook |
| `ucb` | useCallback Hook |
| `urd` | useReducer Hook |

### 🧩 Components (TypeScript)

| Prefix | Description |
|--------|-------------|
| `tsc` | React Component with Props |
| `tsp` | Next.js Page Component |
| `tsl` | Next.js Layout Component |
| `ts0` | Default Export Function |
| `ts1` | Named Export Function |
| `tsce` | Component (export at bottom) |
| `tspe` | Page (export at bottom) |
| `tsle` | Layout (export at bottom) |
| `ts0e` | Default Export (at bottom) |
| `ts1e` | Named Export (at bottom) |

### 🧩 Components (JavaScript)

| Prefix | Description |
|--------|-------------|
| `jsc` | React Component |
| `jsp` | Next.js Page Component |
| `jsl` | Next.js Layout Component |
| `js0` | Default Export Function |
| `js1` | Named Export Function |
| `jsce` | Component (export at bottom) |
| `jspe` | Page (export at bottom) |
| `jsle` | Layout (export at bottom) |
| `js0e` | Default Export (at bottom) |
| `js1e` | Named Export (at bottom) |

### 🔧 Advanced Patterns

| Prefix | Description |
|--------|-------------|
| `tsh` / `jsh` | Custom Hook Template |
| `tsctx` / `jsctx` | Context Provider with Hook |

### 🚀 Next.js App Router

| Prefix | Description |
|--------|-------------|
| `nuc` | 'use client' directive |
| `nus` | 'use server' directive |
| `tsload` / `jsload` | Loading Component |
| `tserr` / `jserr` | Error Boundary Component |
| `ts404` / `js404` | Not Found Page |
| `tsapi` / `jsapi` | API Route Handler |
| `tsmeta` | Static Metadata |
| `tsgmeta` | Generate Metadata Function |
| `tssa` / `jssa` | Server Action |

## 📝 Examples

### `us` - useState Hook
```typescript
const [count, setCount] = useState<number>(0)
```

### `ue` - useEffect Hook
```typescript
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
}, [dependencies])
```

### `tsctx` - Context Provider
```typescript
import { createContext, useContext, useState, ReactNode } from 'react'

type ThemeContextType = {
  theme: string
  setTheme: (value: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider')
  }
  return context
}
```

### `tsapi` - API Route Handler
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Your logic here

    return NextResponse.json({ message: 'Success' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
```

## 💡 Tips

1. **Tab Completion**: Type prefix + `Tab` to insert snippet
2. **Navigate Placeholders**: Use `Tab` to jump between placeholders
3. **Auto-Rename**: Component name updates in all locations

## 🧪 Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Package extension
pnpm pack

# Publish extension
pnpm publish
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](./LICENSE) License © 2024 Foshati

---

<p align="center">
  Made with ❤️ for React & Next.js developers
</p>