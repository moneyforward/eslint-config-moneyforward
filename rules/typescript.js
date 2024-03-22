const { rules: baseBestPracticesRules } = require('./best-practices');
const { rules: baseVariablesRules } = require('./variables');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],

  rules: {
    // Enforce dot notation whenever possible.
    // https://typescript-eslint.io/rules/dot-notation/
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // Disallow unused expressions.
    // https://typescript-eslint.io/rules/no-unused-expressions/
    // Replace 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      baseBestPracticesRules['no-unused-expressions'],

    // Require using Error objects as Promise rejection reasons.
    // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
    // require using Error objects as Promise rejection reasons
    '@typescript-eslint/prefer-promise-reject-errors':
      baseBestPracticesRules['prefer-promise-reject-errors'],

    // Disallow throwing literals as exceptions.
    // https://typescript-eslint.io/rules/no-throw-literal/
    // Replace 'no-throw-literal' rule with '@typescript-eslint' version
    // TODO: Disable this rule if you are using the React.Suspense.
    '@typescript-eslint/no-throw-literal':
      baseBestPracticesRules['no-throw-literal'],

    // Enforce naming conventions for everything across a codebase.
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

    // Disallow the use of variables before they are defined.
    // https://typescript-eslint.io/rules/no-use-before-define/
    // Replace 'no-use-before-define' rule with '@typescript-eslint' version.
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define':
      baseVariablesRules['no-use-before-define'],

    // Enforce type definitions to consistently use either `interface` or `type`.
    // https://typescript-eslint.io/rules/consistent-type-definitions/
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Enforce consistent usage of type imports.
    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],

    // Require Promise-like statements to be handled appropriately.
    // https://typescript-eslint.io/rules/no-floating-promises/
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],

    // Disallow Promises in places not designed to handle them.
    // https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    // Enforce template literal expressions to be of `string` type.
    // https://typescript-eslint.io/rules/restrict-template-expressions/
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
      },
    ],

    // Require switch-case statements to be exhaustive.
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],

    // Require explicit return types on functions and class methods.
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    '@typescript-eslint/explicit-function-return-type': ['off'],

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // Disallow the `any` type.
    // https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],

    // Disallow assigning a value with type `any` to variables and properties.
    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    '@typescript-eslint/no-unsafe-assignment': ['warn'],

    // Disallow calling a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-call/
    '@typescript-eslint/no-unsafe-call': ['warn'],

    // Disallow calling a function with a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-argument/
    '@typescript-eslint/no-unsafe-argument': ['warn'],

    // Disallow member access on a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    '@typescript-eslint/no-unsafe-member-access': ['warn'],

    // Enforce non-null assertions over explicit type casts.
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
    // You should use type assertion style "as" instead of non-null assertion style.
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],
  },

  overrides: [
    {
      files: ['*.@(js|cjs|mjs)'],
      rules: {
        // Disallow `@ts-<directive>` comments or require descriptions after directives.
        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/ban-ts-comment': ['off'],

        // Disallow `require` statements except in import statements.
        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
