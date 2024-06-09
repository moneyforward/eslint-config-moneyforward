module.exports = {
  overrides: [
    {
      extends: [
        '../../rules/jest',
        '../../rules/jest-dom',
        '../../rules/testing-library/react',
      ],
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
