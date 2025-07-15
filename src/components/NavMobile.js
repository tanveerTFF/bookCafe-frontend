import React from 'react';

import {navigation} from '../data';


const NavMobile = () => {
  return (
  <nav className='h-full'>
    <ul className='flex flex-col justify-center items-center
    h-full space-y-5'>
      {navigation.map((item, index) => {
      return ( 
      <li className='capitalize font-quicksand text-xl text-coral'
       key={index}>
        <a href={item.href}>{item.name}</a>
      </li>
      );
      })}
      <li>
      <a href="/login" className='text-coral text-xl font-quicksand'>
        Login
      </a>
      </li>
    </ul>
    </nav>
  );
};

export default NavMobile;
