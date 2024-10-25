module.exports = {
  extends: [
    '../../rules/best-practices',
    '../../rules/errors',
    '../../rules/es6',
    '../../rules/imports',
    '../../rules/promise',
    '../../rules/style',
    '../../rules/unicorn',
    '../../rules/variables',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
