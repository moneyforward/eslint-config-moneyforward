/* eslint-disable import/no-dynamic-require */
/* eslint-disable n/global-require */
const { readdirSync } = require('node:fs');
const path = require('node:path');

test('parsable all eslintrc format configs', () => {
  const directory = path.resolve(path.join(__dirname, '../configs/eslintrc'));

  const files = readdirSync(directory, {
    withFileTypes: true,
  }).flatMap((dirnet) => extractFilePath(dirnet, directory));

  files.forEach((file) => {
    expect(() => require(file)).not.toThrow();
  });
});

test('parsable all rules', () => {
  const directory = path.resolve(path.join(__dirname, '../rules'));

  const files = readdirSync(directory, {
    withFileTypes: true,
  }).flatMap((dirnet) => extractFilePath(dirnet, directory));

  files.forEach((file) => {
    expect(() => require(file)).not.toThrow();
  });
});

function extractFilePath(dirent, directory) {
  if (dirent.isFile()) {
    return `${directory}/${dirent.name}`;
  }

  if (dirent.isDirectory()) {
    return readdirSync(`${directory}/${dirent.name}`, {
      withFileTypes: true,
    }).flatMap((child) =>
      extractFilePath(child, `${directory}/${dirent.name}`),
    );
  }
}
