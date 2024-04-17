module.exports = {
  preset: 'ts-jest',
  moduleNameMapper:{
    '@/(.)$': '<rootDir/src>/$1'
  },
  transform:{
    "^.+\\.(ts|tsx|js|jsx)$": 'ts-jest',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
  testEnvironment: 'jsdom'
}