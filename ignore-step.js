const VERSION_BUMP_COMMIT_MESSAGE_PREFIX = 'chore(release):'

const commitMessage = process.env.VERCEL_GIT_COMMIT_MESSAGE || ''

process.exit(commitMessage.includes(VERSION_BUMP_COMMIT_MESSAGE_PREFIX) ? 0 : 1)
