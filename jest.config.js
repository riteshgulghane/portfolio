// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Handle module aliases (same as in tsconfig.json)
    "^@/(.*)$": "<rootDir>/$1",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "pages/**/*.{ts,tsx}",
    "constants/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!pages/_app.tsx",
    "!pages/_document.tsx",
  ],
  testMatch: [
    "<rootDir>/tests/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/tests/**/*.{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/e2e/",
  ],
};

module.exports = createJestConfig(customJestConfig);
