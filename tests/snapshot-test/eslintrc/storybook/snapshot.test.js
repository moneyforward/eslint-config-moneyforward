const { getESLintConfig, optimizeRules } = require('../helper');

test('should match ESLint configuration snapshot: storybook', async () => {
  const filePath = 'dummy.stories.tsx';
  const { rules, settings } = await getESLintConfig(filePath, __dirname);

  expect({ rules: optimizeRules(rules), settings }).toMatchSnapshot();
});
