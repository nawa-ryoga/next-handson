import { Box, Text, VStack, Button } from '@chakra-ui/react'

const FullWidthButton = ({text} :{ text: string }) => {
  return (
    <Button 
      w="100%"
      borderRadius={0}
    >
      <Text
        opacity={0.3}
      >
        {text}
      </Text>
    </Button>
  )
}

const Navigation = () => {
  return (
    <VStack
      py="8"
      spacing="24px"
    >
      <FullWidthButton text={`ボタン`} />
      <FullWidthButton text={`ボタン`} />
      <FullWidthButton text={`ボタン`} />
      <FullWidthButton text={`ボタン`} />
      <FullWidthButton text={`ボタン`} />
    </VStack>
  )
}

export default Navigation