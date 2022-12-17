// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
		'^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
		'^@global-types/(.*)$': '<rootDir>/src/types/$1',
		'^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
		'^@constants': '<rootDir>/src/constants',
		'^@hoc/(.*)$': '<rootDir>/src/HOC/$1',
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@lib/(.*)$': '<rootDir>/src/lib/$1',
		'^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
		'^@protocols/(.*)$': '<rootDir>/src/protocols/$1',
		'^@models/(.*)$': '<rootDir>/src/models/$1',
		'^@dtos/(.*)$': '<rootDir>/src/dtos/$1',
	}
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
