import { styled } from './stitches.config'

export const Button = styled('button', {
	fontWeight: 700,
	fontSize: 'medium',
	fontFamily: 'Inter',
	borderRadius: '$lg',
	padding: '0.7rem 1rem',
	transition: 'ease 0.4s',
	border: '1px solid',

	'&:focus': {
		outline: '3px solid #4299E1',
	},

	'&:hover': {
		cursor: 'pointer',
	},

	variants: {
		variant: {
			primary: {
				backgroundColor: '$rust90',
				color: 'White',

				'&:hover': {
					backgroundColor: 'White',
					color: '$rust90',
				},

				'&:hover:active': {
					backgroundColor: '$rust90',
					color: 'White',
				},
			},
			secondary: {
				backgroundColor: 'White',
				color: '$rust90',
				borderColor: 'Gainsboro',

				'&:hover': {
					backgroundColor: '$rust90',
					color: 'White',
					borderColor: '$rust90',
				},

				'&:hover:active': {
					backgroundColor: 'White',
					color: '$rust90',
				},
			},
		},
	},
})
