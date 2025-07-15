// src/components/MonthlyBookCard.js
import React from 'react';

const MonthlyBookCard = ({ title, author, image }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition p-4">
      <img src={image} alt={title} className="w-full md:h-72 lg:h-96 object-contain rounded-xl mb-4" />
      <h3 className="text-xl font-quicksand text-coral">{title}</h3>
      <p className="text-base text-coral/70">{author}</p>
    </div>
  );
};

export default MonthlyBookCard;
