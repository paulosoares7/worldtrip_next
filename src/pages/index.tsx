import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom';




import { Banner } from "../components/Banner";
import { CallToAction } from "../components/CallToAction";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";


import { ContinentSlide } from "../components/ContinentSlide";
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";

export interface HomeProps {
  continent:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}


export default function Home({continent}: HomeProps) {
  return (
   <Flex direction='column'>
    <Head>
      <title>WorldTrip | Home</title>
    </Head>

    <Header/>
    <Banner/>
    <TravelTypes/>
    <CallToAction/>
    <ContinentSlide continent={continent}/>
   </Flex>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continent = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: RichText.asText(continent.data.continent_name),
      summary:RichText.asText( continent.data.subtitile),
      image: continent.data.continent_banner_home.url
    }
  })
  return {
    props: {
      continent
    }
  }
}