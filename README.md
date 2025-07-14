# Design System Monorepo

A production-ready design system monorepo built with modern tooling and
infrastructure, featuring React components, utilities, and comprehensive
documentation.

## Table of Contents

- [Description](#description)
- [Installation / Setup Instructions](#installation--setup-instructions)
- [Features](#features)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Description

This monorepo contains a complete design system built with React, TypeScript,
and Tailwind CSS. It provides a comprehensive set of accessible UI components
based on Radix UI primitives, along with utilities, icons, and development
tools. The project is organized using pnpm workspaces and Turbo for efficient
monorepo management.

The design system is built with developer experience in mind, featuring hot
reloading during development, comprehensive TypeScript support, and automated
testing and linting workflows.

## Installation / Setup Instructions

### Prerequisites

- **Node.js**: >= 18.0.0
- **pnpm**: >= 9.0.0

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mono-ds
   ```

2. **Install dependencies and build all packages**

   ```bash
   pnpm setup
   ```

3. **Start development mode**

   ```bash
   pnpm dev
   ```

4. **Start Storybook documentation**
   ```bash
   pnpm storybook
   ```

### Alternative Setup

If you prefer to install and build separately:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev
```

## Features

### 🎨 **Comprehensive Component Library**

- 20+ accessible React components built on Radix UI primitives
- Consistent design tokens and theming system
- Tailwind CSS integration with custom configurations
- TypeScript support with full type safety

### 🛠 **Developer Experience**

- Hot reloading during development
- Automatic type checking and linting
- Pre-commit hooks for code quality
- Comprehensive testing with Jest and React Testing Library

### 📚 **Documentation & Storybook**

- Interactive component documentation
- Live examples and code snippets
- Design system guidelines and patterns
- Automated documentation generation

### 🔧 **Monorepo Management**

- pnpm workspaces for efficient dependency management
- Turbo for fast, cached builds and task orchestration
- Changesets for version management and publishing
- Shared tooling configurations across packages

### 🎯 **Accessibility First**

- WCAG 2.1 compliant components
- Keyboard navigation support
- Screen reader optimized
- Focus management and ARIA attributes

### ⚡ **Performance Optimized**

- Tree-shakeable components
- Minimal bundle size
- Efficient build processes
- Optimized CSS delivery

### 🧪 **Quality Assurance**

- Comprehensive test coverage
- Automated linting and formatting
- TypeScript strict mode
- Continuous integration ready

## Project Structure

```
packages/
├── core/              # Main component library
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Component utilities
│   └── package.json
├── utils/             # Shared utility functions
│   ├── src/
│   │   ├── cn.ts          # Class name utilities
│   │   ├── debounce.ts    # Debounce functions
│   │   └── ...            # Other utilities
│   └── package.json
├── icons/             # Icon components
├── tailwind-config/   # Shared Tailwind configuration
└── ...

apps/
├── docs/              # Storybook documentation
│   ├── src/stories/       # Component stories
│   └── .storybook/        # Storybook configuration
└── web/               # Next.js web application
    ├── src/app/           # Next.js app directory
    └── package.json

tools/
├── eslint-config/     # Shared ESLint rules
├── tsconfig/          # TypeScript configurations
├── jest-config/       # Jest test configurations
└── stylelint-config/  # CSS linting rules
```

## Development Workflow

1. **Make your changes** in the appropriate package
2. **Run tests** to ensure everything works
   ```bash
   pnpm test
   ```
3. **Check code quality**
   ```bash
   pnpm lint
   pnpm typecheck
   ```
4. **Create a changeset** for version management
   ```bash
   pnpm changeset
   ```
5. **Build and test** the entire project
   ```bash
   pnpm build
   ```

## Available Scripts

### Package Management

- `pnpm install` - Install dependencies
- `pnpm setup` - Full setup (install + build all packages)

### Development

- `pnpm dev` - Start development mode across all packages
- `pnpm dev:web` - Start only the web application
- `pnpm build` - Build all packages
- `pnpm build:web` - Build only the web application
- `pnpm start:web` - Start the built web application

### Testing

- `pnpm test` - Run tests across all packages
- `pnpm test:watch` - Run tests in watch mode

### Code Quality

- `pnpm lint` - Run ESLint across all packages
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Documentation

- `pnpm storybook` - Start Storybook development server
- `pnpm storybook:build` - Build Storybook static files

### Release Management

- `pnpm changeset` - Create a changeset for versioning
- `pnpm changeset:version` - Update package versions
- `pnpm changeset:publish` - Publish packages

### Maintenance

- `pnpm clean` - Clean all build artifacts and node_modules

## Technologies Used

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Component Primitives**: Radix UI for accessibility
- **Build System**: Turbo for monorepo orchestration
- **Package Manager**: pnpm with workspace support
- **Testing**: Jest with React Testing Library
- **Documentation**: Storybook
- **Linting**: ESLint with custom configurations
- **Formatting**: Prettier
- **Type Checking**: TypeScript in strict mode
- **Version Management**: Changesets
- **Git Hooks**: Husky with lint-staged

## Contributing

We welcome contributions! Please read our contributing guidelines and follow our
development workflow:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass and code quality checks pass
6. Create a changeset if needed
7. Submit a pull request

For more detailed information, see the [CLAUDE.md](./CLAUDE.md) file which
contains additional technical documentation and development guidelines.
