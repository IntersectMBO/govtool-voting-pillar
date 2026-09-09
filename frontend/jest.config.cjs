module.exports = {
  // cip-179 exposes ESM-only exports, matching the frontend's module format.
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    // Resolve the direct CJS exports for Jest's ESM named-export detection.
    '^blakejs$': '<rootDir>/node_modules/blakejs/blake2b.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
