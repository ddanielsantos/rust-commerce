import { styled } from './stitches.config'

export const Input = styled('input', {
	fontFamily: 'Inter',
	color: '$rust100',
	padding: '0.7rem 1rem',
	border: '1px solid Gainsboro',
	borderRadius: 10,

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})
