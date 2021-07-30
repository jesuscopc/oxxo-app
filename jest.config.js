module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(scss|css|gif|jpg|png)$': '<rootDir>/styleMock.js'
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['src/index.tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/src']
};
