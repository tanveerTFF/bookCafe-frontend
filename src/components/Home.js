import React from 'react';
import Header from './Header';
import Hero from './Hero';
import MonthlySpecial from './MonthlySpecial';
import BookSection from './BookSection';
import Appointment from './Appointment';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MonthlySpecial />
      <BookSection />
      <Appointment />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
