import { Grid, Text } from '../../ui'
import { moneyFormatter } from '../../utils/MoneyFormatter'

export const CartTotalSum = () => {
	const total = moneyFormatter.format(50)

	return (
		<Grid
			type='spaced'
			borderVariant={'simple'}
			roundedBorder
			css={{
				gap: '$3',
				gridTemplateColumns: '1fr 1fr',
				height: 'fit-content',
			}}
		>
			<Text>Total sum: </Text>
			<Text>{total}</Text>
			<Text>Discounts: </Text>
			<Text>{total}</Text>
			<hr
				style={{
					gridColumn: '1 / 3',
					borderColor: '#ffffffaa',
					borderWidth: 1,
				}}
			/>
			<Text>Final price: </Text>
			<Text>{total}</Text>
		</Grid>
	)
}
