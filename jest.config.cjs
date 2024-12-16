/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    // The glob patterns Jest uses to detect test files
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.(ts|tsx|jsx|js)$': 'babel-jest',
        // '^.+\\.(css)$': '<rootDir>/fileTransform.cjs',
    },
    // Indicates whether each individual test should be reported during the run
    verbose: true,
    extensionsToTreatAsEsm: [".jsx"],
};