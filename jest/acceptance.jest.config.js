
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = async () => {
  return {
    rootDir: '../',
    testMatch: ['**/*.acceptance.ts'],
    preset: 'ts-jest',
    coverageReporters: ['text-summary', 'html'],
    coverageThreshold: {
      global: {
        statements: 100,
        functions: 100,
        lines: 100,
      },
    },
    moduleNameMapper: {
      '~/(.*)': '<rootDir>/src/$1',
    },
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
    modulePathIgnorePatterns: ['<rootDir>/libs/'],
  };
};

