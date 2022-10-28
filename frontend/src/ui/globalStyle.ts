import { globalCss } from './stitches.config'

export const globalStyle = globalCss({
	'*': {
		margin: 0,
		padding: 0,
	},
	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap')",
	],
})
