module.exports = {
  plugins: ['@next/next'],
  extends: [
    // This config includes `plugin:@next/next/recommended`
    // https://github.com/vercel/next.js/blob/v14.1.3/packages/eslint-plugin-next/src/index.ts#L56
    'plugin:@next/next/core-web-vitals',
  ],
  rules: {},
};
