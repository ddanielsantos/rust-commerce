import NextLink from 'next/link'
import { Button, Grid, Text } from '../../ui'
import { moneyFormatter } from '../../utils/MoneyFormatter'

export const CartTotalSum = () => {
	const total = moneyFormatter.format(50)

	return (
		<Grid
			type='spaced'
			borderVariant={'simple'}
			roundedBorder
			css={{
				// gap: '$2',
				gridRowGap: '$5',

				// TODO: handle grid wrapping on big texts
				gridTemplateColumns: 'repeat(auto-fit, minmax(6rem, 1fr))',
				height: 'fit-content',
			}}
		>
			<Text>Raw value: </Text>
			<Text>{total}</Text>
			<Text>Discounts: </Text>
			<Text>{total}</Text>
			{/* <hr
				style={{
					gridColumn: '1 / 3',
					borderColor: '#ffffffaa',
					borderWidth: 1,
				}}
			/> */}
			<Text>Subtotal: </Text>
			<Text>{total}</Text>
			<hr
				style={{
					gridColumn: '1 / 3',
					borderColor: '#ffffffaa',
					borderWidth: 1,
				}}
			/>
			<NextLink href='/checkout'>
				{/* TODO: full width button */}
				<Button variant='primary'>proceed</Button>
			</NextLink>
		</Grid>
	)
}
