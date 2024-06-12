# Migrate to Flat Config

Starting with ESLint v8.21.0, a new configuration method, Flat Config, has been officially introduced. This new format aims to reduce the complexity of configuration files and make them more intuitive and understandable. And eslint-config-moneyforward also officially supports Flat Config from v4.0.0. This document explains how to migrate from the old eslintrc format to the Flat Config format.

## Step1: Understand your existing configuration

First, review your existing the `.eslintrc.*` file and understand the rules, environment settings, etc. based on eslint-config-moneyforward.

```js
// .eslintrc.js
module.exports = {
  extends: [
    'moneyforward/essentials',
    'moneyforward/next',
    'moneyforward/react',
    'moneyforward/typescript',
    'moneyforward/test/react',
    'prettier',
  ],
  rules: {
    'no-bitwise': ['off'],
    'no-plusplus': ['off'],
  },
  overrides: [
    {
      files: ['**/*.@(ts|tsx)'],
      rules: {
        '@typescript-eslint/no-throw-literal': ['off'],
      },
    },
  ],
};
```

## Step2: Create a new configuration file

Flat Config uses a new file name `eslint.config.js` (or `eslint.config.mjs`), instead of `.eslintrc.*`. Create this file in the same directory as the existing `.eslintrc.*`.

## Step3: Write the settings in Flat Config format

Write the following settings in the created `eslint.config.js`.

```js
// eslint.config.js
import {
  essentials,
  next,
  react,
  test,
  typescript,
} from 'eslint-config-moneyforward/flat';
import prettier from 'eslint-config-prettier';

export default [
  ...essentials,
  ...next,
  ...react,
  ...typescript,
  ...test.react,

  {
    rules: {
      'no-bitwise': ['off'],
      'no-plusplus': ['off'],
    },
  },
  {
    files: ['**/*.@(ts|tsx)'],
    rules: {
      '@typescript-eslint/no-throw-literal': ['off'],
    },
  },

  prettier,
];
```

## Step4: Delete the `.eslintrc.*` file

After you finish migrating to Flat Config, delete the existing `.eslintrc.*`.

## Step5: Test and Tuning

Run ESLint to test that the newly created configuration works currently. If any problems occur, tune and adjust the configuration file to resolve the issue.

## References

- [Configuration Migration Guide - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/configure/migration-guide)
