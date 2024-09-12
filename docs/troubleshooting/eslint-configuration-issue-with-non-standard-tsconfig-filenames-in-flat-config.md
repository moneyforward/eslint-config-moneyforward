# ESLint Configuration Issue with Non-Standard TSConfig Filenames in Flat Config

When using a TSConfig filename other than `tsconfig.json` (e.g., `tsconfig.app.json`) in Flat Config, ESLint may not function correctly.

## Problem

Running ESLint might result in an error similar to:

```text
  0:0  error  Parsing error: ESLint was configured to run on `<tsconfigRootDir>/src/App.tsx` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/troubleshooting/typed-linting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
```

## Solution

In your `eslint.config.mjs` (or other ESLint configuration file), ensure that `parserOptions.project` is correctly set:

```js:Example of flat config
export default [
  // ...other configurations
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
      },
    },
  },
];
```

This configuration allows ESLint to reference the correct TSConfig file, which should resolve the issue.

## Notes

- Depending on your project structure, you might need to use an array or glob pattern for `parserOptions.project` to specify multiple TSConfig files.
