module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
        "plugin:@typescript-eslint/recommended",
      ],
    },
  ],
};
