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
| 🎯 **Intuitive Prefixes** | Easy-to-remember shortcuts |

## 📦 Installation

1. Open **VS Code**
2. Go to **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"RNX Snippets"**
4. Click **Install**

Or install via command:
```
ext install Foshati.rnx-snippets
```

## 🚀 Snippets

### TypeScript/TSX

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

### JavaScript/JSX

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

## 📝 Examples

### `tsc` - TypeScript Component
```typescript
type Props = {}

export const Button = ({}: Props) => {
  return (
    <div>Button</div>
  )
}
```

### `tsp` - TypeScript Page
```typescript
export default function HomePage() {
  return (
    <div>HomePage</div>
  )
}
```

### `tsl` - TypeScript Layout
```typescript
type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}
```

## 📁 Project Structure

```
rnx-snippets/
├── public/           # Icons and assets
│   ├── icon.png
│   └── icon.svg
├── src/
│   └── snippets/     # Snippet definitions
│       ├── ts-snippets.json
│       └── js-snippets.json
├── test/             # Test files
│   ├── snippets.test.js
│   └── validate.js
├── package.json
├── README.md
├── CHANGELOG.md
└── LICENSE
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

# Validate snippets
pnpm lint

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