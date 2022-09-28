import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

// Add custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'], // needed to work if using TypeScript with baseURL of root
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

module.exports = createJestConfig(customJestConfig)
