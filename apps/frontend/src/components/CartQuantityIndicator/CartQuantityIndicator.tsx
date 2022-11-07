import { Flex, Text } from '../../ui'

export const CartQuantityIndicator = ({ quantity }: { quantity: number }) => {
	return (
		<Flex
			align={'center'}
			justify={'center'}
			css={{
				position: 'absolute',
				right: 10,
				top: 10,
				minWidth: '4ch',
				borderRadius: '$full',
				p: '$1',
				backgroundColor: '$rust100',
			}}
		>
			<Text css={{ color: 'White', fontSize: 'small', fontWeight: 700 }}>
				{quantity > 99 ? '99+' : quantity}
			</Text>
		</Flex>
	)
}
