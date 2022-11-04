import { styled } from './stitches.config'
import { Dialog, DialogDismiss, DialogHeading } from 'ariakit/dialog'

export const Wrapper = styled(Dialog, {
	border: '1px solid Gainsboro',
	boxSizing: 'border-box',
	'&> form': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$5',
	},
	width: '$5xl',
	maxWidth: 'calc(100% - 1rem * 2)',
	height: '70%',
	maxHeight: 'calc(100% - 1rem * 2)',
	backgroundColor: 'White',
	overflowY: 'scroll',

	scale: 0.7,
	transitionDuration: '200ms',
	'&[data-enter]': {
		scale: 1,
	},

	'&[data-leave]': {
		scale: 0.7,
	},

	p: '$4',
	'@bp1': {
		p: '$5',
	},
	'@bp3': {
		borderRadius: 5,
	},
})

export const Dismiss = styled(DialogDismiss, {
	fontWeight: 700,
	fontSize: 'medium',
	fontFamily: 'Inter',
	borderRadius: 10,
	padding: '0.7rem 1rem',
	transition: 'ease 0.4s',
	border: '1px solid',

	'&:focus': {
		outline: '3px solid #4299E1',
	},

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
})

export const Heading = styled(DialogHeading, {
	fontFamily: 'Inter',
	fontWeight: 900,
	color: '$rust100',
})
