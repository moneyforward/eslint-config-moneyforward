module.exports = {
  extends: [
    require.resolve('./react'),
    // https://github.com/vercel/next.js/blob/6f420962338fb99a377bde8e1e663bc202c95b68/packages/eslint-plugin-next/lib/index.js
    'plugin:@next/next/recommended',
  ],
  plugins: ['@next/next'],
};
