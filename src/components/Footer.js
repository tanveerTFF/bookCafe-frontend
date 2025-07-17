import React from 'react';


//import data
import {social} from '../data'

//import logo
import Logo from '../assets/kugile.regular.png';



const Footer = () => {
  return ( 
  <footer className='bg-orange py-8 lg:py-4'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center
       justify-between text-white gap-y-4 text-center lg:text-left'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className='h-auto max-h-6 sm:max-h-8 lg:max-h-10 w-auto' />

        </a>
        {/* copyright text */}
        <div className='text-[15px] text-coral font-quicksand text-center w-full'>
          &copy; Copyright 2025 , All rights reserved by TanveerTFF
        </div>
        {/* socials */}
        <div className='flex flex-col lg:flex-row items-center gap-y-2 lg:gap-x-4'>
          <div className='text-white text-lg font-semibold'>
            Get Your Own Webpage!
          </div>
        <div className='flex gap-x-4'>
          {social.map((item,index) => {
            return <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
              <div className='bg-[#fe8d71a9] hover:bg-[#fe8d71] 
              w-10 h-10 rounded-full flex justify-center items-center
              transition text-2xl'>
                {item.icon}
                </div>

              </a>;
          })}
          </div>
        </div>
      </div>


    </div>


  </footer>
  );
};

export default Footer;
