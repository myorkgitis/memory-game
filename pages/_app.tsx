import {ChakraProvider} from "@chakra-ui/provider";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Container, extendTheme} from "@chakra-ui/react";


// Init the theme so styles render for chakra
const theme = extendTheme({ })

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
