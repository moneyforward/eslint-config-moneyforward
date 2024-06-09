module.exports = {
  overrides: [
    {
      extends: ['../rules/storybook'],
      files: [
        '*.stories.@(ts|tsx|js|jsx)',
        '*.story.@(ts|tsx|js|jsx)',
        '**/.storybook/**/*.@(ts|tsx|js|jsx)',
      ],
    },
  ],
};
