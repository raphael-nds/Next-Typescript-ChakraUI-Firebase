import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { CartProvider } from '../contexts/CartContext'
import { theme } from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
		<ChakraProvider theme={theme}>
			<CartProvider>
				<Component {...pageProps} />
			</CartProvider>
		</ChakraProvider>
    </AuthProvider>
  )
}

export default App