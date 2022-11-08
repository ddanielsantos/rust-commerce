import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { Flex, Heading, Text, Button } from '../../src/ui'
import { PaymentSelection } from '../../src/components/PaymentSelection/PaymentSelection'
import { ShippingAddressSelection } from '../../src/components/ShippingAddressSelection/ShippingAddressSelection'

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
						direction='column'
						css={{
							gap: '$5',
						}}
					>
						<form
							style={{
								display: 'flex',
								flexDirection: 'column',
								// gap: '1rem',
							}}
						>
							<Flex
								type='spaced'
								roundedBorder
								borderVariant='simple'
								direction='column'
							>
								<Text
									as='h3'
									css={{
										fontWeight: 700,
									}}
								>
									Select a payment method:
								</Text>
								<PaymentSelection />
							</Flex>

							<Flex
								type='spaced'
								roundedBorder
								borderVariant='simple'
								direction='column'
							>
								<Text
									as='h3'
									css={{
										fontWeight: 700,
									}}
								>
									Select a shipping address:
								</Text>
								<ShippingAddressSelection />
							</Flex>
							<Button variant='primary' type='submit'>
								send
							</Button>
						</form>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
export default CheckoutPage
