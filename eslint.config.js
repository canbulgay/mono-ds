/**
 * Root ESLint configuration for the design system monorepo
 * Uses our shared configuration packages for consistency
 */

import {
  base,
  react,
  node,
  test,
  disableTypeChecked,
} from './tools/eslint-config/src/index.js';

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
  ...react.map(config => ({
    ...config,
    files: [
      'apps/docs/**/*.{ts,tsx,js,jsx}',
      'packages/core/**/*.{ts,tsx,js,jsx}',
      '**/stories/**/*.{ts,tsx,js,jsx}',
    ],
  })),

  // Node.js configuration for build scripts and configs
  ...node.map(config => ({
    ...config,
    files: [
      'tools/**/*.{ts,js}',
      '*.config.{ts,js}',
      '**/jest.config.{ts,js}',
      '**/webpack.config.{ts,js}',
      '**/rollup.config.{ts,js}',
      '**/vite.config.{ts,js}',
    ],
  })),

  // Test configuration for test files
  ...test.map(config => ({
    ...config,
    files: [
      '**/*.test.{ts,tsx,js,jsx}',
      '**/*.spec.{ts,tsx,js,jsx}',
      '**/test/**/*.{ts,tsx,js,jsx}',
    ],
  })),

  // Disable type-checked rules for JavaScript files
  {
    files: ['**/*.js', '**/*.jsx'],
    ...disableTypeChecked,
  },
];
