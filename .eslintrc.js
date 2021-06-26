module.exports = {
  extends: ['./configs/base', './configs/node', './configs/jest.js'].map(
    require.resolve,
  ),
};
