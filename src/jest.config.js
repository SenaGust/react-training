module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/setupTests.ts'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/index.dev.ts',
    '!src/**/*Style.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      functions: 100,
      statements: 100
    }
  },
};
