const { getESLintConfig } = require('../../helper');

test('should match ESLint Flat Configuration snapshot: node', async () => {
  const filePath = './dummy.js';
  const { languageOptions, rules, settings } = await getESLintConfig(
    filePath,
    __dirname,
    true,
  );

  expect({ languageOptions, rules, settings }).toMatchSnapshot();
});
