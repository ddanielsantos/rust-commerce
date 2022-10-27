import { ReactNode } from 'react'
import { CartProvider } from '../src/context/CartContext'

type Props = {
	children: ReactNode
}

export const Providers = ({ children }: Props) => {
	return <CartProvider>{children}</CartProvider>
}
