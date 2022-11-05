import { styled } from './stitches.config'
import { Select, SelectPopover, SelectItem } from 'ariakit/select'

export const Item = styled(SelectItem, {
	fontWeight: 700,
	fontSize: 'medium',
	fontFamily: 'Inter',
	padding: '0.7rem 1rem',

	backgroundColor: 'White',
	color: '$rust100',
	borderRadius: 5,
	p: '$2',
	'@bp1': {
		p: '$4',
	},
	'&:hover': {
		backgroundColor: '$rust100',
		color: 'White',
	},

	display: 'flex',
	cursor: 'default',
	scrollMargin: '0.5rem',
	alignItems: 'center',
	gap: '0.5rem',
	// outline: 'none !important',

	'&[data-active-item]': {
		backgroundColor: '$rust100',
		color: 'hsl(204 20% 100%)',
	},

	'&[aria-disabled="true"]': {
		opacity: '0.5',
	},
})

export const Popover = styled(SelectPopover, {
	backgroundColor: 'white',
	border: '1px solid gainsboro',
	width: 'fit-content',
	borderRadius: 10,
	display: 'flex',
	flexDirection: 'column',
	gap: '0.5rem',
	padding: '0.5rem',
	opacity: 0.5,
	transform: 'translateY(-16px)',

	transition: 'all ease 0.2s, outline 0s',

	'&:focus-visible,&[data-focus-visible]': {
		outline: '3px solid #4299E1',
	},

	'&[data-enter]': {
		opacity: 1,
		transform: 'translateY(0)',
	},
})

export const Wrapper = styled(Select, {
	display: 'flex',
	padding: '0.7rem 1rem',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '0.5rem',
	transition: 'all ease 0.2s, outline 0s',
	border: '1px solid gainsboro',
	borderRadius: 10,
	backgroundColor: 'White',

	'&:focus-visible,&[data-focus-visible]': {
		outline: '3px solid #4299E1',
	},
})
