import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import type { AppProps } from 'next/app'
import {ShoppingCartProvider} from "../business/content/contexts/ShoppingCartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
  )
}

export default MyApp
