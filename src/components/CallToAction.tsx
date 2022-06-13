import { Box, Flex, Heading } from "@chakra-ui/react";

export function CallToAction(){
  return(
    <Flex
      direction='column'
      mx='auto'
      
      align='center'
      justify='center'
      w='839px'
      my='12'
    >
      <Box
        w='90px'
        mx="auto"
        h="2px"
        bg="gray.700"
        mb='16'
      />

      <Heading
        textAlign='center'
        fontWeight='medium'
        fontSize='4xl'
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>
    </Flex>
  )
}