import { useRouter } from 'next/router'
import { useCart } from '../../context/CartContext'
import { Button, Flex, Link } from '../../ui/'
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
			<Link href={'/product/1'} variant={'secondary'}>
				buyrust
			</Link>
			<Flex
				justify={'center'}
				align={'center'}
				css={{
					gap: '10px',
				}}
			>
				<Button variant={'secondary'}>login</Button>
				{shouldDisplayCartButton && (
					<Link href='/cart' variant='secondary'>
						<CartQuantityIndicator quantity={numberOfItems} />
						cart icon
					</Link>
				)}
			</Flex>
		</Flex>
	)
}
