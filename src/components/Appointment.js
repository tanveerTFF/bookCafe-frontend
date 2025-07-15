import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com'
import bgImage from '../assets/bookshelf.jpg';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Appointment = () => {
  
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

 /*   emailjs.sendForm(
      'service_acln43y',
      'template_2epbnfz',
      form.current,
      'jLNEVLj93MFbOqsAl'


    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed To Send Appointment, Try Again!');
    } );


  };
*/
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      book: formData.get('book'),
      author: formData.get('author'),
      review: formData.get('review'),
    };

    try {
      await axios.post('${BASE_URL}/reviews', data);
      setSubmitted(true);
      form.current.reset();
        // Auto-hide after 3 seconds
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
  className="relative py-12 lg:pb-12 lg:mt-32 min-h-[584px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0"></div>

  {/* Form container */}
  <div className="container mx-auto relative z-10">
    <div>
      {/* form remains untouched */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300 py-10 px-8 w-full max-w-[790px] mx-auto rounded-3xl text-center flex flex-col justify-start items-center gap-y-6 border border-white/30"
      >
        <h1 className="h1 mb-8 my-4 text-coral font-cinzel text-5xl  drop-shadow-md">
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
          className="input-control h-32 resize-none"
          name="review"
          placeholder="Write your review here..."
          required
        />

        <button className="btn w-full max-w-[514px]">Submit Review</button>

        {/* success message */}
        <div className="h-10">
          {submitted && (
            <p
              className="bg-white text-coral px-6 py-3 rounded-full text-sm font-semibold shadow-md border border-coral transition-opacity duration-500 opacity-100 animate-fadeOut"
              style={{ animation: 'fadeOut 3s forwards' }}
            >
              Thank you! Your review has been submitted!
            </p>
          )}
        </div>
      </form>
    </div>
  </div>
</section>

  );
   
};

export default Appointment;