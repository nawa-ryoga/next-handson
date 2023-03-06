import { ReactNode, useRef } from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerBody, 
  DrawerOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

type Props = { children: ReactNode }

const ChakraUiDrawer = ({children}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Button 
        ref={btnRef} 
        colorScheme='chakra-body-bg' 
        onClick={onOpen}
        position="fixed"
        bottom={3}
        left={3}
      >
        <HamburgerIcon color="white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
      >
        <DrawerContent
          background="chakra-body-bg"
        >
          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
        <DrawerOverlay />
      </Drawer>
    </>
  )
}

export default ChakraUiDrawer