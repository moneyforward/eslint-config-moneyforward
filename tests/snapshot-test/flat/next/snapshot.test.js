/* eslint-disable unicorn/prefer-module */
const { getESLintConfig } = require('../../helper');

describe('ESLint Configuration Snapshot Tests', () => {
  beforeAll(() => {
    process.env.TSCONFIG_ROOT_DIR = '/dummy';
  });

  test('should match ESLint Flat Configuration snapshot: next', async () => {
    const filePath = './dummy.page.tsx';
    const { languageOptions, rules, settings } = await getESLintConfig(
      filePath,
      __dirname,
      true,
    );

    expect({ languageOptions, rules, settings }).toMatchSnapshot();
  });

  afterAll(() => {
    process.env.TSCONFIG_ROOT_DIR = undefined;
  });
});
