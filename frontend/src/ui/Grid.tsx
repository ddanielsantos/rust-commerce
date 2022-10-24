import { styled } from './stitches.config'

export const Grid = styled('div', {
	boxSizing: 'border-box',
	display: 'grid',
	width: '100%',

	variants: {
		alignContent: {
			center: {
				alignContent: 'center',
			},
			start: {
				alignContent: 'start',
			},
			end: {
				alignContent: 'end',
			},
		},
	},
})
