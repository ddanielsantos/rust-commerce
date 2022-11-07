import { Button } from '../../ui'
import { CartDispatcherKind, useCart } from '../../context/CartContext'
import { useRouter } from 'next/router'

export const AddToCartButton = () => {
	const router = useRouter()
	const { id } = router.query
	const { cartDispatcher } = useCart()

	const onClick = () => {
		if (typeof id !== 'string') return

		cartDispatcher({
			type: CartDispatcherKind.ADD_ITEM,
			item: { id },
		})
	}

	return (
		<Button variant={'primary'} onClick={onClick}>
			add to chart
		</Button>
	)
}
