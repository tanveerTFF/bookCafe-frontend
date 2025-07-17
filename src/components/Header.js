import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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


  return ( <header className="fixed w-full right-0 left-0 z-50 py-5 transition-all duration-300">

  <div className="w-full px-4 lg:px-8">
 <div
  className={`bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-md 
              w-full max-w-[95%] sm:max-w-[85%] md:max-w-[80vw] 
              mx-auto px-4 sm:px-6 md:px-8 py-3 
              flex items-center justify-between 
              transition-all duration-300 scale-[0.87] sm:scale-100
               ${bg ? 'shadow-md' : 'shadow-sm'}`}
>



      
      {/* Logo */}
      <a href="#">
        <img src={Logo} alt="logo" className="h-6 sm:h-8 w-auto" />

      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-x-8">
        <Nav />
      </div>

      {/* Mobile Nav Button */}
<div
  onClick={() => setNavMobile(!navMobile)}
  className="lg:hidden ml-2 cursor-pointer px-2"
>
  <CgMenuRight className="text-coral text-2xl sm:text-3xl" />
</div>
    </div>

    {/* Mobile Nav Dropdown */}
<AnimatePresence>
  {navMobile && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[78px] inset-x-0 mx-auto z-50 w-[90%] max-w-[400px] 
                 bg-pinky/60 backdrop-blur-md border border-white/30 
                 rounded-xl shadow-lg overflow-hidden px-6 py-6"
    >
      <NavMobile />
    </motion.div>
  )}
</AnimatePresence>







  </div>
</header>

  );
};

export default Header;
