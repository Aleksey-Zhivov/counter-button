module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
      "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  };
  