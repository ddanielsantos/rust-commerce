import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { useCart } from '../../src/context/CartContext'
import { Box, Flex, Text } from '../../src/ui'

const CartItemsList = () => {
	const { items } = useCart()

	if (Object.keys(items).length === 0) {
		return <Text>there are no items in the cart</Text>
	}

	return (
		<>
			{Object.keys(items).map(key => {
				return (
					<Box
						key={key}
						css={{
							p: '$4',
							backgroundColor: '$rust70',
							borderRadius: '$lg',
						}}
					>
						<Text
							css={{
								color: 'white',
							}}
						>
							id: {key} quantity: {items[key]}
						</Text>
					</Box>
				)
			})}
		</>
	)
}

const CartPage: NextPage = () => {
	return (
		<Flex
			direction='column'
			css={{
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<Header />
			<Flex
				align='center'
				justify='center'
				css={{
					flex: 1,
					width: '100%',
				}}
			>
				<CartItemsList />
			</Flex>
		</Flex>
	)
}

export default CartPage
