import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


import {heroSlider} from '../data'


const HeroSlider = () => {
  return (
  <Swiper modules={[Pagination,Navigation,Autoplay]}
  autoplay={true} loop ={true} pagination={{
    clickable : true,
    dynamicBullets : true,
  }}
  navigation={true}
  className='heroSlider'
  >
    {heroSlider.map((slide,index) => {
      const {title,subtitle,image,buttonText}=slide;
      return(
      <SwiperSlide className='py-12 lg:py-16' key={index}>
        <div className="w-full px-4 lg:px-8">
          <div className="bg-pinky border border-white rounded-2xl p-10 shadow-lg w-[80vw] max-w-none mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* text */}
            <div className="flex-1 flex flex-col justify-between h-full px-4 text-center lg:text-left">
              <div>
                <h1 className="text-coral text-[40px] lg:text-[56px] font-cinzel leading-tight mb-6">
                  {title}
                </h1>
                <p className="text-gray-700 text-base lg:text-lg max-w-xl">
                  {subtitle}
                </p>
              </div>
              <a
                href={
                  buttonText === "Start Reading"
                ? "#monthly"
                : buttonText === "Submit a Review"
                ? "#appointment"
                : "#reviews"
              }
              className="mt-10 lg:mt-10 mx-auto lg:mx-0 w-auto max-w-fit bg-white text-coral px-6 py-3 rounded-full font-medium hover:bg-white transition duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                          >
                {buttonText}
              </a>
            </div>

            {/* image */}
            <div className="flex-1 mt-8 lg:mt-0 flex justify-center px-4">
              <img className="h-72 md:h-96 object-contain" src={image.type} alt="hero" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      );

    })}

  </Swiper>
  );
};

export default HeroSlider;
