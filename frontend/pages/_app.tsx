import type { AppProps } from 'next/app'
import { globalStyle } from '../src/ui/globalStyle'
import { Providers } from './providers'

function App({ Component, pageProps }: AppProps) {
	globalStyle()

	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	)
}

export default App
