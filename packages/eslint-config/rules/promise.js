module.exports = {
  plugins: ['promise'],
  extends: ['plugin:promise/recommended'],

  rules: {
    // Require returning inside each `then()` to create readable and reusable Promise chains.
    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
    // In use cases that don't assume a return value, such as `React.Suspense`, this rule can be confusing.
    'promise/always-return': ['warn', { ignoreLastCallback: true }],

    // Disallow nested `then()` or `catch()` statements.
    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
    // Disallowing nesting may actually increase complexity.
    'promise/no-nesting': ['off'],
  },
};
