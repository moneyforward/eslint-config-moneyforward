module.exports = {
  overrides: [
    {
      extends: ['../rules/storybook'],
      files: ['*.stories.@(ts|tsx|js|jsx)', '*.story.@(ts|tsx|js|jsx)'],
    },
  ],
};
