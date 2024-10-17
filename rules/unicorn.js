module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // Move function definitions to the highest possible scope.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
    // To clarify the scope of a function, it may be better to define it nested.
    'unicorn/consistent-function-scoping': ['off'],

    // Enforce a case style for filenames.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    // The common naming convention for modules in JavaScript is `camelCase` or `PascalCase`,
    // so it is desirable to align the file naming convention with it.
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],

    // Enforce the use of new for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
    // This rule conflicts with the `no-new-array` rule.
    // This rule cannot be excluded for `array` alone, so we will be forced to disable it completely.
    'unicorn/new-for-builtins': ['off'],

    // Prevent passing a function reference directly to iterator methods.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
    // If you use TypeScript properly, you will rarely encounter this trouble.
    'unicorn/no-array-callback-reference': ['off'],

    // Prefer `for…of` over the `forEach` method.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    // `forEach` is too readable to be banned.
    'unicorn/no-array-for-each': ['off'],

    // Disallow `Array#reduce()` and `Array#reduceRight()`.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    // It's true that `reduce` can impair readability depending on how it is used,
    // but it is too shame to be banned.
    'unicorn/no-array-reduce': ['off'],

    // Disallow negated conditions.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
    // Whether a negated condition is difficult to read depends on the context.
    'unicorn/no-negated-condition': ['off'],

    // Disallow the use of the `null` literal.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    // `undefined` and `null` have completely different meanings, so it's incorrect in JavaScript to standardize on `undefined`.
    'unicorn/no-null': ['off'],

    // Prevent abbreviations.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    // Use of widely recognized abbreviations is acceptable.
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          Acc: true,
          acc: true,
          Args: true,
          args: true,
          i: true,
          j: true,
          Num: true,
          num: true,
          Param: true,
          param: true,
          Params: true,
          params: true,
          Prop: true,
          prop: true,
          Props: true,
          props: true,
          Ref: true,
          ref: true,
          Refs: true,
          refs: true,
          Src: true,
          src: true,
          Var: true,
          var: true,
        },
      },
    ],

    // Enforce consistent brace style for case clauses.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
    // Forcing braces into every use case is a bit too much.
    'unicorn/switch-case-braces': ['error', 'avoid'],
  },

  overrides: [
    {
      files: ['*.@(jsx|tsx)'],
      rules: {
        // Disallow anonymous functions and classes as the default export.
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md
        // This rule conflicts with the `react/function-component-definition` rule.
        'unicorn/no-anonymous-default-export': ['off'],
      },
    },
  ],
};
