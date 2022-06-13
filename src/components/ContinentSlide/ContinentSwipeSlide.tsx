import { Box, Flex, Heading, Text, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

interface ContinentSwipeSlideProps extends FlexProps {
  continent: string;
  continentImage: string
  text: string
  continentURL: string;
}

export function ContinentSwipeSlide({continent,text, continentImage, continentURL}: ContinentSwipeSlideProps){
  return (
    
    <Flex
      h='100%'
      px='12px'
      direction='column'
      justify='center'
      align='center'

      textAlign='center'
      backgroundImage={`url('${continentImage}')`}
      backgroundSize='cover'
      backgroundPosition='center'
            
    >
      <Link href={`/continent/${continentURL}`}>
        <Box as='a' href='/'>
          <Heading
            fontSize={["3xl","4xl","5xl"]}
            color="gray.100"
            fontWeight="bold">
              {continent}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem","1xl","2xl"]}
            mt={["2","4"]}>
            {text}
          </Text>

        </Box>
      </Link>
    </Flex>
  )
}