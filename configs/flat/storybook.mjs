// @ts-check
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';

export default [
  {
    plugins: {
      storybook,
      import: importPlugin,
    },
  },

  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/csf-strict'],

  {
    files: ['**/*.@(stories|story).@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'import/no-default-export': ['off'],
    },
  },
];
