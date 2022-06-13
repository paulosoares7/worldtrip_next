import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";
import { Cities } from "./Cities";

export function CityCard({continents}: ContinentProps){
  const {cities} = continents

  return (
    <Grid
      templateColumns={["1fr","1fr 1fr","repeat(3, 1fr)","repeat(4, 1fr)"]}
      gap={['20px','45px']}
      alignItems="center"
      justifyContent="center"
      px={["30px","0"]}
    >

      {cities.map( city => (
        <Cities
          key={city.city}
          city={city.city}
          country={city.county}
          flag={city.flag}
          image = {city.thumbmail}
        />
      )
      )}
    </Grid>

  )
}