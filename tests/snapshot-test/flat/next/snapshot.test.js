const { getESLintConfig } = require('../../helper');

test('should match ESLint Flat Configuration snapshot: next', async () => {
  const filePath = './dummy.page.tsx';
  const { rules, settings } = await getESLintConfig(filePath, __dirname, true);

  expect({ rules, settings }).toMatchSnapshot();
});
