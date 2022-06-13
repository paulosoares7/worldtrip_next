import { Flex, GridItem, Image, Text, GridItemProps} from "@chakra-ui/react";

interface TravelTypesGridProps extends GridItemProps{
  icon: string;
  typeTravel: string
}

export function TravelTypesGrid({icon,typeTravel}: TravelTypesGridProps){
  return (
    <GridItem>
      <Flex
        direction='column'
        align='center'
        justify='center'
      >

       <Image
          src={`/icons/${icon}.svg`}
          w="85px" 
          h="85px" 
          mb="5"
        />

        <Text >{typeTravel}</Text>
      </Flex>
    </GridItem>
  )
}
