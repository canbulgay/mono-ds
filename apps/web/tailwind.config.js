import baseConfig from '../../packages/tailwind-config/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Include design system components
    '../../packages/core/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/utils/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/icons/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};