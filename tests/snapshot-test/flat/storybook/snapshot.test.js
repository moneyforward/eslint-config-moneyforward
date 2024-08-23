const { getESLintConfig } = require('../../helper');

test('should match ESLint Flat Configuration snapshot: storybook', async () => {
  const filePath = 'dummy.stories.tsx';
  const { languageOptions, rules, settings } = await getESLintConfig(
    filePath,
    __dirname,
    true,
  );

  expect({ languageOptions, rules, settings }).toMatchSnapshot();
});
