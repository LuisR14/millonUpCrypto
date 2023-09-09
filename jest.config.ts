import type {JestConfigWithTsJest} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  // collectCoverage: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|native-base)',
  ],
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1',
    '^@ourProject/(.*)$': ['<rootDir>/libs/$1'],
  },
};

export default jestConfig;
