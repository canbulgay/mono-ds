# Design System Monorepo Architecture Setup

## Project Context

I need you to create a production-ready design system monorepo infrastructure
WITHOUT implementing any UI components. Focus exclusively on the technical
foundation, build system, and developer experience that will support a scalable
design system.

## Role & Expertise

Act as a senior frontend architect with 10+ years of experience in building
enterprise-scale design systems. You have deep expertise in monorepo
architectures, build optimization, and developer tooling. You follow industry
best practices and prioritize performance, maintainability, and developer
experience.

## Project Requirements

### 1. Monorepo Architecture

- Use **pnpm workspaces** for efficient dependency management
- Implement **Turborepo** for build orchestration and caching
- Structure:
  ```
  design-system/
  ├── apps/
  │   ├── docs/           # Documentation site (Storybook/Docusaurus)
  │   └── playground/     # Component testing playground
  ├── packages/
  │   ├── core/          # Core utilities and tokens
  │   ├── themes/        # Theme configurations
  │   ├── utils/         # Shared utilities
  │   ├── icons/         # Icon system setup
  │   └── tokens/        # Design tokens package
  ├── tools/
  │   ├── eslint-config/
  │   ├── tsconfig/
  │   └── build-scripts/
  ```

### 2. Build System Configuration

- **Webpack 5** configuration with:
  - Module federation for microfrontend support
  - Tree shaking and code splitting
  - CSS modules and PostCSS setup
  - Asset optimization (images, fonts, SVGs)
  - Development and production configurations
- **Turbo** configuration for:
  - Parallel builds with proper dependency graph
  - Remote caching setup
  - Pipeline optimization
  - Watch mode for development

### 3. TypeScript Configuration

- Strict TypeScript setup with composite projects
- Path aliases for clean imports
- Shared tsconfig bases for consistency
- Declaration file generation for packages

### 4. Testing Infrastructure

- **Jest** configuration with:
  - Monorepo-aware setup
  - Coverage reporting per package
  - Snapshot testing support
  - Custom test utilities package
- **Testing Library** setup for future component tests
- **Playwright** for E2E testing of documentation site
- **Visual regression testing** setup (e.g., Chromatic or Percy ready)

### 5. Linting & Formatting

- **ESLint** with:
  - Custom shareable config package
  - TypeScript integration
  - Import sorting rules
  - Accessibility rules (jsx-a11y)
- **Prettier** configuration
- **Stylelint** for CSS/SCSS
- **Commitlint** with conventional commits
- **Husky** and **lint-staged** for pre-commit hooks

### 6. Developer Experience

- **Hot Module Replacement** (HMR) across packages
- **VS Code** workspace settings and recommended extensions
- **npm scripts** for common tasks:
  - `dev`: Start all development servers
  - `build`: Build all packages
  - `test`: Run all tests
  - `lint`: Lint entire codebase
  - `changeset`: Version management
- **Development environment** setup script

### 7. CI/CD Pipeline Templates

- **GitHub Actions** workflows for:
  - PR validation (lint, test, build)
  - Automated releases with changesets
  - Visual regression testing
  - Performance budgets
  - Security scanning

### 8. Documentation Infrastructure

- **Storybook 9** setup with:
  - MDX documentation support
  - Addon configurations
  - Custom theme matching design system
- **API documentation** generation from TypeScript
- **Contributing guidelines** and templates

### 9. Design Tokens System

- Token structure for:
  - Colors, typography, spacing, shadows, animations
  - Responsive breakpoints
  - Theme variations (light/dark)
- **Style Dictionary** integration for multi-platform tokens
- CSS custom properties generation
- TypeScript type generation from tokens

### 10. Performance & Optimization

- Bundle size analysis tools
- Performance monitoring setup
- Lighthouse CI integration
- Critical CSS extraction setup
- CDN deployment preparation

## Implementation Steps

Please implement this project following these steps:

1. **Initialize monorepo structure** with pnpm workspaces
2. **Set up Turborepo** with optimized pipelines
3. **Configure TypeScript** with composite projects
4. **Implement Webpack configurations** for each app/package
5. **Set up testing infrastructure** with Jest and Playwright
6. **Configure linting and formatting** tools
7. **Create shared configuration packages**
8. **Set up development scripts** and VS Code settings
9. **Implement CI/CD workflows** with GitHub Actions
10. **Configure documentation site** with Storybook
11. **Set up design tokens system** with Style Dictionary
12. **Add performance monitoring** and optimization tools
13. **Create comprehensive README** files for each package
14. **Add example usage** documentation

## Available MCP Tools

You have access to the following MCP servers:

- **Context7**: For up-to-date documentation and code examples from official
  sources
  - Use this to get current syntax for Webpack, Turborepo, TypeScript,
    Storybook, etc.
  - Always use context7 when implementing configurations or working with
    library-specific features
- **GitHub**: For PR creation, issue management, and code reviews
- **Filesystem**: For enhanced file operations across the monorepo
- **Puppeteer**: For visual testing and screenshot generation

Use these tools proactively when:

- Starting any configuration file (use context7 to get latest syntax)
- Creating or updating multiple files (use filesystem MCP)
- Setting up CI/CD workflows (use github MCP)
- Testing visual output (use puppeteer MCP)
- Implementing build tools or framework features (use context7 for current best
  practices)

**Important**: Always append "use context7" to prompts involving:

- Webpack configurations
- Turborepo setup
- TypeScript monorepo patterns
- Storybook configuration
- Build optimization techniques
- Any framework-specific implementation

This ensures you're using the most current APIs and avoiding deprecated
patterns.

## Quality Requirements

- All configurations should be production-ready
- Follow current best practices (as of 2025)
- Include detailed comments explaining complex configurations
- Ensure all tools work seamlessly together
- Optimize for both DX (Developer Experience) and build performance
- Make the system extensible for future component development

## Testing Your Implementation

After each major step, ensure:

- All packages build successfully
- Tests pass across the monorepo
- Linting rules are applied consistently
- Development servers start without errors
- TypeScript compilation works with no errors
- Turbo cache is working correctly

## Additional Context

- This foundation will support a component library serving 50+ developers
- The design system will eventually include 100+ components
- Performance and build times are critical
- The system needs to support multiple themes
- Future integration with Figma tokens is planned

Begin by creating the project structure and initializing the monorepo. After
each step, verify everything works before proceeding to the next step. Use git
commits after each successful implementation with clear, conventional commit
messages.

Ask clarifying questions if needed about specific technology choices or
architectural decisions before proceeding with implementation.
