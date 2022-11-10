import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'
import { Flex, Heading, Grid, Text, Button } from '../../src/ui'
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
			<form>
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
							g: '$5',
							gridTemplateColumns: '1fr',

							'@bp1': {
								gridTemplateColumns: '1fr $2xs',
							},
						}}
					>
						<Heading
							css={{
								gridColumn: '1',
								'@bp1': {
									gridColumn: '1 / 3',
								},
							}}
						>
							Checkout
						</Heading>
						<Flex
							direction='column'
							css={{
								gap: '$5',
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '1.5rem',
								}}
							>
								<Flex
									type='spaced'
									roundedBorder
									borderVariant='simple'
									direction='column'
								>
									<Text
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
										css={{
											fontWeight: 700,
										}}
									>
										Select a shipping address:
									</Text>
									<ShippingAddressSelection />
								</Flex>
							</div>
						</Flex>

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
							<Text css={{ fontWeight: 700 }}>Subtotal</Text>
							<Text as='span'>R$ 40,00</Text>
							<Text css={{ fontWeight: 700 }}>Shipping</Text>
							<Text as='span'>R$ 10,00</Text>
							<hr
								style={{
									gridColumn: '1 / 3',
									margin: '.5rem 0',
									borderColor: '#ffffffaa',
									borderWidth: 1,
								}}
							/>
							<Text css={{ fontWeight: 700, fontSize: 'x-large' }}>Total</Text>
							<Text as='span' css={{ fontSize: 'x-large' }}>
								R$ 50,00
							</Text>

							<Button
								variant='primary'
								type='submit'
								css={{ gridColumn: '1 / 3' }}
							>
								pay
							</Button>
						</Grid>
					</Grid>
				</Flex>
			</form>
		</Flex>
	)
}
export default CheckoutPage
