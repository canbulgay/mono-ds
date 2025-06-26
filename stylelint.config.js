/**
 * Root Stylelint configuration for the design system monorepo
 * Uses our shared configuration packages for consistency
 */

import { base, scss, cssInJs } from './tools/stylelint-config/src/index.js';

export default {
  // Default configuration extends base
  ...base,
  
  // Override configurations for specific file patterns
  overrides: [
    {
      files: ['**/*.scss', '**/*.sass'],
      ...scss,
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: 'postcss-styled-components',
      ...cssInJs,
    },
  ],
};