module.exports = {
	roots: ["<rootDir>/src"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	setupFilesAfterEnv: [
		"@testing-library/react/pure",
		"@testing-library/jest-dom/extend-expect",
	],
	moduleNameMapper: {
		"\\.style.css$": "identity-obj-proxy",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "css"],
};
