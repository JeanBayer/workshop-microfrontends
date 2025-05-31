const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  rootDir: "src",
  testEnvironment: "jest-fixed-jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(j|t)sx?$": [
      "babel-jest",
      { configFile: require.resolve("./babel.config.json") },
    ],
  },
  globals: {
    fetch: globalThis.fetch,
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "\\.(svg|png|jpg|jpeg|gif|bmp|webp)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "../jest.setup.js"],
  testPathIgnorePatterns: ["\\.snap$", "\\.d.ts$"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [
    "src/assets/",
    "src/mocks/",
    "src/constants/",
    "src/api/",
    "src/type/",
    "src/utils/test-util.tsx",
  ],
  clearMocks: true,
  coverageReporters: ["clover", "json", "lcov", "text"],
};
