/*
 * Copyright (c) 2012 Airbnb
 *
 * Licensed under the MIT License: https://github.com/airbnb/javascript/blob/master/LICENSE.md
 *
 * This file is a copy of https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
 * with the following modifications:
 *
 * - Disable `no-shadow` rule as it'll also warn about variables with short lifetimes, such as callback function and loop counters.
 * - Disable `no-undef` rule as it'll also warn about APIs that are even obvious, such as `document` and `window`.
 * - Disable `no-use-before-define` rule to give priority to writing order that takes readability into account.
 */

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow deletion of variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead.',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead.',
      },
      ...confusingBrowserGlobals.map((g) => ({
        name: g,
        message: `Use window.${g} instead.`,
      })),
    ],

    // disallow declaration of variables already declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // disallow shadowing of names such as arguments
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // disallow use of undefined when initializing variables
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // disallow use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': ['off'],
  },
};
