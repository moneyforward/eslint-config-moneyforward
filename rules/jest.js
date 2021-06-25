module.exports = {
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ["**/__tests__/*", "**/*.test.[jt]s?(x)"],
      extends: [
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/src/index.ts
        "plugin:jest/recommended",
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/master/src/index.js
        "plugin:jest-dom/recommended",
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts
        "plugin:testing-library/react",
      ],
    }
  ],
};
