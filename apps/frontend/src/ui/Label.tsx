import { Text } from './Text'
import { styled } from './stitches.config'

export const Label = styled(Text, {
	display: 'flex',
	p: '$3',
	'&>input': {
		appearence: 'none',
	},
	// border: '1px solid gainsboro',
	// flexDirection: 'column',
	gap: '$3',
})
