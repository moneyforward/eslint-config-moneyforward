module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        // https://github.com/typescript-eslint/typescript-eslint/blob/8cfe93372e1d826e54febc3aeb7047c792b90963/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
