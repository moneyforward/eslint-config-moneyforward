/*
 * Copyright (c) 2012 Airbnb
 *
 * Licensed under the MIT License: https://github.com/airbnb/javascript/blob/master/LICENSE.md
 *
 * This file is a copy of https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
 * with the following modifications:
 *
 * - Enable `jsx-handler-names` rule
 * - Enable `jsx-sort-props` rule
 * - Disable `jsx-uses-react` rule as it's no longer needed from React 17.
 * - Disable `jsx-uses-vars` rule as it's no longer needed from React 17.
 * - Disable `react-in-jsx-scope` rule as it may not be necessary depending on the builder and transpiler settings.
 * - Disable `no-array-index-key` rule as there're many situations where you have to use `index` as key.
 * - Disable `require-default-props` rule as it's not needed in TypeScript.
 * - Disable `forbid-foreign-prop-types` rule as it's not needed in TypeScript.
 * - Disable `default-props-match-prop-types` rule as it's not needed in TypeScript.
 * - Disable `no-redundant-should-component-update` rule
 * - Disable `button-has-type` rule as it doesn't allow specification by variables containing Prop.
 * - Change `namedComponents` and `unnamedComponents` to `arrow-function` in `function-component-definition` rule for TypeScript
 * - Disable `prefer-exact-props` rule as it's not needed in TypeScript.
 */

module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],

  rules: {
    // Prevent missing displayName in a React component definition
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Validate closing bracket location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': ['error'],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Enforce event handler naming conventions in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Validate props indentation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Limit maximum of props on a single line in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],

    // Prevent usage of .bind() in JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    // Prevent duplicate props in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Disallow undeclared variables in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],

    // Enforce props sorting
    // The order of props is as follows:
    //   1. React reserved props: e.g. key, ref
    //   2. Shorthand props: e.g. disabled
    //   3. Others
    //   4. Callbacks e.g. onClick
    // The props will no be sorted alphabetically.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],

    // Prevent React to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    // It's no longer needed from React 17.
    'react/jsx-uses-react': ['off'],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    // It's no longer needed from React 17.
    'react/jsx-uses-vars': ['off'],

    // Prevent usage of dangerous JSX properties
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // Prevent usage of setState in componentDidMount
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': ['error'],

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': ['error'],

    // Prevent direct mutation of this.state
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': ['error'],

    // Prevent usage of isMounted
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Prevent using string references
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent usage of unknown DOM property
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Require ES6 class declarations over React.createClass
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],

    // Prevent missing props validation in a React component definition
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    // Prevent missing React when using JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    // Depending on the builder and transpiler settings, this may not be necessary.
    'react/react-in-jsx-scope': 'off',

    // Require render() methods to return something
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': ['error'],

    // Enforce component methods order
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce spacing around jsx equals signs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // Enforce JSX indentation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // Disallow target="_blank" on links
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // only .jsx and .tsx files may have JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // prevent accidental JS comments from being injected into JSX as text
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // warn against using findDOMNode()
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // Forbid certain props on Components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': [
      'off',
      {
        // You can disallow using that the list of following:
        forbid: [
          {
            propName: 'forbidProp',
            disallowedFor: ['SomeComponent', 'AnotherComponent'],
            message:
              'Avoid using forbidProp for SomeComponent and AnotherComponent',
          },
        ],
      },
    ],

    // Forbid certain elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': [
      'off',
      {
        // You can disallow using elements that the list of following:
        forbid: [
          {
            element: 'ForbidElement',
            message: 'Use `AnotherElement` instead.',
          },
        ],
      },
    ],

    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent unused propType definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // Require style prop value be an object or var
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': ['error'],

    // Prevent invalid characters from appearing in markup
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // Prevent passing of children as props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Prevent usage of Array index in keys
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    // There're many situations where you have to use `index` as key.
    'react/no-array-index-key': 'off',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    // It's not needed in TypeScript.
    'react/require-default-props': ['off'],

    // Forbids using non-exported propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    // It's not needed in TypeScript.
    'react/forbid-foreign-prop-types': ['off'],

    // Prevent void DOM elements from receiving children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': ['error'],

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    // It's not needed in TypeScript.
    'react/default-props-match-prop-types': ['off'],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'off',

    // Prevent unused state values
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',

    // Enforces consistent naming for boolean props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],

    // Prevents common casing typos
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': ['error'],

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    // One JSX Element Per Line
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent using this.state within a this.setState
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': ['error'],

    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': ['off'],

    // Ensures inline tags are not rendered without spaces between them
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': ['error'],

    // Prevent this from being used in stateless functional components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': ['error'],

    // Disallow multiple spaces between inline JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': ['error'],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    // Enforce state initialization style
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'always'],

    // Enforces where React component static properties should be positioned
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'property assignment'],

    // Disallow JSX props spreading
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],

    // Prevent usage of `javascript:` URLs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': ['error'],

    // Enforce a specific function type for function components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Prevent react contexts from taking non-stable values
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': ['error'],

    // Prevent creating unstable components inside components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': ['error'],

    // Enforce that namespaces are not used in React elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': ['error'],

    // Prefer exact proptype definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    // It's not needed in TypeScript.
    'react/prefer-exact-props': 'off',

    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': ['error'],

    // Prevent usage of invalid attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': ['error'],

    // Ensure destructuring and symmetric naming of useState hook value and setter variables
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'error',

    // Enforce sandbox attribute on iframe elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'error',

    // Prevent problematic leaked values from being rendered
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': 'error',
  },
};
