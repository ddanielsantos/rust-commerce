import { globalCss } from './stitches.config'

const dialogCSS = {
	'[data-backdrop]': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		transform: 'translateY(-400px)',
		transitionProperty: 'translate',
		transitionTimingFunction: 'linear',
	},

	'[data-backdrop][data-enter]': {
		backgroundColor: 'hsl(360 0% 60% / 0.5)',
		transform: 'translateY(0)',
	},

	'[data-backdrop][data-leave]': { transform: 'translateY(-400px)' },
}

export const globalStyle = globalCss({
	'*': {
		margin: 0,
		padding: 0,
	},
	...dialogCSS,

	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap')",
	],
})
