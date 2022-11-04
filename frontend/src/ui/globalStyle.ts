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

	'[data-backdrop][data-leave]': { transform: 'translateY(-300px)' },
}

const selectCSS = {
	'.select': {
		display: 'flex',
		padding: '0.7rem 1rem',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '0.25rem',
		border: '1px solid gainsboro',
		borderRadius: 10,
		backgroundColor: 'White',
	},

	'.select:focus-visible,.select[data-focus-visible],.popover:focus-visible,.popover[data-focus-visible]':
		{
			outline: '2px solid $rust90',
		},

	'.select-item': {
		display: 'flex',
		cursor: 'default',
		scrollMargin: '0.5rem',
		alignItems: 'center',
		gap: '0.5rem',
		borderRadius: '0.25rem',
		padding: '0.5rem',
		// outline: 'none !important',
	},

	'.select-item[data-active-item]': {
		backgroundColor: '$rust90',
		color: 'hsl(204 20% 100%)',
	},

	'.select-item[aria-disabled="true"]': {
		opacity: '0.5',
	},
}

export const globalStyle = globalCss({
	'*': {
		margin: 0,
		padding: 0,
	},
	...dialogCSS,
	...selectCSS,

	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap')",
	],
})
