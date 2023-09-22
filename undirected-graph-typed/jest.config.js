module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.ts', '<rootDir>/test/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
};
