import type { AppProps } from 'next/app'
import { globalStyle } from '../src/ui/globalStyle'

function App({ Component, pageProps }: AppProps) {
	globalStyle()

	return <Component {...pageProps} />
}

export default App
