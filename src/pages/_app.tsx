import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Layout from 'components/layouts/Layout'

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme(theme)}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
