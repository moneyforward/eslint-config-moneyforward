/* eslint-disable import/no-dynamic-require */
/* eslint-disable n/global-require */
const { readdirSync } = require('fs');
const { resolve, join } = require('path');

test('parsable all eslintrc format configs', () => {
  const dir = resolve(join(__dirname, '../configs/eslintrc'));

  const files = readdirSync(dir, {
    withFileTypes: true,
  })
    .map((dirnet) => extractFilePath(dirnet, dir))
    .flat();

  files.forEach((file) => {
    expect(() => require(file)).not.toThrow();
  });
});

test('parsable all rules', () => {
  const dir = resolve(join(__dirname, '../rules'));

  const files = readdirSync(dir, {
    withFileTypes: true,
  })
    .map((dirnet) => extractFilePath(dirnet, dir))
    .flat();

  files.forEach((file) => {
    expect(() => require(file)).not.toThrow();
  });
});

function extractFilePath(dirent, dir) {
  if (dirent.isFile()) {
    return `${dir}/${dirent.name}`;
  }

  if (dirent.isDirectory()) {
    return readdirSync(`${dir}/${dirent.name}`, {
      withFileTypes: true,
    })
      .map((child) => extractFilePath(child, `${dir}/${dirent.name}`))
      .flat();
  }
}
