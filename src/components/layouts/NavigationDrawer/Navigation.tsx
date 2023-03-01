import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router';

import { Text, VStack, Button } from '@chakra-ui/react'

type MenuButtonProps = { 
  text: string, 
  href: string, 
  opacity: number 
}

const MenuButton = ({text, href, opacity}: MenuButtonProps) => {
  const { pathname } = useRouter()
  const isCurrentPage = pathname === href

  return (
    <Link 
      href={href}
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
          opacity={ isCurrentPage ? opacity + 0.2: opacity }
          fontSize='0.8rem'
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
            href={menu.route}
            opacity={smallDisplay ? 0.8: 0.3}
          />
        )
      }
    </VStack>
  )
}

export default Navigation