module.exports = {
  plugins: {
    tailwindcss: {
      config: require.resolve(
        '@design-system/tailwind-config/tailwind.config.js'
      ),
    },
    autoprefixer: {},
  },
};
