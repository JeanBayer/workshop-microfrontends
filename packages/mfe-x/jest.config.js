module.exports = {
  rootDir: "src",
  testEnvironment: "jest-fixed-jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": [
      "babel-jest",
      { configFile: require.resolve("./babel.config.json") },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!node-fetch)/",
    "\\\\.pnp\\\\.[^\\\\/]+$",
  ],
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  globals: {
    fetch: globalThis.fetch,
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "\\.(svg|png|jpg|jpeg|gif|bmp|webp)$": "<rootDir>/mocks/file-mock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "../jest.setup.js"],
  testPathIgnorePatterns: ["\\.snap$", "\\.d.ts$"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [
    "src/assets/",
    "src/mocks/",
    "src/constants/",
    "src/api/",
    "src/types/",
    "src/utils/test-util.tsx",
  ],
  clearMocks: true,
  coverageReporters: ["clover", "json", "lcov", "text"],
};
