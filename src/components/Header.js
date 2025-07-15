import React, { useState, useEffect } from 'react';


import { CgMenuRight } from 'react-icons/cg'
import Nav from './Nav';
import NavMobile from './NavMobile';
//import Program from './Program';

import Logo from '../assets/kugile.regular.png';


const Header = () => {
  const [bg, setBg] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })


  return ( <header className={`${bg ? 'bg-white py-3 shadow-md' : 'bg-none py-5'
    } fixed w-full right-0 left-0 z-50 transition-all 
     duration-300`} >
      <div className='container mx-auto flex justify-between
      items-center' >
        {/* logo */}
        <a href="#">
          <img className='h-8 w-auto' src={Logo} alt=''/>
        </a>
        {/* Nav */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
        {/* program */}
        {/*<Program />*/}
        {/* nav mobile button */}
        <div onClick={()=> setNavMobile(!navMobile)}
         className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-coral text-3x1' />
        </div>
        {/* mobile nav */}
        <div className={`${navMobile ? 'max-h-[260px]' : 'max-h-0'} fixed bg-pinky text-teeny
        z-50 shadow-lg left-0 w-full top-[78px] h-full overflow-hidden translation-all
        duration-300`}>
          <NavMobile />
        </div>
      </div>
     </header>
  );
};

export default Header;
