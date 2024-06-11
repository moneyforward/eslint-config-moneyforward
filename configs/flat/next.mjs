// @ts-check
import next from '@next/eslint-plugin-next';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import nextRuleSetBase from '../../rules/next.js';

const nextRuleSet = {
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs['core-web-vitals'].rules,
  },
};

const nextRuleSetPages = {
  plugins: {
    '@next/next': next,
    import: importPlugin,
  },
  rules: {
    ...nextRuleSetBase.overrides[0].rules,
  },
};

export default [
  nextRuleSet,

  {
    files: ['**/@(app|pages)/**/*', '**/*.page.@(tsx|jsx|js)'],
    ...nextRuleSetPages,
  },
];
