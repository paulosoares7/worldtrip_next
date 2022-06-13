import { Flex } from "@chakra-ui/react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContinentSwipeSlide } from "./ContinentSwipeSlide";
import { HomeProps } from "../../pages";

export function ContinentSlide({continent}: HomeProps){
  return (
    
    <Flex
      w='1140px'
      h='450px'
      mx='auto'
      mb='16'
      align='center'
    >
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      autoplay={{
        delay:4000,
      }}
      style={{width: '100%',height:'100%', flex: '1'}}
      >
        {continent.map(continents =>(
           <SwiperSlide key={continents.slug}>
            <ContinentSwipeSlide
              continentURL={`${continents.slug}`}
              continent={`${continents.title}`}
              text={`${continents.summary}`}
              continentImage={`${continents.image}`}
            />
         </SwiperSlide>
        ))}
    
    </Swiper>
  
    </Flex>
  )
}