import { globalCss } from './stitches.config'

export const globalStyle = globalCss({
	'*': {
		margin: 0,
		padding: 0,
	},

	'@font-face': [
		{
			fontDisplay: 'swap',
			fontWeight: 100,
			fontFamily: 'Inter',
			src: 'url(/fonts/Inter-Thin.ttf) format("ttf") ',
		},
		{
			fontDisplay: 'swap',
			fontWeight: 400,
			fontFamily: 'Inter',
			src: 'url(/fonts/Inter-Regular.ttf) format("ttf") ',
		},
		{
			fontDisplay: 'swap',
			fontWeight: 700,
			fontFamily: 'Inter',
			src: 'url(/fonts/Inter-Bold.ttf) format("ttf") ',
		},
	],
})
