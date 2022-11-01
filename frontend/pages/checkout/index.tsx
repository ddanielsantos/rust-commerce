import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Header } from '../../src/components/Header/Header'
import { Flex, Heading, Button } from '../../src/ui'

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
				<Heading>Checkout</Heading>
				<NextLink href='/cart'>
					<Button variant='secondary'>back to cart</Button>
				</NextLink>
				<NextLink href=''>
					<Button variant='primary'>finish buy</Button>
				</NextLink>
			</Flex>
		</Flex>
	)
}
export default CheckoutPage
