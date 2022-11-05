import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { Flex, Heading, Text } from '../../src/ui'
import { PaymentSelection } from '../../src/components/PaymentSelection/PaymentSelection'

const CheckoutPage: NextPage = () => {
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
				<Flex
					direction='column'
					css={{
						maxWidth: '$5xl',
						gap: '$5',
						flex: 1,
					}}
				>
					<Heading>Checkout</Heading>

					<Flex
						type='spaced'
						borderVariant='simple'
						roundedBorder
						direction='column'
						css={{
							gap: '$5',
						}}
					>
						<Text
							as='h3'
							css={{
								fontWeight: 700,
							}}
						>
							select a payment method:
						</Text>
						<PaymentSelection />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
export default CheckoutPage
