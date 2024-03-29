module.exports = {
  overrides: [
    {
      extends: ['../rules/typescript'],
      files: ['*.@(ts|tsx|cts|mts)'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
