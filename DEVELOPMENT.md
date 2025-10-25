# Development Guide

## 🛠️ Development Setup

### VS Code Extensions (Recommended)

Install these extensions for the best development experience:

#### Essential Extensions

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **TypeScript Importer** (`pmneo.tsimporter`)
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
- **Path Intellisense** (`christian-kohler.path-intellisense`)

#### React-Specific Extensions

- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
- **Simple React Snippets** (`burkeholland.simple-react-snippets`)
- **React Native Tools** (`ms-vscode.vscode-react-native`)

#### Additional Helpful Extensions

- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **CSS Peek** (`ms-vscode.vscode-css-peek`)
- **HTML CSS Support** (`ms-vscode.vscode-html-css-support`)
- **Live Server** (`ritwickdey.liveserver`)

### Auto-Install Extensions

The project includes `.vscode/extensions.json` with recommended extensions. VS Code will prompt you to install them when you open the project.

## 📝 Code Quality Tools

### Prettier Configuration

- **File**: `.prettierrc`
- **Purpose**: Consistent code formatting
- **Auto-format**: Enabled on save

### ESLint Configuration

- **File**: `.eslintrc.cjs`
- **Purpose**: Code linting and error detection
- **Auto-fix**: Enabled on save

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Auto-fix linting errors
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
npm run type-check       # TypeScript type checking

# Utilities
npm run clean            # Clean build artifacts
```

## 🎯 Development Workflow

### 1. Start Development

```bash
npm run dev
```

- Opens at `http://localhost:5173`
- Hot reload enabled
- TypeScript compilation

### 2. Code Quality Checks

```bash
# Before committing
npm run lint
npm run format:check
npm run type-check
```

### 3. Auto-fix Issues

```bash
npm run lint:fix
npm run format
```

## 🔧 VS Code Settings

The project includes optimized VS Code settings in `.vscode/settings.json`:

- **Format on Save**: Automatically formats code
- **ESLint Auto-fix**: Fixes linting issues on save
- **TypeScript**: Enhanced IntelliSense
- **Emmet**: HTML/CSS shortcuts in TSX files

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── types/               # TypeScript definitions
├── utils/               # Utility functions
├── styles/              # Global styles
└── App.tsx              # Main app component
```

## 🚀 Best Practices

### Component Development

1. Use TypeScript interfaces for props
2. Keep components small and focused
3. Use custom hooks for logic
4. Follow naming conventions

### Code Style

1. Use Prettier for consistent formatting
2. Follow ESLint rules
3. Use meaningful variable names
4. Add comments for complex logic

### File Organization

1. Group related files together
2. Use index files for clean imports
3. Keep components in separate files
4. Use CSS modules for styling

## 🐛 Debugging

### React Developer Tools

Install the React Developer Tools browser extension for debugging React components.

### TypeScript Errors

- Check the terminal for TypeScript errors
- Use `npm run type-check` to verify types
- Ensure all imports are properly typed

### ESLint Errors

- Run `npm run lint` to see all issues
- Use `npm run lint:fix` to auto-fix
- Check `.eslintrc.cjs` for rule configuration

## 📦 Adding Dependencies

### Production Dependencies

```bash
npm install package-name
```

### Development Dependencies

```bash
npm install --save-dev package-name
```

### Type Definitions

```bash
npm install --save-dev @types/package-name
```

## 🔄 Git Hooks (Optional)

Consider adding pre-commit hooks to ensure code quality:

```bash
npm install --save-dev husky lint-staged
```

This will run linting and formatting before each commit.
