import type { StorybookConfig } from '@storybook/react-webpack5';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
  webpackFinal: async config => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@design-system/core': join(__dirname, '../../../packages/core/src'),
      '@design-system/tokens': join(__dirname, '../../../packages/tokens/src'),
      '@design-system/themes': join(__dirname, '../../../packages/themes/src'),
      '@design-system/utils': join(__dirname, '../../../packages/utils/src'),
      '@design-system/icons': join(__dirname, '../../../packages/icons/src'),
    };
    return config;
  },
};
export default config;
