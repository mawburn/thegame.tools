import '../styles/globals.css'
import '../styles/toggle.css'
import '@thegametools/components/dist/index.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
