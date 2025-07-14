# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Repository Overview

This is a production-ready design system monorepo built with modern tooling and
infrastructure. The repository contains multiple packages organized around
component libraries, utilities, and theming.

## Development Commands

### Package Management

- `pnpm install` - Install dependencies
- `pnpm setup` - Full setup (install + build all packages)

### Build & Development

- `pnpm dev` - Start development mode across all packages
- `pnpm build` - Build all packages
- `pnpm clean` - Clean all build artifacts and node_modules

### Testing

- `pnpm test` - Run tests across all packages
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

### Code Quality

- `pnpm lint` - Run ESLint across all packages
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Storybook

- `pnpm storybook` - Start Storybook development server
- `pnpm storybook:build` - Build Storybook static files

### Changesets

- `pnpm changeset` - Create a changeset for versioning
- `pnpm changeset:version` - Update package versions
- `pnpm changeset:publish` - Publish packages

## Architecture

### Monorepo Structure

```
packages/
├── core/          # Main component library with UI components
├── utils/         # Shared utility functions
├── icons/         # Icon components
└── tailwind-config/ # Shared Tailwind configuration

apps/
├── docs/          # Storybook documentation
└── web/           # Next.js web application

tools/
├── eslint-config/ # Shared ESLint configuration
├── jest-config/   # Shared Jest configuration
├── tsconfig/      # Shared TypeScript configurations
└── stylelint-config/ # Shared Stylelint configuration
```

### Key Technologies

- **Package Manager**: pnpm with workspace support
- **Build System**: Turbo for monorepo orchestration
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS with CSS-in-JS support
- **Component Patterns**: Radix UI primitives with custom styling
- **Testing**: Jest with React Testing Library
- **Documentation**: Storybook

### Component Architecture

Components in `packages/core/` follow these patterns:

- Built on Radix UI primitives for accessibility
- Styled with Tailwind CSS classes
- Use `class-variance-authority` for variant management
- Support `asChild` pattern via `@radix-ui/react-slot`
- Follow compound component patterns for complex UI

### Package Dependencies

- `@design-system/core` - Main component library
- `@design-system/utils` - Shared utilities (cn, debounce, etc.)
- `@design-system/icons` - Icon components
- `@design-system/tailwind-config` - Shared Tailwind configuration

## TypeScript Configuration

The repository uses TypeScript project references with path mapping:

- Root tsconfig extends `tools/tsconfig/base.json`
- Path aliases configured for all packages (e.g., `@design-system/core`)
- Individual packages have their own tsconfig files

## Testing Strategy

- Unit tests with Jest and React Testing Library
- Test files use `.test.tsx` or `.spec.tsx` extensions
- Tests located in `__tests__` directories or alongside source files
- Coverage reports generated in `coverage/` directory

## Commit & Release Process

- Uses Husky for git hooks
- Lint-staged for pre-commit checks
- Commitlint for conventional commit messages
- Changesets for version management and publishing

## Development Workflow

1. Run `pnpm setup` for initial setup
2. Use `pnpm dev` for development with hot reload
3. Make changes and test with `pnpm test`
4. Ensure code quality with `pnpm lint` and `pnpm typecheck`
5. Create changesets for version bumps: `pnpm changeset`
6. Build documentation with `pnpm storybook`
