module.exports = {
  extends: ['./configs/essentials', './configs/node', 'prettier'],

  overrides: [
    {
      files: ['*.test.js'],
      extends: ['./rules/jest'],
    },
  ],
};
