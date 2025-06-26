/**
 * @design-system/jest-config/base
 *
 * Base Jest configuration for TypeScript projects in the monorepo
 * Provides sensible defaults for testing TypeScript/JavaScript code
 */

/** @type {import('jest').Config} */
const baseConfig = {
  // Test environment
  testEnvironment: 'node',

  // Module file extensions Jest will look for
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Transform configuration for TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          compilerOptions: {
            module: 'esnext',
            target: 'es2020',
            moduleResolution: 'node',
            allowSyntheticDefaultImports: true,
            esModuleInterop: true,
          },
        },
      },
    ],
  },

  // Module name mapping for path aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@design-system/(.*)$': '<rootDir>/../../packages/$1/src',
    '^@tools/(.*)$': '<rootDir>/../../tools/$1/src',
  },

  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/*.(test|spec).(ts|tsx|js|jsx)',
  ],

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/index.{ts,tsx,js,jsx}',
    '!src/**/__tests__/**',
    '!src/**/*.test.{ts,tsx,js,jsx}',
    '!src/**/*.spec.{ts,tsx,js,jsx}',
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Note: coverageReporters moved to global config

  // Coverage directory
  coverageDirectory: '<rootDir>/coverage',

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks after each test
  restoreMocks: true,

  // Setup files
  setupFilesAfterEnv: [],

  // Module directories
  moduleDirectories: ['node_modules', '<rootDir>/src'],

  // Ignore patterns for watch mode
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
  ],

  // Transform ignore patterns for pnpm workspaces
  transformIgnorePatterns: [
    'node_modules/(?!(@design-system|@testing-library|@babel/runtime)/)',
  ],

  // Note: verbose moved to CLI options

  // Error handling
  errorOnDeprecated: true,

  // Performance optimization
  maxWorkers: '50%',

  // Cache directory
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
};

export default baseConfig;