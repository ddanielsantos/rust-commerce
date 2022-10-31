import { Card, Flex, Text } from '../../ui'

type CartItemProps = {
	id: string
}

const fakeDB: Record<string, any> = {
	'3': {
		name: 'awesome product',
		current_price: 50,
		currency: 'usd',
		quantity: 3,
	},
	'1': {
		name: 'fucking product',
		current_price: 40,
		currency: 'brl',
		quantity: 13,
	},
}

// TODO: format the money based on user location
const moneyFormatter = new Intl.NumberFormat('br', {
	style: 'currency',
	currency: 'BRL',
})

export const CartItem = ({ id }: CartItemProps) => {
	// const formattedPrice = moneyFormatter.format(fakeDB[id].current_price)
	const formattedSubtotal = moneyFormatter.format(
		fakeDB[id].current_price * fakeDB[id].quantity,
	)

	return (
		<Card
			key={id}
			type='spaced'
			borderVariant='simple'
			roundedBorder
			css={{
				width: '100%',
				backgroundColor: 'White',
			}}
		>
			<Flex align='center' justify='between'>
				<Text
					// as='h3'
					css={{
						// fontWeight: 700,
						// fontSize: 'x-large',
						color: '$rust50',
					}}
				>
					{fakeDB[id].name}
				</Text>
				{/* <Text
					as='span'
					css={{
						color: '$rust50',
					}}
				>
					{formattedPrice}
				</Text> */}
				<Text
					as='span'
					css={{
						color: '$rust50',
					}}
				>
					{fakeDB[id].quantity}
				</Text>

				<Text
					as='span'
					css={{
						color: '$rust50',
					}}
				>
					{formattedSubtotal}
				</Text>
			</Flex>
		</Card>
	)
}
