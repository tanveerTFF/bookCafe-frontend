import React from 'react';

const MonthlyBookCard = ({ title, author, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition p-3 sm:p-4 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-contain rounded-xl mb-3 sm:mb-4"
      />
      <h3 className="text-base sm:text-xl font-quicksand text-coral">{title}</h3>
      <p className="text-sm sm:text-base text-coral/70">{author}</p>
    </div>
  );
};

export default MonthlyBookCard;
