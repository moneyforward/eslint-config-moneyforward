// @ts-check
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptRuleSetBase from '../../rules/typescript.js';

const typescriptRuleSet = {
  plugins: {
    '@typescript-eslint': typescriptEslint,
  },
  rules: {
    ...typescriptEslint.configs['eslint-recommended'].overrides?.[0].rules,
    ...typescriptEslint.configs['strict-type-checked'].rules,
    ...typescriptEslint.configs['stylistic-type-checked'].rules,
    ...typescriptRuleSetBase.rules,
  },
};

export default [
  {
    files: ['**/*.@(ts|tsx|cts|mts)'],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: true,
      },
    },

    settings: {
      // https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#importparsers
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
      },
    },

    ...typescriptRuleSet,
  },
];
