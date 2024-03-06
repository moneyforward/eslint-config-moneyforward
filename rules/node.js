module.exports = {
  plugins: ['n'],
  extends: ['plugin:n/recommended'],
  rules: {
    // require all requires be top-level
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    'n/global-require': ['error'],

    // disallow use of new operator with the require function
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    'n/no-new-require': ['error'],

    // disallow string concatenation with __dirname and __filename
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    'n/no-path-concat': ['error'],
  },
};
