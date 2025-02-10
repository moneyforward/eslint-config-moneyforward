module.exports = {
  plugins: ['jsdoc'],
  extends: ['plugin:jsdoc/recommended-typescript-error'],
  rules: {
    // Checks for dupe @param names, that nested param names have roots, and that parameter names in function declarations match jsdoc param names.
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: false,
      },
    ],

    // Reports invalid jsdoc (block) tag names.
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
    'jsdoc/check-tag-names': [
      'error',
      {
        // Enable additional tags from TSDoc.
        definedTags: ['remarks', 'typeParam'],
      },
    ],

    // Requires that all functions (and potentially other contexts) have a description.
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md
    'jsdoc/require-description': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
      },
    ],

    // Requires a hyphen before `@param` descriptions (and optionally before `@property` descriptions)
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md
    'jsdoc/require-hyphen-before-param-description': ['error', 'always'],

    // Checks for presence of jsdoc comments, on functions and potentially other contexts (optionally limited to exports).
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
        checkConstructors: false,
      },
    ],

    // Requires that all function parameters are documented with a `@param` tag.
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
    'jsdoc/require-param': [
      'error',
      {
        checkDestructuredRoots: false,
      },
    ],

    // Enforces lines (or no lines) between tags
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
    'jsdoc/tag-lines': [
      'error',
      'always',
      {
        startLines: 1,
        applyToEndTag: false,
      },
    ],

    // Sorts tags by a specified sequence according to tag name, optionally adding line breaks between tag groups
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md
    'jsdoc/sort-tags': [
      'error',
      {
        reportIntraTagGroupSpacing: false,
      },
    ],

    // Requires that return statements are documented.
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md
    // TypeScript's completion function is sufficient.
    'jsdoc/require-returns': ['off'],
  },

  overrides: [
    {
      files: ['*.@(js|cjs|mjs)'],
      rules: {
        // Requires that each `@param` tag has a type value (within curly brackets).
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md
        'jsdoc/require-param-type': ['error'],

        // Requires that return statements are documented.
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md
        'jsdoc/require-returns': ['error'],

        // Requires that `@returns` tag has a type value (in curly brackets).
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md
        'jsdoc/require-returns-type': ['error'],

        // Prohibits types on `@param` or `@returns` (redundant with TypeScript)
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md
        'jsdoc/no-types': ['off'],
      },
    },
  ],
};
