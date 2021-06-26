module.exports = {
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/9f1d618499b23e184a628365cb5e0ea48292cd6f/index.js
    'plugin:react/recommended',
    // https://github.com/facebook/react/blob/73ffce1b6fb7eff13414e35e40efe4269664e5ea/packages/eslint-plugin-react-hooks/src/index.js
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // don't have to use props-types
    'react/prop-types': 'off',
    // don't have to import React
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      // https://github.com/yannickcr/eslint-plugin-react/issues/1955
      version: 'detect',
    },
  },
};
