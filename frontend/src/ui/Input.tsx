import { styled } from './stitches.config'

export const Input = styled('input', {
	fontFamily: 'Inter',
	fontWeight: 700,
	color: '$indigo100',
	padding: '0.5rem 1rem',
	border: '3px solid indigo',
	borderRadius: '$md',

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})
