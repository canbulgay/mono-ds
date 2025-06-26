/**
 * Root ESLint configuration for the design system monorepo
 * Uses our shared configuration packages for consistency
 */

import { base, react, node, test, disableTypeChecked } from './tools/eslint-config/src/index.js';

export default [
  // Ignore patterns
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/storybook-static/**',
      '**/*.tsbuildinfo',
      '**/pnpm-lock.yaml',
    ],
  },

  // Base configuration for all TypeScript/JavaScript files
  ...base,

  // React configuration for React components and apps
  {
    files: ['apps/docs/**/*.{ts,tsx,js,jsx}', '**/stories/**/*.{ts,tsx,js,jsx}'],
    extends: [...react],
  },

  // Node.js configuration for build scripts and configs
  {
    files: [
      'tools/**/*.{ts,js}',
      '*.config.{ts,js}',
      '**/jest.config.{ts,js}',
      '**/webpack.config.{ts,js}',
      '**/rollup.config.{ts,js}',
      '**/vite.config.{ts,js}',
    ],
    extends: [...node],
  },

  // Test configuration for test files
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}', '**/test/**/*.{ts,tsx,js,jsx}'],
    extends: [...test],
  },

  // Disable type-checked rules for JavaScript files
  {
    files: ['**/*.js', '**/*.jsx'],
    extends: [disableTypeChecked],
  },
];