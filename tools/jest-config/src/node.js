/**
 * @design-system/jest-config/node
 *
 * Node.js-specific Jest configuration for build tools and utilities
 * Optimized for testing Node.js scripts and configurations
 */

import baseConfig from './base.js';

/** @type {import('jest').Config} */
const nodeConfig = {
  ...baseConfig,

  // Node environment for build tools and utilities
  testEnvironment: 'node',

  // Test patterns for Node.js files
  testMatch: [
    '**/__tests__/**/*.(ts|js)',
    '**/*.(test|spec).(ts|js)',
    '**/test/**/*.(ts|js)',
  ],

  // Coverage collection for Node.js projects
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,js}',
    '!src/**/__tests__/**',
    '!src/**/*.test.{ts,js}',
    '!src/**/*.spec.{ts,js}',
    '!src/**/test/**',
  ],

  // Module name mapping for Node.js utilities
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^~/(.*)$': '<rootDir>/$1',
  },

  // Transform configuration optimized for Node.js
  transform: {
    '^.+\\.(ts)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          compilerOptions: {
            module: 'commonjs',
            target: 'es2020',
            moduleResolution: 'node',
            esModuleInterop: true,
            allowSyntheticDefaultImports: true,
          },
        },
      },
    ],
  },

  // Transform ignore patterns for Node.js dependencies
  transformIgnorePatterns: [
    'node_modules/(?!(@design-system|@babel/runtime)/)',
  ],

  // Setup files for Node.js testing
  setupFilesAfterEnv: [],

  // Note: testTimeout moved to individual test files

  // Enable fake timers for Node.js testing
  fakeTimers: {
    enableGlobally: false,
  },
};

export default nodeConfig;