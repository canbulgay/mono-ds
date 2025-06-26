/**
 * @design-system/eslint-config
 *
 * Shared ESLint configuration for the design system monorepo
 * Built with ESLint 9 flat config format for optimal performance
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import configPrettier from 'eslint-config-prettier';

/**
 * Base configuration for all TypeScript/JavaScript files
 */
export const base = tseslint.config(
  // ESLint recommended rules
  js.configs.recommended,

  // TypeScript ESLint recommended rules
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Base language options
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Import plugin configuration
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'error',
    },
  },

  // Custom rules for the design system
  {
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      // General code quality rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      eqeqeq: ['error', 'always'],
    },
  },

  // Prettier integration (must be last)
  configPrettier
);

/**
 * React-specific configuration
 */
export const react = tseslint.config(
  // Extend base configuration
  ...base,

  // React plugin configuration
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,

      // Custom React rules
      'react/prop-types': 'off', // We use TypeScript for prop validation
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/self-closing-comp': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],

      // Accessibility rules
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
  }
);

/**
 * Node.js specific configuration
 */
export const node = tseslint.config(
  // Extend base configuration
  ...base,

  {
    languageOptions: {
      globals: {
        // Node.js globals
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      // Node.js specific rules
      'no-console': 'off', // Console is expected in Node.js
      'no-process-exit': 'error',
    },
  }
);

/**
 * Test files configuration
 */
export const test = tseslint.config(
  // Extend base configuration
  ...base,

  {
    rules: {
      // Relaxed rules for test files
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
    },
  }
);

/**
 * Configuration for disabling type-aware linting on JS files
 */
export const disableTypeChecked = tseslint.configs.disableTypeChecked;

/**
 * Default export with all configurations
 */
export default {
  base,
  react,
  node,
  test,
  disableTypeChecked,
};
