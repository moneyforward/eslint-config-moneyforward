import tseslint from 'typescript-eslint';
import typescriptRuleSetBase from '../../rules/typescript.js';

const typescriptRuleSet = {
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  extends: [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  rules: typescriptRuleSetBase.rules,
};

export default tseslint.config({
  files: ['**/*.@(ts|tsx|cts|mts)'],

  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: process.env.TSCONFIG_ROOT_DIR ?? import.meta.dirname,
    },
  },

  settings: {
    // https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#importparsers
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
    },
  },

  ...typescriptRuleSet,
});
