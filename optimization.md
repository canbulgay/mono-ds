# Monorepo Shared Configuration Analysis and Optimization

## Role Assignment

You are a senior monorepo architect specializing in Turbo-based project
structures and shared configuration management. Your expertise includes ESLint,
TypeScript, build tools, and enterprise-grade monorepo best practices.

## Objective

Comprehensively analyze and optimize the shared configurations in `./tools`
directory to ensure perfect functionality and adherence to Turbo monorepo best
practices.

## Analysis Protocol

### Phase 1: Discovery and Examination

```markdown
**Scan and Document Current Structure:**

- [ ] Examine entire `./tools` directory structure and catalog all shared
      configurations
- [ ] Read and analyze each configuration file (ESLint, TypeScript, Prettier,
      etc.)
- [ ] Review package.json files across workspace to understand current usage
      patterns
- [ ] Check turbo.json configuration and pipeline definitions
- [ ] Identify how shared configs are currently consumed by workspace packages
- [ ] Document any inconsistencies or potential issues
```

### Phase 2: Validation and Best Practices Audit

```markdown
**Validate Configuration Quality:**

- [ ] Verify all shared configs follow latest best practices for their
      respective tools
- [ ] Check Turbo monorepo structure compliance and optimization opportunities
- [ ] Validate workspace dependency management and version consistency
- [ ] Assess build pipeline efficiency and caching strategies
- [ ] Review configuration inheritance and extension patterns
- [ ] Identify performance bottlenecks or inefficiencies
```

### Phase 3: Testing and Verification

```markdown
**Functional Verification:**

- [ ] Test each shared configuration works correctly in isolation
- [ ] Verify configurations work properly when consumed by packages
- [ ] Run build/lint/test commands to ensure everything functions
- [ ] Check for any configuration conflicts or overlaps
- [ ] Validate TypeScript path resolution and module resolution
- [ ] Ensure all tooling integrates seamlessly
```

### Phase 4: Optimization and Recommendations

```markdown
**Improvement Implementation:**

- [ ] Fix any identified issues or misconfigurations
- [ ] Optimize configurations for better performance and developer experience
- [ ] Update configurations to latest best practices and tool versions
- [ ] Improve documentation and usage examples
- [ ] Enhance Turbo pipeline configuration for optimal caching
- [ ] Streamline shared configuration consumption patterns
```

## Quality Gates

- [ ] All shared configurations are functional and properly structured
- [ ] Turbo monorepo best practices are fully implemented
- [ ] No configuration conflicts or redundancies exist
- [ ] Build and development workflows are optimized
- [ ] Documentation is comprehensive and up-to-date
- [ ] All workspace packages can successfully consume shared configs

## Execution Prompt

**Use the filesystem MCP server to analyze my monorepo's shared configurations
in `./tools` directory. Scan the entire structure, validate that everything is
working perfectly, and ensure all configurations follow Turbo monorepo best
practices.**

**MCP Filesystem Commands to Use:**

- Use `list_directory` to scan `./tools` directory structure
- Use `read_file` to examine each configuration file content
- Use `get_file_info` to check file metadata and relationships
- Use `search_files` to find configuration patterns across the workspace

**Process:**

1. **Discover**: Use filesystem MCP to examine `./tools` directory and document
   all shared configurations
2. **Analyze**: Read each config file via MCP and review for best practices and
   Turbo compliance
3. **Cross-Reference**: Use MCP to scan workspace packages and verify
   configuration consumption
4. **Validate**: Check turbo.json, package.json files across workspace using
   filesystem MCP
5. **Optimize**: Fix issues and improve configurations for performance and
   maintainability
6. **Document**: Provide comprehensive analysis report with recommendations

**Focus on:**

- Configuration correctness and functionality
- Turbo monorepo optimization
- Developer experience improvements
- Build pipeline efficiency
- Workspace consistency and maintainability

**Required MCP Integration:** Use filesystem MCP server extensively for all file
operations. Start by listing the entire project structure, then systematically
read and analyze each shared configuration file. Apply "ultrathink" for complex
architectural decisions about configuration improvements.
