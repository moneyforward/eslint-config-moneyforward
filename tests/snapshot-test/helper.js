const { loadESLint } = require('eslint');

/**
 * This method calculates the ESLint configuration for a given file path.
 *
 * @param {string} filePath The path to the file whose configuration you would like to calculate. Directory paths are forbidden because ESLint cannot handle the overrides setting.
 *
 * @param {string} cwd The working directory. This must be an absolute path.
 *
 * @param {boolean} useFlatConfig Whether to use a flat configuration. This is useful when you want to calculate the configuration for a file that is not part of a project.
 *
 * @returns The path to the file whose configuration you would like to calculate. Directory paths are forbidden because ESLint cannot handle the overrides setting.
 */
async function getESLintConfig(filePath, cwd = './', useFlatConfig = false) {
  const DefaultESLint = await loadESLint({
    useFlatConfig,
  });

  const eslint = new DefaultESLint({
    cwd,
  });

  return eslint.calculateConfigForFile(filePath);
}

/**
 * Replace rule levels from aliases to numbers.
 *
 * @param {Object} rules
 *
 * @returns Replaced rule set object.
 */
function optimizeRules(rules) {
  return Object.entries(rules).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.toSpliced(0, 1, ruleLevelAsNumber(value[0])),
    }),
    {},
  );
}

function ruleLevelAsNumber(value) {
  if (typeof value === 'number') return value;

  switch (value) {
    case 'off':
      return 0;
    case 'warn':
      return 1;
    case 'error':
      return 2;
    default:
      return value;
  }
}

module.exports = {
  getESLintConfig,
  optimizeRules,
};
