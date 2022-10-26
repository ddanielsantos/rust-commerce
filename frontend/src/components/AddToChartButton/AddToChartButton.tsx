import { Button } from '../../ui'
import { CartDispatcherKind, useCart } from '../../context/CartContext'

export const AddToChartButton = () => {
	const { cartDispatcher } = useCart()

	const onClick = () => {
		cartDispatcher({
			type: CartDispatcherKind.ADD_ITEM,
			item: {
				id: '1',
			},
		})
	}

	return (
		<Button variant={'primary'} onClick={onClick}>
			add to chart
		</Button>
	)
}
