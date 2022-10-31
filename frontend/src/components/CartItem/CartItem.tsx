import { Card, Text } from '../../ui'

type CartItemProps = {
	id: string
}

export const CartItem = ({ id }: CartItemProps) => {
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
					color: '$rust50',
				}}
			>
				{id}
			</Text>
		</Card>
	)
}
