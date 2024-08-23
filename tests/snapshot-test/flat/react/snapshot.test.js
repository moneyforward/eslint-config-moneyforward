const { getESLintConfig } = require('../../helper');

test('should match ESLint Configuration snapshot: react', async () => {
  const filePath = 'dummy.tsx';
  const { languageOptions, rules, settings } = await getESLintConfig(
    filePath,
    __dirname,
    true,
  );

  expect({ languageOptions, rules, settings }).toMatchSnapshot();
});
