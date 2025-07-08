import config from '@design-system/eslint-config';

export default [
  ...config.react,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'out/**',
      '**/*.d.ts',
      'coverage/**',
      'public/**',
    ],
  },
  {
    files: ['**/*.config.{js,ts}'],
    ...config.disableTypeChecked,
  },
];