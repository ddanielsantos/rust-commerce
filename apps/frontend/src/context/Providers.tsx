import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { CartProvider } from './CartContext'

type Props = {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
		},
	},
})

export const Providers = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CartProvider>{children}</CartProvider>
		</QueryClientProvider>
	)
}
