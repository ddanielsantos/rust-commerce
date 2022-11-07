import { globalCss } from './stitches.config'

const dialogCSS = {
	'[data-backdrop]': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'hsl(365 100% 100% / 0.1)',

		transform: 'translateY(-400px)',
		backdropFilter: 'blur(0)',
		transitionProperty: 'translate',
		transitionTimingFunction: 'linear',
	},

	'[data-backdrop][data-enter]': {
		transform: 'translateY(0)',
		backdropFilter: 'blur(1px)',
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
