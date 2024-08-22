const { getESLintConfig } = require('../../helper');

test('should match ESLint Flat Configuration snapshot: next', async () => {
  const filePath = './dummy.page.tsx';
  const { languageOptions, rules, settings } = await getESLintConfig(
    filePath,
    __dirname,
    true,
  );

  expect({ languageOptions, rules, settings }).toMatchSnapshot();
});
