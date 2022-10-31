import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { CartItem } from '../../src/components/CartItem/CartItem'
import { useCart } from '../../src/context/CartContext'
import { Box, Flex, Text, Grid, Heading } from '../../src/ui'

const CartItemsList = () => {
	const { numberOfItems, items } = useCart()

	if (numberOfItems === 0) {
		return <Text>there are no items in the cart</Text>
	}

	return (
		<Flex direction='column' css={{ g: '$3' }}>
			{Object.keys(items).map(key => (
				<CartItem key={key} id={key} />
			))}
		</Flex>
	)
}

const CartTotalSum = () => {
	const { numberOfItems } = useCart()

	return (
		<Box type='spaced' border={'grey'}>
			{numberOfItems === 0 ? (
				<Text>the cart is empty</Text>
			) : (
				<Text>Total sum:</Text>
			)}
		</Box>
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
				type='spaced'
				justify='center'
				css={{
					width: '100%',
				}}
			>
				<Grid
					alignContent='center'
					css={{
						maxWidth: '$5xl',
						g: '$3',
						gridTemplateColumns: '1fr',

						'@bp1': {
							gridTemplateColumns: '1fr $3xs',
						},
					}}
				>
					<Flex
						direction={'column'}
						css={{
							borderRadius: 10,

							g: '$3',
						}}
					>
						<Heading>Cart</Heading>
						<CartItemsList />
					</Flex>
					<CartTotalSum />
				</Grid>
			</Flex>
		</Flex>
	)
}

export default CartPage
