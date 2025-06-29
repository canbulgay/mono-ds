# Senior Frontend Architect Instructions: Button Component Migration from Styled Components to Tailwind CSS

## Context & Objective

As a senior frontend architect, you will systematically migrate the Button
component from styled-components to Tailwind CSS, ensuring maintainability,
performance, and adherence to our design system. You'll use the cn utility
function for dynamic className management and leverage our shared Tailwind
configuration.

## Phase 1: Analysis & Planning

### 1.1 Component Discovery

```
Using filesystem MCP, locate and analyze:
- Current Button component implementation (likely in /components/Button or /packages/ui/src/Button)
- All styled-components definitions
- Current prop interface and TypeScript types
- Component usage patterns across the codebase
- Any Button-related style constants or theme values
```

### 1.2 Design System Mapping

```
Document the following from styled-components:
- All variant types (primary, secondary, ghost, etc.)
- Size scales (sm, md, lg, xl)
- State styles (hover, active, focus, disabled)
- Animation/transition definitions
- Theme token usage (colors, spacing, radii)
- Responsive behaviors
```

### 1.3 Tailwind Configuration Audit

```
Review shared Tailwind config for:
- Custom color palette alignment with current theme
- Spacing scale compatibility
- Border radius tokens
- Animation/transition utilities
- Any required custom utilities or plugins
- Identify gaps that need configuration updates
```

## Phase 2: Architecture Design

### 2.1 Install/Verify Dependencies

```
Ensure proper setup:
- clsx or classnames package (for cn function)
- tailwind-merge for conflict resolution
- TypeScript types for props
```

### 2.2 Create cn Utility (if not exists)

```typescript
// packages/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2.3 Design Component Architecture

```
Structure the new component with:
- Base styles as const
- Variant mappings using cva or manual objects
- Size mappings
- State handling approach
- Compound variant support
```

## Phase 3: Implementation

### 3.1 Create New Button Component

```typescript
// Example structure to follow:

const buttonVariants = {
  base: 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      // ... map all existing variants
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      // ... map all existing sizes
    },
  },
  compoundVariants: [
    // Handle any compound variant logic
  ],
};
```

### 3.2 Preserve API Compatibility

```
Maintain the exact same props interface:
- Keep all existing prop names
- Preserve TypeScript types
- Ensure backward compatibility
- Add proper JSDoc comments
```

### 3.3 Handle Dynamic Styles

```
For any dynamic styles in styled-components:
- Convert CSS-in-JS interpolations to cn() conditions
- Use style prop only for truly dynamic values (if absolutely necessary)
- Prefer Tailwind utilities with cn() over inline styles
```

## Phase 4: Migration Strategy

### 4.1 Create Migration Plan

```
1. Keep old Button component temporarily as ButtonLegacy
2. Create new Button component alongside
3. Set up feature flag or export strategy
4. Plan phased rollout
```

### 4.2 Update Import Paths

```
Create a migration script to:
- Find all Button imports
- Prepare for batch update
- Document any breaking changes
```

## Phase 5: Testing & Validation

### 5.1 Visual Regression Tests

```
Ensure 1:1 visual parity:
- Screenshot comparison of all variants
- Test all interactive states
- Verify responsive behavior
- Check dark mode (if applicable)
```

### 5.2 Performance Validation

```
Measure and compare:
- Bundle size impact
- Runtime performance
- Initial render performance
- Style computation efficiency
```

### 5.3 Accessibility Audit

```
Verify maintained accessibility:
- Focus indicators
- Keyboard navigation
- ARIA attributes
- Screen reader compatibility
```

## Phase 6: Documentation & Rollout

### 6.1 Update Documentation

```
Document:
- Migration guide for developers
- New className prop patterns
- Examples of extending styles
- Performance improvements
```

### 6.2 Create Code Examples

```tsx
// Show common patterns:
<Button variant="primary" size="lg" className="mt-4">
  Click me
</Button>

// Custom styling example:
<Button
  variant="ghost"
  className={cn("custom-class", someCondition && "conditional-class")}
>
  Dynamic Button
</Button>
```

## Critical Considerations

### Performance Optimization

- Avoid runtime style generation
- Leverage Tailwind's PurgeCSS in production
- Minimize cn() computation complexity
- Use memo where appropriate

### Maintainability

- Keep variant definitions centralized
- Use TypeScript for variant type safety
- Document design decisions
- Create Storybook stories for all variants

### Team Alignment

- Review with design team for token accuracy
- Validate with other engineers
- Ensure CI/CD pipeline compatibility
- Plan training if needed

## Success Criteria

Before considering migration complete:

- [ ] Zero visual regressions
- [ ] Improved or equal performance metrics
- [ ] All tests passing
- [ ] TypeScript types fully compatible
- [ ] Documentation updated
- [ ] Team sign-off received
- [ ] Migration path clearly defined

## Error Prevention

Common pitfalls to avoid:

1. Don't use arbitrary values when design tokens exist
2. Avoid important! flags - fix specificity properly
3. Don't recreate Tailwind utilities in CSS
4. Prevent className conflicts with twMerge
5. Maintain semantic naming conventions

Remember: This migration should improve DX while maintaining design system
integrity. Focus on long-term maintainability over short-term convenience.
