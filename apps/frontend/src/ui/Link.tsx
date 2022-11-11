import NextLink from 'next/link'

import { styled } from './stitches.config'

export const Link = styled(NextLink, {
	fontWeight: 700,
	fontSize: 'medium',
	fontFamily: 'Inter',
	borderRadius: 10,
	padding: '0.7rem 1rem',
	transition: 'all ease 0.4s, outline 0s',
	border: '1px solid',

	textDecoration: 'none',

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

	defaultVariants: {
		variant: 'primary',
	},
})
