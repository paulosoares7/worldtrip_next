import { Box , Text} from "@chakra-ui/react";

interface ContinentTextProps{
  text: string
}

export function ContinentText({text}: ContinentTextProps){

  return (
    <Box
      w='500px'
      h='211px'
      textAlign='justify'
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {text}
      </Text>
    </Box>
  )
}