import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { useCart } from '../../src/context/CartContext'
import { Box, Flex, Text, Grid, Heading } from '../../src/ui'

const CartItemsList = () => {
	const { numberOfItems, items } = useCart()

	if (numberOfItems === 0) {
		return <Text>there are no items in the cart</Text>
	}

	return (
		<Flex>
			{Object.keys(items).map(key => {
				return (
					<Box
						key={key}
						css={{
							p: '$4',
							width: '100%',
							// border: '3px solid $rust100',
							borderRadius: '$lg',
							transition: 'ease 0.2s',
							'&:hover': {
								backgroundColor: '$rust50',
								'&>span': {
									color: 'White',
								},
							},
						}}
					>
						<Text
							as='span'
							css={{
								fontWeight: 700,
								color: '$rust50',
							}}
						>
							cool item name here
						</Text>
						<Text
							as='span'
							css={{
								color: 'White',
							}}
						>
							{items[key]}
						</Text>
					</Box>
				)
			})}
		</Flex>
	)
}

const CartTotalSum = () => {
	const { numberOfItems } = useCart()

	return (
		<Box
			css={{
				border: '3px solid $rust100',
				borderRadius: 10,
				p: '$3',
				'@bp1': {
					p: '$5',
				},
			}}
		>
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

						p: '$3',
						'@bp1': {
							p: '$5',
							gridTemplateColumns: '1fr $3xs',
						},
					}}
				>
					<Flex
						direction={'column'}
						css={{
							border: '3px solid $rust100',
							borderRadius: 10,

							g: '$3',
							p: '$3',
							'@bp1': {
								p: '$5',
							},
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
