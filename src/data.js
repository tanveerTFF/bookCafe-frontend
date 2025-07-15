// src/data.js
import BookLoverSVG from './assets/undraw_book-lover_m9n3.svg';
import RoundStudySVG from './assets/roundstufy.svg'
import discoverBooksSVG from './assets/discoverBooks.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export const navigation = [
  { name: 'home', href: '#home' },
  { name: 'reviews', href: '#reviews' },
  { name: 'contact', href: '#contact' },
];

export const heroSlider = [
  {
    title: "Read. Reflect. Review.",
    subtitle: "Your favorite books, your personal take — one post at a time.",
    buttonText: "Browse Reviews",
    image: { type: BookLoverSVG },
  },
  {
    title: "Discover New Reads",
    subtitle: "Explore top-rated picks from classic to modern.",
    buttonText: "Start Reading",
    image: { type: discoverBooksSVG },
  },
  {
    title: "Write Your Own Review",
    subtitle: "Share your thoughts on the books you love or hate.",
    buttonText: "Submit a Review",
    image: { type: RoundStudySVG },
  },
];

export const social = [
{
    icon: <FaFacebookF />, href: "https://facebook.com"
  },
  {
    icon: <FaGithub />, href: "https://github.com/tanveerTFF"
  },
  {
    icon: <FaInstagram />, href: "https://instagram.com"
  },
];
