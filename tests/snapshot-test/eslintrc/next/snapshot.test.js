const { getESLintConfig, optimizeRules } = require('../helper');

test('should match ESLint configuration snapshot: next', async () => {
  const filePath = 'dummy.page.tsx';
  const { rules, settings } = await getESLintConfig(filePath, __dirname);

  expect({ rules: optimizeRules(rules), settings }).toMatchSnapshot();
});
