import { Box, Text } from '../../ui'

export const CartTotalSum = () => {
	return (
		<Box
			type='spaced'
			borderVariant={'simple'}
			roundedBorder
			css={{
				height: 'fit-content',
			}}
		>
			<Text>Total sum:</Text>
		</Box>
	)
}
