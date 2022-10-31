import { Box } from './Box'
import { styled } from './stitches.config'

const shadowColor = 'hsl(8 61% 75% / 0.36)'

export const Card = styled(Box, {
	transition: 'ease 0.3s',
	'&:hover *': {
		color: '$rust100',
	},
	'&:hover': {
		borderColor: '$rust90',
		boxShadow: `0px 1px 1.1px ${shadowColor},
    0px 3.3px 3.7px -0.8px ${shadowColor},
    0.1px 8.2px 9.2px -1.7px ${shadowColor},
    0.2px 20px 22.5px -2.5px ${shadowColor}`,
	},
})
