/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  testResultsProcessor: "@casualbot/jest-sonar-reporter",
  coverageDirectory: '../coverage',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/'
  ]
};