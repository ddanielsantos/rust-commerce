import { Card, Flex, Text } from '../../ui'
import { moneyFormatter } from '../../utils/MoneyFormatter'

type CartItemProps = {
	id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
