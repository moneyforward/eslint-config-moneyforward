const fs = require('fs');
const path = require('path');

const readdirRecursively = (dir) => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  let dirs = [];
  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) dirs.push(`${dir}/${dirent.name}`);
    if (dirent.isFile()) files.push(`${dir}/${dirent.name}`);
  });
  dirs.forEach((dir) => {
    files = readdirRecursively(dir, files);
  });
  return files;
};

test('parsable all configs', () => {
  const files = readdirRecursively(path.resolve(`${__dirname}/../configs`));
  files.forEach((file) => expect(() => require(file)).not.toThrow());
});

test('parsable all rules', () => {
  const files = readdirRecursively(path.resolve(`${__dirname}/../rules`));
  files.forEach((file) => expect(() => require(file)).not.toThrow());
});
