import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='bg-yellow-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center text-center space-y-6'>
          <div className='text-coral font-cinzel text-3xl'>Contact Us</div>
          <div className='text-4xl text-coral font-quicksand'>bookCloud2025@gmail.com</div>
          <div className='text-2xl text-coral font-quicksand'>Visit Our Facebook Page</div>
          <a
            href="#reviews"
            className='btn text-2xl text-white font-quicksand px-8 py-3 rounded-full bg-coral hover:bg-pinky hover:text-coral transition'
          >
            Start Reading!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
