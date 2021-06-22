module.exports = {
  extends: [
    "./rules/base",
    "./rules/typescript",
    "./rules/next",
  ].map(require.resolve),
  rules: {}
};
