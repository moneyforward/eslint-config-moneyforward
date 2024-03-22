const { rules: baseBestPracticesRules } = require('./best-practices');
const { rules: baseVariablesRules } = require('./variables');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],

  rules: {
    // https://typescript-eslint.io/rules/dot-notation/
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // https://typescript-eslint.io/rules/no-unused-expressions/
    // Replace 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      baseBestPracticesRules['no-unused-expressions'],

    // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
    // require using Error objects as Promise rejection reasons
    '@typescript-eslint/prefer-promise-reject-errors':
      baseBestPracticesRules['prefer-promise-reject-errors'],

    // https://typescript-eslint.io/rules/no-throw-literal/
    // Replace 'no-throw-literal' rule with '@typescript-eslint' version
    // TODO: Disable this rule if you are using the React.Suspense.
    '@typescript-eslint/no-throw-literal':
      baseBestPracticesRules['no-throw-literal'],

    // https://typescript-eslint.io/rules/naming-convention/
    // Replace 'camelcase' rule with '@typescript-eslint/naming-convention'
    camelcase: 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings.
    // However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // https://typescript-eslint.io/rules/no-use-before-define/
    // Replace 'no-use-before-define' rule with '@typescript-eslint' version.
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define':
      baseVariablesRules['no-use-before-define'],

    // https://typescript-eslint.io/rules/consistent-type-definitions/
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],

    // https://typescript-eslint.io/rules/no-floating-promises/
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    // https://typescript-eslint.io/rules/restrict-template-expressions/
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
      },
    ],

    // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],

    // https://typescript-eslint.io/rules/explicit-function-return-type/
    '@typescript-eslint/explicit-function-return-type': ['off'],

    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': ['off'],

    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    '@typescript-eslint/no-unsafe-assignment': ['warn'],

    // https://typescript-eslint.io/rules/no-unsafe-call/
    '@typescript-eslint/no-unsafe-call': ['warn'],

    // https://typescript-eslint.io/rules/no-unsafe-argument/
    '@typescript-eslint/no-unsafe-argument': ['warn'],

    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    '@typescript-eslint/no-unsafe-member-access': ['warn'],

    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
    // You should use type assertion style "as" instead of non-null assertion style.
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],

    // https://typescript-eslint.io/rules/prefer-for-of/
    // "for-of" is prohibited with "no-restricted-syntax". The for statement uses an index-based syntax.
    '@typescript-eslint/prefer-for-of': ['off'],
  },

  overrides: [
    {
      files: ['*.@(js|cjs|mjs)'],
      rules: {
        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/ban-ts-comment': ['off'],

        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
