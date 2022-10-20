import { styled } from './stitches.config'

export const Button = styled('button', {
	fontWeight: '700',
	borderRadius: 10,
	padding: '0.5rem 1rem',
	transition: 'ease 0.3s',
	borderWidth: '3px',
	borderStyle: 'solid',

	variants: {
		variant: {
			primary: {
				backgroundColor: '$indigo100',
				borderColor: '$indigo100',
				'&:hover': {
					cursor: 'pointer',
					color: '$indigo100',
					backgroundColor: 'White'
				},
				color: 'White'
			},
			secondary: {
				backgroundColor: 'White',
				// borderWidth: 0,
				borderColor: '$indigo100',
				'&:hover': {
					cursor: 'pointer',
					color: 'White',
					backgroundColor: '$indigo100'
				},
				color: '$indigo100'
			}
		}
	}
})
