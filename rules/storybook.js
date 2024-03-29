module.exports = {
  plugins: ['storybook'],
  extends: ['plugin:storybook/recommended'],
  rules: {
    // `storiesOf` is deprecated and should not be used
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md
    // Since Storybook 5.2, the CSF format was introduced and the storiesOf API has been deprecated.
    'storybook/no-stories-of': 'error',

    // Do not define a title in meta
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md
    // Starting in CSF 3.0, story titles can be generated automatically.
    'storybook/no-title-property-in-meta': 'error',
  },
};
