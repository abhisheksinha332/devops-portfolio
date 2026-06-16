export default {
  testEnvironment: "jest-environment-jsdom",   // ✅ explicit package name
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"]
};
