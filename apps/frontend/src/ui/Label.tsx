import { Text } from './Text'
import { styled } from './stitches.config'

export const Label = styled(Text, {
	display: 'flex',
	'&>input': {
		appearence: 'none',
	},
	flexDirection: 'column',
	gap: '$3',
	// fontWeight: 700,
})
