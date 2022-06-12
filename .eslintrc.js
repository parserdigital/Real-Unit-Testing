module.exports = {
	env: {
		'jest/globals': true,
		mocha: true,
		node: true,
		commonjs: true,
		es2021: true,
	},
	plugins: ['jest'],
	extends: [
		'eslint:recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-unused-vars': ['error', { argsIgnorePattern: 'b' }],
		'jest/no-standalone-expect': 'off',
		'jest/no-focused-tests': ['warn'],
	},
};
