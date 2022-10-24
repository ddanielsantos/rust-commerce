import { styled } from './stitches.config'

export const Button = styled('button', {
	fontWeight: 700,
	fontFamily: 'Inter',
	borderRadius: '$md',
	padding: '0.5rem 1rem',
	transition: 'ease 0.4s',
	border: '3px solid $indigo100',

	'&:focus': {
		outline: '3px solid #4299E1',
	},

	'&:hover': {
		cursor: 'pointer',
	},

	'&:hover:active': {
		backgroundColor: 'LimeGreen',
		color: 'White',
	},

	variants: {
		variant: {
			primary: {
				backgroundColor: '$indigo100',
				color: 'White',

				'&:hover': {
					backgroundColor: 'White',
					color: '$indigo100',
				},
			},
			secondary: {
				backgroundColor: 'White',
				color: '$indigo100',

				'&:hover': {
					backgroundColor: '$indigo100',
					color: 'White',
				},
			},
		},
	},
})
