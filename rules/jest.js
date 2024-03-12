module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    // Disallow duplicate setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': ['error'],
  },
};
