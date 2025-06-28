# Claude AI Terminal Instructions: Turborepo Tailwind CSS Implementation

## Role & Expertise

Act as a senior frontend architect with 10+ years of experience in building
enterprise-scale design systems. You have deep expertise in monorepo
architectures, build optimization, and developer tooling. You follow industry
best practices and prioritize performance, maintainability, and developer
experience.

## Project Analysis Phase

1. **Initial Project Scan**

   ```
   Use filesystem MCP to scan the root directory and identify:
   - turbo.json configuration
   - Package structure (apps/, packages/)
   - Shared configurations location
   - Build system and scripts in root package.json
   ```

2. **Monorepo Structure Analysis**

   ```
   Examine the following key files:
   - /turbo.json - Understand pipeline and task dependencies
   - /package.json - Check workspaces configuration
   - /apps/*/package.json - Identify all applications
   - /packages/*/package.json - Identify shared packages
   - Existing CSS/styling setup in each app
   ```

3. **Identify Shared Config Pattern**
   ```
   Look for existing shared configs:
   - TypeScript config (tsconfig)
   - ESLint config
   - Build configs
   - Determine naming convention for shared packages
   ```

## Tailwind CSS Implementation Phase

4. **Create Shared Tailwind Config Package**

   ```
   Create a new shared package for Tailwind configuration:
   - Location: /packages/tailwind-config/ (or follow existing pattern)
   - Create package.json with proper name scope
   - Install dependencies: tailwindcss, postcss, autoprefixer
   - Create base tailwind.config.js
   - Create base postcss.config.js
   ```

5. **Base Configuration Files**

   ```
   In the shared package, create:

   tailwind.config.js:
   - Set content paths that work for monorepo structure
   - Configure theme extensions
   - Add any shared plugins

   postcss.config.js:
   - Configure tailwindcss plugin
   - Configure autoprefixer
   - Add any other PostCSS plugins needed
   ```

6. **Update Each Application**

   ```
   For each app in /apps/:
   - Add shared tailwind-config as dependency
   - Create/update postcss.config.js to extend shared config
   - Create/update tailwind.config.js to extend shared config
   - Add Tailwind directives to main CSS file
   - Update build scripts to include PostCSS processing
   - Ensure CSS is properly imported in entry point
   ```

7. **Update Build Pipeline**
   ```
   Modify turbo.json if needed:
   - Ensure CSS building is part of build pipeline
   - Add proper dependencies between packages
   - Configure caching for CSS builds
   ```

## Testing Phase

8. **Verify Installation**

   ```
   Run these checks:
   - npm/yarn/pnpm install from root
   - Check all packages resolved correctly
   - Verify no peer dependency warnings
   ```

9. **Test Build Process**

   ```
   Execute in order:
   - Run turbo build
   - Check for PostCSS processing logs
   - Verify CSS output files generated
   - Ensure Tailwind utilities are included
   ```

10. **Functional Testing**
    ```
    For each application:
    - Add a test component with Tailwind classes
    - Run development server
    - Verify styles are applied correctly
    - Test production build
    - Check for CSS purging in production
    ```

## Validation Checklist

Before considering the implementation complete, verify:

- [ ] All apps have Tailwind CSS working
- [ ] Shared configuration is properly referenced
- [ ] PostCSS is processing files (not Vite)
- [ ] Development mode hot-reloading works
- [ ] Production builds are optimized
- [ ] No duplicate Tailwind installations
- [ ] Turbo cache is working correctly
- [ ] All existing styles still function
- [ ] No build errors or warnings

## Error Handling

If you encounter issues:

1. Check workspace resolution in package manager
2. Verify relative paths in configs
3. Ensure PostCSS is in the build chain
4. Check for conflicting CSS processors
5. Validate content paths in Tailwind config

## Important Notes

- DO NOT use Vite for CSS processing
- Maintain existing build tools where possible
- Preserve all existing functionality
- Follow the monorepo's established patterns
- Document any significant changes made
