import { styled } from './stitches.config'

export const Input = styled('input', {
	fontFamily: 'Inter',
	fontWeight: 700,
	color: '$rust100',
	padding: '0.7rem 1rem',
	border: 'none',
	borderRadius: 10,

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})
