module.exports = {
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js
    "plugin:react/recommended",
    // https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/index.js
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // don't have to use props-types
    "react/prop-types": "off",
    // don't have to import React
    "react/react-in-jsx-scope": "off"

  },
  settings: {
    react: {
      // https://github.com/yannickcr/eslint-plugin-react/issues/1955
      version: "detect",
    }
  },
};
