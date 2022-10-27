import { expect, test } from 'vitest'
import {
	cartReducerFn,
	getNumberOfItems,
	CartDispatcherKind,
} from './CartContext'
import type { CartMap } from './CartContext'

function mockItem(id: string) {
	return {
		id,
	}
}

test('should decrease until 0', () => {
	const state: CartMap = {}
	const item = mockItem('1')

	const newStateValue = cartReducerFn(state, {
		type: CartDispatcherKind.REMOVE_ITEM,
		item,
	})
	const itemInTheCart = state[item.id]

	expect(itemInTheCart).toBeUndefined()
	expect(getNumberOfItems(newStateValue)).toBe(0)
})

test('should add different items', () => {
	const state: CartMap = {}

	const item1 = mockItem('1')
	const item2 = mockItem('2')

	let newStateValue = cartReducerFn(state, {
		type: CartDispatcherKind.ADD_ITEM,
		item: item1,
	})

	expect(getNumberOfItems(newStateValue)).toBe(1)

	newStateValue = cartReducerFn(newStateValue, {
		type: CartDispatcherKind.ADD_ITEM,
		item: item2,
	})
	newStateValue = cartReducerFn(newStateValue, {
		type: CartDispatcherKind.ADD_ITEM,
		item: item2,
	})

	const distinctItems = Object.keys(newStateValue).length

	expect(distinctItems).toBe(2)
	expect(getNumberOfItems(newStateValue)).toBe(3)
})
