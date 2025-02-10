// @ts-check
import jest from 'eslint-plugin-jest';
// @ts-ignore
import jestDom from 'eslint-plugin-jest-dom';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDomRuleSetBase from '../../../rules/jest-dom.js';
import jestRuleSetBase from '../../../rules/jest.js';
import testingLibraryReactRuleSetBase from '../../../rules/testing-library/react.js';

const jestRuleSet = {
  plugins: {
    jest,
  },
  rules: {
    ...jest.configs.recommended.rules,
    ...jest.configs.style.rules,
    ...jestRuleSetBase.rules,
  },
};

const jestDomRuleSet = {
  plugins: {
    'jest-dom': jestDom,
  },
  rules: {
    ...jestDom.configs.recommended.rules,
    ...jestDomRuleSetBase.rules,
  },
};

const testingLibraryReactRuleSet = {
  plugins: {
    'testing-library': testingLibrary,
  },

  rules: {
    ...testingLibrary.configs.react.rules,
    ...testingLibraryReactRuleSetBase.rules,
  },
};

export default [
  {
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    ...jestRuleSet,
  },

  {
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    ...jestDomRuleSet,
  },

  {
    files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    ...testingLibraryReactRuleSet,
  },
];
