const { getESLintConfig } = require('../../helper');

test('should match ESLint Flat Configuration snapshot: node', async () => {
  const filePath = './dummy.js';
  const { rules, settings } = await getESLintConfig(filePath, __dirname, true);

  expect({ rules, settings }).toMatchSnapshot();
});
