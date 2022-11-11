import { Grid, Text, Link } from '../../ui'
import { moneyFormatter } from '../../utils/MoneyFormatter'

export const CartTotalSum = () => {
	const total = moneyFormatter.format(50)

	return (
		<Grid
			type='spaced'
			borderVariant='simple'
			roundedBorder
			css={{
				height: 'fit-content',
				alignItems: 'center',
				gap: '$5',
				gridTemplateColumns: '1fr 1fr',
				'& > span': {
					textAlign: 'right',
					justifySelf: 'end',
				},
			}}
		>
			<Text css={{ fontWeight: 700 }}>Raw value</Text>
			<Text as='span'>{total}</Text>
			<Text css={{ fontWeight: 700 }}>Discounts</Text>
			<Text as='span'>{total}</Text>
			<hr
				style={{
					gridColumn: '1 / 3',
					margin: '.5rem 0',
					borderColor: '#ffffffaa',
					borderWidth: 1,
				}}
			/>
			<Text css={{ fontWeight: 700, fontSize: 'x-large' }}>Subtotal</Text>
			<Text as='span' css={{ fontSize: 'x-large' }}>
				R$ 50,00
			</Text>
			<Link href='/checkout' style={{ gridColumn: '1 / 3' }}>
				proceed
			</Link>
		</Grid>
	)
}
