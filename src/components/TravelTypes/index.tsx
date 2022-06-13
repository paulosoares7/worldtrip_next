import { Grid, Flex } from "@chakra-ui/react";
import { TravelTypesGrid } from "./TravelTypesGrid";

export function TravelTypes(){
  return(
    <Flex
      w='100%'
      h='145'
      mx='auto'
      mt='16'
      maxWidth={1240}
      px='4'
      alignItems='center'
      
    >
      <Grid
        w='100%'
        templateColumns='repeat(5,1fr)'
        gap={6}
        mx='auto'
      >
        <TravelTypesGrid icon='cocktail' typeTravel=" Vida Noturna"/>
        <TravelTypesGrid icon='surf' typeTravel=" Praia"/>
        <TravelTypesGrid icon='building' typeTravel=" Moderno"/>
        <TravelTypesGrid icon='museum' typeTravel=" Clássico"/>
        <TravelTypesGrid icon='earth' typeTravel="e mais..."/>
      </Grid>
    </Flex>
  )
}