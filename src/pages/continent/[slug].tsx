import { Box, Flex, Grid, Heading, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom';


import { RiInformationLine } from "react-icons/ri";
import { CityCard } from "../../components/CitiyCard/Index";
import { ContinentInfo } from "../../components/ContinentPage/ContinentInfo";
import { Header } from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";

export type citiesProps = {

    thumbmail:string
    flag: string
    city: string
    county: string
 
}

export interface ContinentProps {
  continents: {
    slug: string,

        continentName:string,
        description: string,
        continentBanner:string,
        numbersOfCountries: number
        numbersOfLanguage: number
        numberOfCities: number
        cities: citiesProps[]
    }
  }




export default function Continent({continents}: ContinentProps) {
  
  return (
    <Flex
      direction='column'
      maxWidth={1460}
      mx='auto'
    >
      <Head>
        <title>WorldTrip | {continents.continentName}</title>
        </Head>

      <Header/>

      <Flex
        w="100%"
        h={["150px","300px","500px"]}
        px={["0","0","36"]}
        pt={["0","0","72"]}
        bgImage={`url('${continents.continentBanner}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center","center", "flex-start"]}
      >
        <Heading
          textAlign={["center","left"]}
          fontSize={["1.75rem","5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {continents.continentName}
        </Heading>
      </Flex>
      <ContinentInfo continents={continents}/>

      <Box mx='150px'>
        <Heading
          fontWeight="500"
          fontSize={["2xl","4xl"]}
          my='12'
        >
          Cidades +100
        </Heading>

        <CityCard continents={continents}/>

      </Box>
    </Flex>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'post'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  const prismic = getPrismicClient();
  const { slug } = params;
  const response = await prismic.getByUID("post", String(slug), {});

  const cities =response.data.cities_content.map(city=> {
    return {
      thumbmail: city.city_image.url,
      flag: city.flag_country.url,
      city: RichText.asText(city.city),
      county: RichText.asText(city.country)
    }
  })

  const [continent] = response.data.continent_content
  

   const continents = {
    slug,


      continentName:RichText.asText(continent.continent_name),
      description: RichText.asText(continent.text),
      continentBanner: continent.continent_banner_content.url,
      numbersOfCountries: continent.numbers_of_countries,
      numbersOfLanguage: continent.numbers_of_languages,
      numberOfCities: continent.numbers_of_cities,
      cities

   };
  
  return {
    props: {
      continents
    },
    revalidate: 1800,
  }
}
