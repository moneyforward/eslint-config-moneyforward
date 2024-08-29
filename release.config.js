/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'docs', scope: 'LICENSE', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
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
