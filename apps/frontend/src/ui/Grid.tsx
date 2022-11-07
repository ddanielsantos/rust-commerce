import { styled } from './stitches.config'
import { Box } from './Box'

export const Grid = styled(Box, {
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
