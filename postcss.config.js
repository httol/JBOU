module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    /**
     * compress css when production
     * https://tailwindcss.com/docs/optimizing-for-production
     */
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
