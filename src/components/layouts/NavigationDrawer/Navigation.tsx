import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import { Text, VStack, Button } from '@chakra-ui/react'

type MenuButtonProps = { 
  text: string, 
  link: string, 
  opacity: number 
}

const MenuButton = ({text, link, opacity}: MenuButtonProps) => {
  return (
    <Link 
      href={link}
      display="contents"
      as={NextLink}
    >
      <Button 
        w="100%"
        h={12}
        px={8}
        borderRadius={0}
        justifyContent="start"
        background="chakra-body-bg"
      >
        <Text
          opacity={opacity}
        >
          {text}
        </Text>
      </Button>
    </Link>
  )
}

type Menu = {
  route: string,
  display: string
}

type NavigationMenuList = Menu[]

const navigationMenuList = (): NavigationMenuList => {
  return [
    { route: '/', display: 'TOP' },
    { route: '/ranking-japan-boxoffice2022', display: '2022年ランキング' }
  ]
}

const Navigation = ({smallDisplay}: {smallDisplay?: boolean}) => {
  return (
    <VStack
      py="12"
    >
      {
        navigationMenuList().map((menu, i) =>
          <MenuButton 
            key={i}
            text={menu.display}
            link={menu.route}
            opacity={smallDisplay ? 0.8: 0.3}
          />
        )
      }
    </VStack>
  )
}

export default Navigation