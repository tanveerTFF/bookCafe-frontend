// src/components/MonthlySpecials.js
import React from 'react';
import MonthlyBookCard from './MonthlyBookCard';
import { FaBookOpen, FaBookmark } from 'react-icons/fa';
//importing the bookcovers here
import RuthshawCover from '../assets/bookCoverforMonthlyRead/booksellerRuthshaw.jpg';
import DoraKata from '../assets/bookCoverforMonthlyRead/DorakataZebracrossing.jpg';
import FachukiFapor from '../assets/bookCoverforMonthlyRead/FachukiFapor.png';
import PencilPoints from '../assets/bookCoverforMonthlyRead/Pencilpoints.jpg';
import TheBookThief from '../assets/bookCoverforMonthlyRead/thebooktheif.jpg';

import AsimovFoundationsEmpire from '../assets/bookCoverforWishlist/asimov-foundationandempire.jpg';
import Basic_Ali_14 from '../assets/bookCoverforWishlist/Basic_Ali_14.png';
import invisibleman from '../assets/bookCoverforWishlist/invisibleman.jpg';
import JalajLocker from '../assets/bookCoverforWishlist/Jalaj_Locker.jpg';
import supernova from '../assets/bookCoverforWishlist/supernova.jpg';


const topReads = [
  { title: 'The Bookseller At The End Of The World', author: 'Ruth Shaw', image: RuthshawCover },
  { title: 'ডোরাকাটা জেব্রাক্রসিং', author: 'Shoroli Shilon', image: DoraKata },
  { title: 'ফাচুকি ফাঁপর', author: 'Shahriar Shihab', image: FachukiFapor },
  { title: 'Pencil Points To Murder', author: 'Wiletta Ann Barber', image: PencilPoints },
  { title: 'The Book Thief', author: 'Markus Zusak', image: TheBookThief },
];

const wishlist = [
  { title: 'Foundation & Empire', author: 'Issac Assimov', image: AsimovFoundationsEmpire },
  { title: 'বেসিক আলী - ১৪', author: 'শাহরিয়ার', image: Basic_Ali_14 },
  { title: 'Invisible Man', author: 'H.G. Wells', image: invisibleman },
  { title: 'জলজ লকার', author: 'মাহরীন ফেরদৌস', image: JalajLocker },
  { title: 'Supernova', author: 'Marissa Meyer', image: supernova },
];

const MonthlySpecials = () => {
  return (
    <section id = "monthly" className="py-16 bg-pinky">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center text-coral mb-10"> Monthly Specials</h2>

        <div className="mb-12">
          <h3 className="text-3xl font-quicksand mb-6 text-coral flex items-center gap-2">
           <FaBookOpen className="text-2xl" /> Monthly Top 5 Reads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topReads.map((book, index) => (
              <MonthlyBookCard key={index} {...book} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-quicksand mb-6 text-coral flex items-center gap-2">
            <FaBookmark className="text-2xl" /> Top 5 Wishlist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {wishlist.map((book, index) => (
              <MonthlyBookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlySpecials;
