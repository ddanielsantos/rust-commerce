import { styled } from './stitches.config'

export const Input = styled('input', {
	fontFamily: 'Inter',
	fontWeight: 700,
	color: '$rust100',
	padding: '0.5rem 1rem',
	border: '3px solid $rust100',
	borderRadius: '$lg',

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})
