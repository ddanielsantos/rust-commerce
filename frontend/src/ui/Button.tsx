import { styled } from './stitches.config'

export const Button = styled('button', {
	fontWeight: 700,
	fontFamily: 'Inter',
	borderRadius: '$lg',
	padding: '0.5rem 1rem',
	transition: 'ease 0.4s',
	border: '3px solid $rust100',

	'&:focus': {
		outline: '3px solid #4299E1',
	},

	'&:hover': {
		cursor: 'pointer',
	},

	variants: {
		variant: {
			primary: {
				backgroundColor: '$rust100',
				color: 'White',

				'&:hover': {
					backgroundColor: 'White',
					color: '$rust100',
				},

				'&:hover:active': {
					backgroundColor: '$rust100',
					color: 'White',
				},
			},
			secondary: {
				backgroundColor: 'White',
				color: '$rust100',

				'&:hover': {
					backgroundColor: '$rust100',
					color: 'White',
				},

				'&:hover:active': {
					backgroundColor: 'White',
					color: '$rust100',
				},
			},
		},
	},
})
