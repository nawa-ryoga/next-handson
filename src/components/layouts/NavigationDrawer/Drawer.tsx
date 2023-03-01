import { ReactNode, useRef } from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerBody, 
  DrawerOverlay,
  useDisclosure,
  Button 
} from '@chakra-ui/react'

type Props = { children: ReactNode }

const ChakraUiDrawer = ({children}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Button 
        ref={btnRef} 
        colorScheme='teal' 
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
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