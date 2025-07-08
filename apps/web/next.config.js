/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Enable only for production builds
  
  // Optimize server components
  serverExternalPackages: [],
  
  // Enable turbo for development
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Configure transpilation for workspace packages
  transpilePackages: [
    '@design-system/core',
    '@design-system/utils',
    '@design-system/themes',
    '@design-system/tokens',
    '@design-system/icons',
    '@design-system/tailwind-config',
  ],

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Environment variables
  env: {
    CUSTOM_KEY: 'value',
  },

  // Performance optimizations
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;