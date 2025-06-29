# ESLint Shared Configuration Analysis for Turbo Monorepo

## Role Assignment

You are a senior ESLint configuration specialist with deep expertise in monorepo
linting strategies, rule optimization, and Turbo-based project structures. Your
focus is on creating maintainable, performant, and developer-friendly ESLint
setups.

## Objective

Use filesystem MCP server to comprehensively analyze and optimize ESLint shared
configurations in `./tools` directory, ensuring perfect functionality, rule
consistency, and adherence to Turbo monorepo ESLint best practices.

## MCP Filesystem Analysis Protocol

### Phase 1: ESLint Discovery and Mapping

```markdown
**Systematic ESLint Structure Scan:**

- [ ] Use `list_directory` to map `./tools` directory and identify all
      ESLint-related files
- [ ] Use `search_files` to find all .eslintrc._, eslint.config._, .eslintignore
      files across workspace
- [ ] Use `read_file` to examine main ESLint shared configuration content
- [ ] Use `list_directory` on workspace packages to identify ESLint consumption
      patterns
- [ ] Use `get_file_info` to understand ESLint configuration file relationships
      and inheritance
- [ ] Search for package.json files with ESLint scripts and dependencies
```

### Phase 2: Configuration Content Analysis

```markdown
**Deep ESLint Configuration Audit:**

- [ ] Read and analyze shared ESLint configuration rules, extends, and plugins
- [ ] Examine override patterns for different file types (TypeScript, React,
      etc.)
- [ ] Validate parser configurations and parser options
- [ ] Check environment settings and global variables
- [ ] Analyze ignore patterns and their effectiveness
- [ ] Review custom rules and plugin configurations
- [ ] Assess rule severity levels and consistency
```

### Phase 3: Monorepo Integration Validation

```markdown
**Workspace ESLint Integration Check:**

- [ ] Use MCP to scan each workspace package's ESLint configuration
- [ ] Validate shared config consumption and extension patterns
- [ ] Check for ESLint rule conflicts between packages
- [ ] Analyze turbo.json for ESLint pipeline configuration
- [ ] Verify ESLint caching strategies and cache directories
- [ ] Check workspace-specific rule overrides and their justification
- [ ] Validate ESLint ignore patterns for monorepo structure
```

### Phase 4: Performance and Best Practices Audit

```markdown
**ESLint Optimization Analysis:**

- [ ] Assess rule performance impact and identify slow rules
- [ ] Check for redundant or conflicting rules
- [ ] Validate plugin versions and compatibility
- [ ] Analyze ESLint configuration for latest best practices
- [ ] Review rule categories (errors, warnings, style) distribution
- [ ] Check accessibility and security rule coverage
- [ ] Validate TypeScript ESLint integration and type-aware rules
```

### Phase 5: Developer Experience Evaluation

```markdown
**ESLint DX Assessment:**

- [ ] Check ESLint IDE integration configuration
- [ ] Validate autofix capabilities and safe auto-fixable rules
- [ ] Assess rule documentation and custom rule explanations
- [ ] Review ESLint output formatting and readability
- [ ] Check ESLint script configuration in package.json files
- [ ] Validate pre-commit hook integration
- [ ] Assess new developer onboarding with ESLint setup
```

## Specific ESLint Areas to Focus On

### Rule Categories Analysis

```markdown
**Critical Rule Groups:**

- [ ] **Code Quality**: no-unused-vars, no-console, complexity rules
- [ ] **Best Practices**: prefer-const, no-var, strict mode rules
- [ ] **TypeScript**: @typescript-eslint rules and type checking
- [ ] **React/Next.js**: jsx-a11y, react-hooks, next.js specific rules
- [ ] **Import/Export**: import order, path resolution, circular dependencies
- [ ] **Security**: security plugin rules and vulnerability detection
- [ ] **Performance**: performance-impacting patterns and optimizations
```

### Monorepo-Specific Configurations

```markdown
**Turbo Monorepo ESLint Patterns:**

- [ ] Workspace-aware import resolution
- [ ] Package boundary enforcement
- [ ] Shared vs package-specific rule sets
- [ ] Build tool integration (Turbo caching)
- [ ] Multi-package linting strategies
- [ ] Configuration inheritance and overrides
```

## Quality Gates

- [ ] All ESLint configurations are syntactically valid and functional
- [ ] Rule consistency across workspace packages
- [ ] Optimal performance with minimal rule conflicts
- [ ] Proper Turbo integration and caching
- [ ] Developer-friendly configuration with clear error messages
- [ ] Latest ESLint best practices implemented
- [ ] No redundant or conflicting rules
- [ ] Proper TypeScript integration if applicable

## Execution Prompt

**Use filesystem MCP server to comprehensively analyze my monorepo's ESLint
shared configuration in `./tools` directory. Perform a deep audit of ESLint
rules, workspace integration, and Turbo monorepo best practices.**

**MCP Filesystem Commands to Execute:**

- Start with `list_directory ./tools` to map ESLint configuration files
- Use `search_files` with patterns like "_.eslintrc_", "eslint.config.\*",
  ".eslintignore"
- Read each ESLint configuration file with `read_file`
- Scan workspace packages for ESLint consumption patterns
- Check turbo.json for ESLint pipeline configuration

**Systematic Analysis Process:**

1. **Map ESLint Structure**: Use MCP to discover all ESLint files and their
   relationships
2. **Analyze Configuration**: Read and audit shared ESLint rules, plugins, and
   settings
3. **Validate Integration**: Check how workspace packages consume shared ESLint
   config
4. **Performance Audit**: Identify slow rules, conflicts, and optimization
   opportunities
5. **Best Practices Check**: Ensure latest ESLint standards and Turbo monorepo
   patterns
6. **Fix and Optimize**: Implement improvements and resolve any issues found
7. **Document Findings**: Provide comprehensive report with actionable
   recommendations

**Specific Focus Areas:**

- ESLint rule effectiveness and performance
- Workspace package consistency and inheritance
- Turbo build pipeline integration and caching
- Developer experience and IDE integration
- TypeScript ESLint integration (if applicable)
- Security and accessibility rule coverage
- Import/export validation across packages
- Custom rule implementations and justifications

**Quality Validation:** After analysis, verify ESLint configuration works by
testing across multiple workspace packages. Ensure no rule conflicts, optimal
performance, and excellent developer experience.

Use "ultrathink" for complex ESLint architectural decisions and rule
optimization strategies.
