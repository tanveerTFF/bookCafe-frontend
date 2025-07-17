import React from 'react';
import contactBg from '../assets/bgCover/pinkbg3.webp'; // adjust path if needed

const Contact = () => {
  return (
    <section id='contact' 
    className='relative py-12 px-4 sm:px-6 bg-cover bg-center'
    style={{ backgroundImage: `url(${contactBg})` }}>
      <div className='container mx-auto relative z-10'>
        <div className='flex flex-col items-center justify-center text-center space-y-6 scale-[0.92] sm:scale-100 transition-transform duration-300'>
          <div className='text-coral font-cinzel text-2xl sm:text-3xl'>Contact Us</div>
          <div className='text-3xl sm:text-4xl text-coral font-quicksand break-words'>
            bookCloud2025@gmail.com
          </div>
          <div className='text-xl sm:text-2xl text-coral font-cinzel'>Visit Our Facebook Page</div>
          <a
            href="#reviews"
            className='btn text-lg sm:text-2xl text-white font-quicksand px-6 sm:px-8 py-3 rounded-full bg-coral hover:bg-pinky hover:text-coral transition'
          >
            Start Reading!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
