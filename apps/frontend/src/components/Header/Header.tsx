import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '../../context/CartContext'
import { Button, Text, Flex, Box } from '../../ui/'
import { CartQuantityIndicator } from '../CartQuantityIndicator/CartQuantityIndicator'

export const Header = () => {
	const shouldDisplayCartButton = !useRouter().route.includes('/cart')
	const { numberOfItems } = useCart()

	return (
		<Flex
			type='spaced'
			borderVariant={'simple'}
			justify={'between'}
			align={'center'}
		>
			<NextLink href={'/product/1'}>
				<Text
					style={{
						textDecoration: 'underline',
					}}
				>
					buyrust
				</Text>
			</NextLink>
			<Flex
				justify={'center'}
				align={'center'}
				css={{
					gap: '10px',
				}}
			>
				<Button variant={'secondary'}>login</Button>
				{shouldDisplayCartButton && (
					<NextLink
						href='/cart'
						style={{
							textDecoration: 'none',
						}}
					>
						<Box
							css={{
								textDecoration: 'none',
							}}
						>
							<CartQuantityIndicator quantity={numberOfItems} />
							<Button variant='secondary'>cart icon</Button>
						</Box>
					</NextLink>
				)}
			</Flex>
		</Flex>
	)
}
