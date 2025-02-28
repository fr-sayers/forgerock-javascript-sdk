const jestBasic = require('./jest.basic.config');

module.exports = {
  ...jestBasic,
  testEnvironment: './jest.env.config.js',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
};
