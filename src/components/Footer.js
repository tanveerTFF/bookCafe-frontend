import React from 'react';


//import data
import {social} from '../data'

//import logo
import Logo from '../assets/kugile.regular.png';



const Footer = () => {
  return ( 
  <footer className='bg-orange py-8 lg:py-4'>
    <div className='container mx-auto'>
      <div className='flex text-white flex-col gap-y-6 lg:flex-row items-center
      justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className='h-8 w-auto' />

        </a>
        {/* copyright text */}
        <div className='text-[15px] text-coral font-quicksand'>
          &copy; Copyright 2025 , All rights reserved by TanveerTFF
        </div>
        {/* socials */}
        <div className='flex flex-col items-center gap-y-2'>
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
