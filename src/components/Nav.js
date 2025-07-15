import React from 'react';
//import data

import { navigation } from '../data'

const Nav = () => {
  return ( 
  <nav className='text-[15px]'>
    <ul className='flex gap-x-10'>
      {navigation.map((item, index) => {
        return (
        <li key={index}>
          <a className='capitalize text-coral text-3xl font-flamenco hover:text-bluegreeny 
          transition' href={item.href}>{item.name}
          </a>
        </li>
        );
      })}
       {/* Admin Login Button */}
        <li className="flex items-center">
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-coral text-3xl font-flamenco hover:text-bluegreeny transition"
          >
          Login
          </a>
        </li>


    </ul>
    </nav>
  );
};

export default Nav;
