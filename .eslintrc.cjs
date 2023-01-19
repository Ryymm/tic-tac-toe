module.exports = {
	extends: ['standard'],
	plugins: ['react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'space-before-function-paren': ['error', 'never'],
		'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error'
	}
}
