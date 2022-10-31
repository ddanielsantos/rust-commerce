import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { CartItem } from '../../src/components/CartItem/CartItem'
import { CartTotalSum } from '../../src/components/CartTotalSum/CartTotalSum'
import { CartMap, useCart } from '../../src/context/CartContext'
import { Flex, Text, Grid, Heading } from '../../src/ui'

type CartItemsListProps = {
	items: CartMap
	numberOfItems: number
}

const CartItemsList = ({ items, numberOfItems }: CartItemsListProps) => {
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

const CartPage: NextPage = () => {
	const { numberOfItems, items } = useCart()
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
						roundedBorder
						css={{
							g: '$5',
						}}
					>
						<Heading>Cart</Heading>
						<Flex
							roundedBorder
							borderVariant={'simple'}
							type='spaced'
							justify='between'
						>
							{/* TODO: orderable by property */}
							<Text css={{ fontWeight: 700 }}>product</Text>
							<Text css={{ fontWeight: 700 }}>quantity</Text>
							<Text css={{ fontWeight: 700 }}>subtotal</Text>
						</Flex>

						<CartItemsList items={items} numberOfItems={numberOfItems} />
					</Flex>
					{numberOfItems !== 0 && <CartTotalSum />}
				</Grid>
			</Flex>
		</Flex>
	)
}

export default CartPage
