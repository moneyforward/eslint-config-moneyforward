// @ts-check
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';
import storybookRuleSetBase from '../../rules/storybook.js';

const storybookRuleSetStories = {
  plugins: {
    storybook,
    import: importPlugin,
  },

  rules: {
    ...storybook.configs['flat/csf-strict'].rules,
    ...storybookRuleSetBase.rules,
    'import/no-default-export': ['off'],
  },
};

const storybookRuleSetConfig = {
  plugins: {
    storybook,
    import: importPlugin,
  },
  rules: {
    ...storybook.configs['flat/recommended'].rules,
    'import/no-default-export': ['off'],
  },
};

export default [
  {
    files: ['**/*.@(stories|story).@(ts|tsx|js|jsx|mjs|cjs)'],
    ...storybookRuleSetStories,
  },

  {
    files: ['**/.storybook/**/*.@(ts|tsx|js|jsx|mjs|cjs)'],
    ...storybookRuleSetConfig,
  },
];
