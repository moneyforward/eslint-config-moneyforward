module.exports = {
  overrides: [
    {
      files: ['**/__tests__/*', '**/*.test.[jt]s?(x)'],
      env: {
        jest: true,
      },
      extends: [
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/c3a8a4ebb38942c53362a36b9fd420639e951e9a/lib/configs/react.ts
        'plugin:testing-library/react',
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/3b00100fb161b83019b8bffe5c45b3c37b749da1/src/index.js
        'plugin:jest-dom/recommended',
      ],
      plugins: ['testing-library', 'jest-dom'],
    },
  ],
};
