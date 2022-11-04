import { styled } from './stitches.config'
import { Dialog, DialogDismiss, DialogHeading } from 'ariakit/dialog'

export const Wrapper = styled(Dialog, {
	border: '1px solid gainsboro',
	boxSizing: 'border-box',
	'&> form': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$5',
		flex: 1,
	},
	width: '$5xl',
	maxWidth: 'calc(100vw - 1rem * 2)',
	height: '70vh',
	maxHeight: 'calc(100vh - 1rem * 2)',
	backgroundColor: 'White',
	overflowY: 'scroll',

	transform: 'translateY(-400px)',
	transitionDuration: '0.8s',
	'&[data-enter]': {
		transform: 'translateY(0)',
	},

	'&[data-leave]': {
		transform: 'translateY(-400px)',
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
