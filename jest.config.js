/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testResultsProcessor: "@casualbot/jest-sonar-reporter"

};