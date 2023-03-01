import { ReactNode, useRef } from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerBody, 
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
        <DrawerContent>
          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ChakraUiDrawer