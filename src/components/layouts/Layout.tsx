import { ReactNode } from 'react';

import Navigation from 'components/layouts/NavigationDrawer/Navigation'
import ChakraUiDrawer from 'components/layouts/NavigationDrawer/Drawer'

import { Box, HStack } from '@chakra-ui/react'

type Props = { children: ReactNode }

const Layout = ({children}: Props) => {
  return (
    <>
      <Box display={{ base: "block", md: "none", }}>
        <ChakraUiDrawer>
          <Navigation smallDisplay={true} />
        </ChakraUiDrawer>
      </Box>

      <HStack alignItems="start">
        <Box 
          display={{ base: "none", md: "block" }} 
          minW={200}
        >
          <Navigation />
        </Box>
        <Box>
          {children}
        </Box>
      </HStack>
    </>
  )
}

export default Layout