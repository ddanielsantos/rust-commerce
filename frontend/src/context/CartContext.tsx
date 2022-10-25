import { createContext, Dispatch, ReactNode, useReducer } from 'react'

type CartItem = {
	id: string
	name: string
	quantity: number
	current_price: string
}

export const enum CartDispatcherKind {
	ADD_ITEM = 'add_item',
	REMOVE_ITEM = 'remove_item',
}

type CartAction = {
	type: CartDispatcherKind
	item: CartItem
}

export type CartMap = Map<string, CartItem>

export function cartReducerFn(state: CartMap, action: CartAction): CartMap {
	switch (action.type) {
		case CartDispatcherKind.ADD_ITEM: {
			const previous = state.get(action.item?.id)

			if (!previous) {
				state.set(action.item?.id, action.item)

				return state
			}

			state.set(previous.id, {
				...previous,
				quantity: previous.quantity + 1,
			})

			return state
		}
		case CartDispatcherKind.REMOVE_ITEM: {
			const previous = state.get(action.item?.id)

			if (!previous) return state

			if (previous.quantity === 1) {
				state.delete(previous.id)

				return state
			}

			state.set(previous.id, {
				...previous,
				quantity: previous.quantity - 1,
			})

			return state
		}
		default: {
			return state
		}
	}
}

type CartContextProps = {
	items: CartMap
	cartDispatcher: Dispatch<CartAction>
}

const CartContext = createContext<CartContextProps | null>(null)

type Props = {
	children: ReactNode
}

export const CartProvider = ({ children }: Props) => {
	const initialCartValue: CartMap = new Map()
	const [items, cartDispatcher] = useReducer(cartReducerFn, initialCartValue)

	return (
		<CartContext.Provider value={{ items, cartDispatcher }}>
			{children}
		</CartContext.Provider>
	)
}
