module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	],
	endOfLine: 'lf',
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	quoteProps: 'as-needed',
	arrowParens: 'always',
	htmlWhitespaceSensitivity: 'css',
	singleAttributePerLine: true
}
