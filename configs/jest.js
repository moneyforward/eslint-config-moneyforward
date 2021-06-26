module.exports = {
  overrides: [
    {
      files: [
        "**/__tests__/*",
        "**/*.test.[jt]s?(x)"
      ],
      env: {
        jest: true,
      },
      extends: [
        // https://github.com/jest-community/eslint-plugin-jest/blob/9f4f669bd238e2ede33f13b087d27ff81a444d64/src/index.ts
        "plugin:jest/recommended",
      ],
      plugins: [
        'jest',
      ]
    }
  ],
};
