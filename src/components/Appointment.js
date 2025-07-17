import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import bgImage from '../assets/bookshelf.jpg';
import axios from 'axios';
import confetti from 'canvas-confetti';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Appointment = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      book: formData.get('book'),
      author: formData.get('author'),
      review: formData.get('review'),
    };

    try {
      await axios.post(`${BASE_URL}/reviews`, data);
      setSubmitted(true);
      form.current.reset();
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        shapes: ['circle', 'star'],
        scalar: 1.4,
        ticks: 200,
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert('Failed to submit review!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="appointment"
      className="relative bg-cover bg-center py-0 overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

      {/* Form container */}
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 md:px-8">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="scale-[0.95] sm:scale-100 bg-white/10 backdrop-blur-md p-5 sm:p-8 w-full max-w-[480px] rounded-3xl text-center flex flex-col gap-y-5 sm:gap-y-6 border border-white/30 shadow-xl"
        >
          <h1 className="text-3xl sm:text-4xl text-coral font-cinzel drop-shadow-md mb-1">
            Submit a Book Review
          </h1>

          <input
            className="input-control"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="input-control"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="input-control"
            type="text"
            name="book"
            placeholder="Book Title"
            required
          />
          <input
            className="input-control"
            type="text"
            name="author"
            placeholder="Author Name"
            required
          />
          <textarea
            className="input-control h-28 sm:h-32 resize-none"
            name="review"
            placeholder="Write your review here..."
            required
          />

          <button
            className="btn w-full max-w-[514px] mt-2"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>

          {submitted && (
            <div className="min-h-[1px]">
              <p className="mt-4 bg-white text-coral px-6 py-3 rounded-full text-sm font-semibold shadow-md border border-coral transition-opacity duration-500 opacity-100 animate-fadeOut">
                Thank you! Your review has been submitted!
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Appointment;
