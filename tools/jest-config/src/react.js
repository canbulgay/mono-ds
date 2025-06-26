/**
 * @design-system/jest-config/react
 *
 * React-specific Jest configuration extending the base configuration
 * Includes React Testing Library setup and DOM environment
 */

import baseConfig from './base.js';

/** @type {import('jest').Config} */
const reactConfig = {
  ...baseConfig,

  // Use jsdom for React components
  testEnvironment: 'jsdom',

  // Additional module file extensions for React
  moduleFileExtensions: [...baseConfig.moduleFileExtensions, 'svg'],

  // Transform configuration with React support
  transform: {
    ...baseConfig.transform,
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    ],
  },

  // Module name mapping for React assets
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },

  // Setup files for React testing
  setupFilesAfterEnv: [],

  // Test environment options for jsdom
  testEnvironmentOptions: {
    url: 'http://localhost',
  },

  // Additional coverage collection patterns for React
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/stories/**',
    '!src/**/__stories__/**',
  ],

  // Transform ignore patterns for React dependencies
  transformIgnorePatterns: [
    'node_modules/(?!(@design-system|@testing-library|@babel/runtime|react-.*)/)',
  ],

  // Global configuration for React testing
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
};

export default reactConfig;