// @ts-check
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import * as storybook from 'eslint-plugin-storybook';
import storybookRuleSetBase from '../../rules/storybook.js';

const storybookRuleSetStories = {
  plugins: {
    storybook,
    import: importPlugin,
  },

  rules: {
    ...storybook.configs.recommended.overrides[0].rules,
    ...storybook.configs['csf-strict'].rules,
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
    ...storybook.configs.recommended.overrides[1].rules,
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
