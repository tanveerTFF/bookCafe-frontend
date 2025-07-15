import React from 'react';

const BookCard = ({ title, author, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold text-coral">{title}</h2>
      <p className="text-sm text-gray-500">{author}</p>
    </div>
  );
};

export default BookCard;


