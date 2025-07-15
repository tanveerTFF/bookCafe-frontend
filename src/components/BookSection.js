import React, { useState } from 'react';
import BookCard from './BookCard';
import books from '../book';

const BookSection = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const closeModal = () => setSelectedBook(null);

  return (
    <section id="reviews" className="py-16 bg-coral relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center text-white mb-10">Book Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <BookCard key={index} {...book} onClick={() => setSelectedBook(book)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white text-coral rounded-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-coral hover:text-red-600"
            >
              ✖
            </button>

            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="mx-auto h-60 object-contain mb-4 rounded"
            />

            <h2 className="text-3xl font-cinzel mb-2 text-center">{selectedBook.title}</h2>
            <p className="text-lg mb-4 text-center ">by {selectedBook.author}</p>

            <p className="text-lg text-left leading-relaxed font-medium
             text-gray-800 whitespace-normal">{selectedBook.review}</p>
          </div>
        </div>
      )}

      
    </section>
  );
};

export default BookSection;
