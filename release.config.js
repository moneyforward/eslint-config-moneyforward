/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      },
    ],
    '@semantic-release/github',
  ],
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: '${version}',
};
