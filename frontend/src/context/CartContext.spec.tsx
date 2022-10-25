import { expect, test } from 'vitest'
import { CartDispatcherKind, cartReducerFn } from './CartContext'
import type { CartMap } from './CartContext'

function mockCartMap(): CartMap {
	return new Map()
}

function mockItem(id: string) {
	return {
		id,
		name: 'aaa',
		quantity: 1,
		current_price: '50',
	}
}

test('should decrease until 0', () => {
	const state = mockCartMap()
	const item = mockItem('1')

	const newStateValue = cartReducerFn(state, {
		type: CartDispatcherKind.REMOVE_ITEM,
		item,
	})
	const itemInTheCart = newStateValue.get(item.id)

	expect(itemInTheCart).toBeUndefined()
	expect(newStateValue.size).toBe(0)
})

test('should add different items', () => {
	const state = mockCartMap()

	const item1 = mockItem('1')
	const item2 = mockItem('2')

	let newStateValue = cartReducerFn(state, {
		type: CartDispatcherKind.ADD_ITEM,
		item: item1,
	})

	expect(newStateValue.size).toBe(1)

	newStateValue = cartReducerFn(state, {
		type: CartDispatcherKind.ADD_ITEM,
		item: item2,
	})

	expect(newStateValue.size).toBe(2)
})
