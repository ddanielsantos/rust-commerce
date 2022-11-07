import InputMask from 'react-input-mask'
import { styled } from './stitches.config'

export const MaskedInput = styled(InputMask, {
	fontFamily: 'Inter',
	fontWeight: 700,
	color: '$rust100',
	padding: '0.7rem 1rem',
	border: '1px solid Gainsboro',
	borderRadius: 10,

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})
