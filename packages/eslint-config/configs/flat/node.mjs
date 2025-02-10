// @ts-check
import n from 'eslint-plugin-n';
import nodeRuleSetBase from '../../rules/node.js';

const nodeRuleSet = {
  plugins: {
    n,
  },
  rules: {
    ...n.configs['flat/recommended'].rules,
    ...nodeRuleSetBase.rules,
  },
};

export default [nodeRuleSet];
