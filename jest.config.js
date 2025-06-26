/**
 * Root Jest configuration for the design system monorepo
 * Uses our shared configuration packages for consistency
 */

import { createMonorepoConfig } from './tools/jest-config/src/index.js';

const config = createMonorepoConfig();

export default config;