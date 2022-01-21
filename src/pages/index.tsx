import {Heading, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import BannerSection from '../components/LandingPage/BannerSection'
import TravelTypes from '../components/LandingPage/TravelTypes'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay, Navigation,Pagination
} from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import "swiper/css/bundle";
import ContinentsSlide from '../components/LandingPage/ContinentsSlide';
import DividerTeal from '../components/LandingPage/DividerTeal';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {

  return (
    <Box 
      w="100%"
      mb="8"
    > 
      <Header/>

      <BannerSection/>
      <TravelTypes/>
      <DividerTeal/>
      
      <Box pt="10" pb="3" w='100%' textAlign={'center'}>

        <Heading as="h2" color="gray.600" fontFamily={`'Poppins', sans-serif`}
        fontWeight={500}
        fontSize={['xl', '2xl', '4xl']}>
            Vamos nessa? <br/> Então escolha seu continente
        </Heading>
      </Box>
        <Box
          h={['150px' , '350px', '450px', '450px']} 
          w={['100%', '100%', '1240px', '1240px']}
          mx={'auto'}

        >

          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true
            }}
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }}
            grabCursor={true}
            navigation={true} 
            className="mySwiper"
          >
            <SwiperSlide>
              <ContinentsSlide continent='europa'/>
            </SwiperSlide>
            <SwiperSlide>
              <ContinentsSlide continent='asia'/>
            </SwiperSlide>
            <SwiperSlide>
              <ContinentsSlide continent='america'/>
            </SwiperSlide>
            <SwiperSlide>
              <ContinentsSlide continent='oceania'/>
            </SwiperSlide>
            <SwiperSlide>
              <ContinentsSlide continent='africa'/>
            </SwiperSlide>
          </Swiper >
        </Box>
    </Box>
  )
}
