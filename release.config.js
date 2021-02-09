module.exports = {
    branches: ['main', 'feat/dry-run'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
      '@semantic-release/npm',
      '@semantic-release/git'
    ],
  }
  