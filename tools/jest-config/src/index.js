/**
 * @design-system/jest-config
 *
 * Shared Jest configurations for the design system monorepo
 * Provides base, React, and Node.js configurations
 */

import baseConfig from './base.js';
import reactConfig from './react.js';
import nodeConfig from './node.js';

/**
 * Base Jest configuration for TypeScript projects
 */
export const base = baseConfig;

/**
 * React-specific Jest configuration with jsdom and Testing Library setup
 */
export const react = reactConfig;

/**
 * Node.js-specific Jest configuration for build tools and utilities
 */
export const node = nodeConfig;

/**
 * Monorepo Jest configuration with multiple projects
 * @param {string} rootDir - The root directory of the monorepo
 * @returns {import('jest').Config} Jest configuration for monorepo
 */
export const createMonorepoConfig = (rootDir = process.cwd()) => {
  /** @type {import('jest').Config} */
  const monorepoConfig = {
    rootDir,
    projects: [
      // Tools packages (Node.js environment)
      {
        ...nodeConfig,
        displayName: 'tools',
        rootDir: `${rootDir}/tools`,
        testMatch: [
          '<rootDir>/**/__tests__/**/*.(ts|js)',
          '<rootDir>/**/*.(test|spec).(ts|js)',
        ],
      },
      // Core packages (mixed environment)
      {
        ...baseConfig,
        displayName: 'packages',
        rootDir: `${rootDir}/packages`,
        testMatch: [
          '<rootDir>/**/__tests__/**/*.(ts|tsx|js|jsx)',
          '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)',
        ],
      },
      // React apps and components
      {
        ...reactConfig,
        displayName: 'apps',
        rootDir: `${rootDir}/apps`,
        testMatch: [
          '<rootDir>/**/__tests__/**/*.(ts|tsx|js|jsx)',
          '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)',
        ],
      },
    ],
    // Global coverage settings
    collectCoverage: true,
    coverageDirectory: `${rootDir}/coverage`,
    coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
    // Watch mode settings
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  };

  return monorepoConfig;
};

/**
 * Default export provides all configurations
 */
export default {
  base,
  react,
  node,
  createMonorepoConfig,
};
