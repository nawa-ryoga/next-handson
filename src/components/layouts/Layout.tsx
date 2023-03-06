import { ReactNode } from 'react';

import Navigation from 'components/layouts/NavigationDrawer/Navigation'
import ChakraUiDrawer from 'components/layouts/NavigationDrawer/Drawer'

import { Box, HStack } from '@chakra-ui/react'

type Props = { children: ReactNode }

const Layout = ({children}: Props) => {
  return (
    <>
      <Box 
        display={{ base: "block", md: "none", }}
      >
        <ChakraUiDrawer>
          <Navigation smallDisplay={true} />
        </ChakraUiDrawer>
      </Box>

      <HStack alignItems="start" spacing={0}>
        <Box 
          display={{ base: "none", md: "block" }} 
          minW={180}
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