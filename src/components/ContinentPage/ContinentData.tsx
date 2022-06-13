import { Box, Flex,Heading, Text} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContinentDataProps{
  number: number;
  textData:string;
  children?: ReactNode
}
export function ContinentData ({number, textData, children}: ContinentDataProps){
  return(
    <Flex
    ml='16'
    direction='column'
    align='center'
  >
    <Heading
      fontSize={["2xl","5xl"]}
      color="yellow.500"
      fontWeight="500"
    >
      {number}
    </Heading>

    <Text
      fontWeight="500"
      fontSize={["md",
      "xl"]}
      color="gray.700"
    >
      {textData}
      {children}
    </Text>
  </Flex>
  )
}