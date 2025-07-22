/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Apps
    '../../apps/*/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/*/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/*/stories/**/*.{js,ts,jsx,tsx,mdx}',
    // Packages
    '../../packages/*/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/*/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/*/lib/**/*.{js,ts,jsx,tsx,mdx}',
    // Allow individual apps to extend content paths
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color mappings for design system components
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
          foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-family-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
        sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
        base: [
          'var(--font-size-base)',
          { lineHeight: 'var(--line-height-base)' },
        ],
        lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
        xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
        '2xl': [
          'var(--font-size-2xl)',
          { lineHeight: 'var(--line-height-2xl)' },
        ],
        '3xl': [
          'var(--font-size-3xl)',
          { lineHeight: 'var(--line-height-3xl)' },
        ],
        '4xl': [
          'var(--font-size-4xl)',
          { lineHeight: 'var(--line-height-4xl)' },
        ],
        '5xl': [
          'var(--font-size-5xl)',
          { lineHeight: 'var(--line-height-5xl)' },
        ],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        full: 'var(--border-radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
  // Ensure compatibility with design tokens
  corePlugins: {
    preflight: true,
  },
};
