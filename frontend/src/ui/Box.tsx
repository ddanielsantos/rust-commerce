import { styled } from './stitches.config'

export const Box = styled('div', {
	boxSizing: 'border-box',

	variants: {
		type: {
			unspaced: {
				p: 0,
				'@bp1': {
					p: 0,
				},
			},

			spaced: {
				p: '$4',
				'@bp1': {
					p: '$5',
				},
			},
		},

		border: {
			none: {},
			grey: {
				border: '1px solid Gainsboro',
				borderRadius: 10,
			},
		},
	},

	defaultVariants: {
		type: 'unspaced',
	},
})
