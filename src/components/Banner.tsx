import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";


export function Banner(){
  return (
  <Flex
    w='100%'
    h='368'
    maxWidth={1460}
    mx='auto'
  >
    <Box
      w='100%'
      h='340'
      px= '20'
      pt='14'
  
      bgImage="url('/bannerHome.jpg')"
      bgPosition="100% 25%"
      
    >
      <Flex
        mx='auto'
        mt='12'
        w='100%'
        maxWidth={1160}
      >
        <Box>
          <Stack spacing='5'>

            <Heading
              color="gray.100"
              fontWeight="500"
            >
            5 Continentes,<br/>infinitas possibilidades.
            </Heading>

            <Text
              color="gray.300"
              fontSize={["0.8rem","xl"]}
              maxW={550}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
        </Box>

        <Image
          src="/airplane.svg"
          alt='Airplane'
          w='417'
          h='270'
          mr='auto'
          transform='translate(48px)'
        />
    </Flex>
    </Box>
  </Flex>
  )
}