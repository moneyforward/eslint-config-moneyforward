const releaseConfig = require('@frontend-tools/release-config');

module.exports = {
  ...releaseConfig,

  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: '${version}',
};
