/**
 * Root Stylelint configuration for the design system monorepo
 * Uses our shared configuration packages for consistency
 */

import { base, scss, cssInJs } from './tools/stylelint-config/src/index.js';

export default {
  // Default configuration extends base
  ...base,

  // Ignore generated and compiled files
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/storybook-static/**',
    '**/*.min.css',
    '**/compiled.css', // Ignore Tailwind compiled CSS
  ],

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
    {
      // Special configuration for Tailwind CSS files
      files: ['**/tailwind.css', '**/globals.css', '**/theme.css'],
      rules: {
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [
              'tailwind',
              'apply',
              'variants',
              'responsive',
              'screen',
              'layer',
              'property',
              'theme',
            ],
          },
        ],
        'function-no-unknown': [
          true,
          {
            ignoreFunctions: ['theme', 'calc'],
          },
        ],
        'selector-class-pattern': null, // Allow utility classes
        'custom-property-pattern': null, // Allow CSS custom properties
        'declaration-no-important': null, // Tailwind uses !important
      },
    },
    {
      // Special configuration for CSS Modules
      files: ['**/*.module.css'],
      rules: {
        'selector-class-pattern': null, // CSS modules generate class names
        'declaration-no-important': null, // CSS modules may need !important for specificity
        'media-feature-name-value-no-unknown': null, // Allow modern CSS features
        'at-rule-prelude-no-invalid': null, // Allow browser-specific at-rules
      },
    },
  ],
};
