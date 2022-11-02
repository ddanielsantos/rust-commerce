import { ReactNode } from 'react'
import { CartProvider } from './CartContext'

type Props = {
	children: ReactNode
}

export const Providers = ({ children }: Props) => {
	return <CartProvider>{children}</CartProvider>
}
