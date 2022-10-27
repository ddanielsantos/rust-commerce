import {
	createContext,
	Dispatch,
	ReactNode,
	useContext,
	useReducer,
} from 'react'

type CartItem = {
	id: string
}

export const enum CartDispatcherKind {
	ADD_ITEM = 'add_item',
	REMOVE_ITEM = 'remove_item',
}

type CartAction = {
	type: CartDispatcherKind
	item: CartItem
}

type quantity = number

export type CartMap = {
	[k: string]: quantity | undefined
}

export function cartReducerFn(state: CartMap, action: CartAction): CartMap {
	switch (action.type) {
		case CartDispatcherKind.ADD_ITEM: {
			const previous = state[action.item.id]

			if (!previous) {
				return {
					...state,
					[action.item.id]: 1,
				}
			}

			return {
				...state,
				[action.item.id]: previous + 1,
			}
		}
		case CartDispatcherKind.REMOVE_ITEM: {
			const previous = state[action.item.id]

			if (!previous) return state

			if (previous === 1) {
				return {
					...state,
					[action.item.id]: undefined,
				}
			}

			return {
				...state,
				[action.item.id]: previous - 1,
			}
		}
		default: {
			return state
		}
	}
}

type CartContextProps = {
	items: CartMap
	numberOfItems: number
	cartDispatcher: Dispatch<CartAction>
}

const CartContext = createContext<CartContextProps | null>(null)

type Props = {
	children: ReactNode
}

export const getNumberOfItems = (obj: CartMap): number => {
	return Object.keys(obj).reduce((acc, prev) => {
		const qtd = obj[prev]

		if (!qtd) return acc

		return acc + qtd
	}, 0)
}

export const CartProvider = ({ children }: Props) => {
	const initialCartValue: CartMap = {}
	const [items, cartDispatcher] = useReducer(cartReducerFn, initialCartValue)

	return (
		<CartContext.Provider
			value={{ items, cartDispatcher, numberOfItems: getNumberOfItems(items) }}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext)

	if (!context) {
		throw Error('Cart can only be used inside CartProvider')
	}

	return context
}
