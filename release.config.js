module.exports = {
    branches: ['main', 'feat/new-feature'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
    ],
  }
  