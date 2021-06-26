const fs = require('fs');
const path = require('path');

test('parsable all configs', () => {
  const files = fs.readdirSync(path.resolve(`${__dirname}/../configs`));
  for (const file of files) {
    expect(() =>
      require(`../configs/${path.basename(file, '.js')}`),
    ).not.toThrow();
  }
});
