import { globalCss } from './stitches.config'

export const globalStyle = globalCss({
	'*': {
		margin: 0,
		padding: 0,
	},
	'[data-backdrop]': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'hsl(365 100% 100% / 0.1)',

		scale: 0.9,
		backdropFilter: 'blur(0)',
		transitionProperty: 'opacity,backdrop-filter',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	},

	'[data-backdrop][data-enter]': {
		scale: 1,
		backdropFilter: 'blur(1px)',
	},

	'[data-backdrop][data-leave]': { scale: 0.9 },
	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap')",
	],
})
