/**
 * Commitlint configuration for the design system monorepo
 * Enforces conventional commit format for better changelog generation
 * and semantic versioning support
 */

export default {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Type enum - allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation changes
        'style', // Code style changes (formatting, etc.)
        'refactor', // Code refactoring
        'test', // Adding or updating tests
        'chore', // Maintenance tasks
        'perf', // Performance improvements
        'ci', // CI/CD changes
        'build', // Build system changes
        'revert', // Revert previous commit
      ],
    ],

    // Scope enum - allowed scopes for this monorepo
    'scope-enum': [
      2,
      'always',
      [
        // Packages
        'core',
        'tokens',
        'themes',
        'utils',
        'icons',

        // Apps
        'docs',
        'playground',

        // Tools
        'eslint-config',
        'stylelint-config',
        'tsconfig',
        'build-scripts',
        'jest-config',

        // Infrastructure
        'monorepo',
        'ci',
        'deps',
        'config',

        // Release
        'release',
        'changeset',
      ],
    ],

    // Subject and body rules
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 150],

    // Header rules
    'header-max-length': [2, 'always', 100],
    'header-trim': [2, 'always'],

    // Footer rules
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },

  // Custom parser options
  parserPreset: {
    parserOpts: {
      // Allow longer header for detailed commit messages
      headerPattern: /^(\w*)(?:\(([^)]*)\))?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },

  // Ignore certain commit patterns
  ignores: [
    // Ignore merge commits
    commit => commit.includes('Merge'),
    // Ignore automated commits from tools
    commit => commit.includes('🤖'),
    commit => commit.includes('[skip ci]'),
    // Ignore initial commits
    commit => commit.includes('Initial commit'),
  ],

  // Default ignore rules
  defaultIgnores: true,

  // Help URL for commit format
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
