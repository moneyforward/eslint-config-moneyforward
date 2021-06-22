module.exports = {
  extends: [
    "./rules/base",
    "./rules/typescript",
    "./rules/react",
  ].map(require.resolve),
  rules: {}
};
