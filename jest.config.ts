import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

// Add custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'], // needed to work if using TypeScript with baseURL of root
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/server/(.*)$': '<rootDir>/server/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/env/(.*)$': '<rootDir>/env/$1',
    '^@/data/(.*)$': '<rootDir>/data/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '^@/prisma/(.*)$': '<rootDir>/prisma/$1',
    '^@/worker/(.*)$': '<rootDir>/worker/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

module.exports = createJestConfig(customJestConfig)
