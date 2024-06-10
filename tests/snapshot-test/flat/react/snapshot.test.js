const { getESLintConfig } = require('../../helper');

test('should match ESLint Configuration snapshot: react', async () => {
  const filePath = 'dummy.tsx';
  const { rules, settings } = await getESLintConfig(filePath, __dirname, true);

  expect({ rules, settings }).toMatchSnapshot();
});
