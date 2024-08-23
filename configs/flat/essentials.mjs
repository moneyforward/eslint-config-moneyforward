// @ts-check
import globals from 'globals';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import bestPracticesRuleSet from '../../rules/best-practices.js';
import errorsRuleSet from '../../rules/errors.js';
import es6RuleSet from '../../rules/es6.js';
import importRuleSetBase from '../../rules/imports.js';
import promiseRuleSetBase from '../../rules/promise.js';
import styleRuleSet from '../../rules/style.js';
import variablesRuleSet from '../../rules/variables.js';

const importRuleSet = {
  plugins: {
    import: importPlugin,
  },
  settings: importRuleSetBase.settings,
  rules: {
    ...importPlugin.configs.recommended.rules,
    ...importPlugin.configs.errors.rules,
    ...importRuleSetBase.rules,
  },
};

const promiseRuleSet = {
  plugins: {
    promise: promisePlugin,
  },
  rules: {
    ...promisePlugin.configs.recommended.rules,
    ...promiseRuleSetBase.rules,
  },
};

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.builtin,
    },
  },

  bestPracticesRuleSet,
  errorsRuleSet,
  es6RuleSet,
  importRuleSet,
  promiseRuleSet,
  styleRuleSet,
  variablesRuleSet,
];
