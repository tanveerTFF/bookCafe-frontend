# 📘 The Cloud BookCafe — Full Stack Project

Hello! I'm Tanveer Mahmood. Inspired by my parents since I was a child, I've always been fascinated by books and always wanted to keep record of all the books I've read and recall how they've made me feel. This project is an expression of my love for books as well as showcase of my knowledge of full stack web development! Feel free to explore, do submit a review about your favourite book and let me know if you have any ideas for improvement! 

You can email me at tanveermofficial@gmail.com
Live Site: https://thecloudbookcafe.vercel.app

Below is the documentation for `thecloudbookcafe.vercel.app`, a full-stack book review platform built using React, TailwindCSS, Firebase, Express.js, and MongoDB.

---

## 🧠 Project Overview

**The Cloud BookCafe** is a book review platform that enables users to submit and view book reviews & authenticated admins can manage, and display them. The site showcases featured monthly reads and wishlist books, styled with TailwindCSS, and stores all reviews in a MongoDB database. Admin authentication is handled via Firebase.

---

## 🌐 Frontend (React + TailwindCSS + Firebase)

### 🔧 Technologies Used

- **React** – Frontend framework for UI
- **Tailwind CSS** – Utility-first CSS for fast styling
- **Firebase Authentication** – Secures admin access
- **React Router** – Client-side routing
- **Axios** – For API requests
- **Confetti.js** – Celebratory animations on form submission
- **Vercel** – Frontend deployment

---

### 🔐 Firebase Authentication

- Set up in `context/FirebaseContext.js`
- Uses `signInWithEmailAndPassword()` from Firebase Auth
- Authenticated users (admins) can:
- Access the `/admin` dashboard
- Add, edit, or delete book reviews
- Firebase token is stored in `localStorage` for persistent sessions
- Context API is used to share auth state across components

---

### 🧩 Key Components (Frontend)

- `BookCard.js`: Displays individual book reviews with title, author, and review
- `MonthlyBookCard.js`: A styled variation used in featured sections
- `MonthlySpecials.js`: Shows two grids — Top 5 Reads and Wishlist books
- `Appointment.js`: A form for submitting book reviews using POST
- `AdminDashboard.js`: Admin interface for listing and deleting reviews using GET and DELETE
- `Login.js`: Email/password-based Firebase login screen

---

### ⚙️ Routing & Navigation

- `/`: Homepage with featured reviews
- `/login`: Admin login screen
- `/admin`: Protected dashboard for managing reviews

---

### 🌈 Tailwind Styling

- Responsive design using grid and flex
- Utility classes for padding, typography, color, spacing
- Cards styled with shadows, rounded corners, and hover effects
- Confetti animation triggered on successful form submission

---

### 🚀 Frontend Deployment (Vercel)

- Deployed on [Vercel](https://vercel.com)
- `.env` used for Firebase keys and API base URL
- Connected to GitHub with auto-deploy on push to `main`
- Live site: [https://thecloudbookcafe.vercel.app](https://thecloudbookcafe.vercel.app)

---

## 🛠️ Backend (Node.js + Express + MongoDB)

### 🔧 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – REST API server
- **MongoDB** – Document database
- **Mongoose** – MongoDB object modeling
- **CORS** – Cross-Origin Resource Sharing middleware
- **dotenv** – Loads environment variables
- **Railway** – Backend and database deployment

---

### 🧩 Backend Components

- `server.js`: Entry point that connects to MongoDB and starts the server
- `config/db.js`: MongoDB connection logic using `mongoose.connect()`
- `models/Book.js`: Mongoose schema for storing review data
- `routes/bookRoutes.js`: API route definitions
- `controllers/bookController.js`: Logic for CRUD operations

---

### 🌐 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/reviews`          | Fetch all reviews        |
| POST   | `/reviews`          | Submit a new review      |
| DELETE | `/reviews/:id`      | Delete a review          |
| PUT    | `/reviews/:id`      | (Available, not used)    |

- `Appointment.js` uses `POST /reviews` to submit new reviews
- `AdminDashboard.js` uses:
  - `GET /reviews` to display all reviews
  - `DELETE /reviews/:id` to remove reviews

---

### 🔐 Auth Handling (Backend)

- Backend routes are not protected with Firebase Admin SDK yet
- Frontend Firebase Auth handles access control for admin views
- Future Plan: Use Firebase Admin SDK to verify tokens in API requests for added security

---

### 🚀 Backend Deployment (Railway)

- GitHub repo connected to [Railway](https://railway.app)
- Environment variables stored securely (`MONGO_URI`, `PORT`)
- Server auto-deploys on push

---

## 💡 Recommendations & Best Practices

### 🔒 Security

-  Firebase Auth in frontend is solid

-  Use `window.confirm` for delete confirmation


### 🔧 Planned Code Improvements 

- Add Edit functionality using PUT
- Modularize backend further (e.g., error handlers, middlewares)
- Use `.env.example` to help onboarding contributors
- Add loading spinners and error boundaries for better UX
- Add review categories or tags
- Implement search or filter options
- Use SWR or React Query for smoother data fetching



---

## 📎 Project Links

- 🔗 Frontend Repo: [github.com/tanveerTFF/bookCafe-frontend](https://github.com/tanveerTFF/bookCafe-frontend)
- 🔗 Backend Repo: [github.com/tanveerTFF/bookCafe-backend](https://github.com/tanveerTFF/bookCafe-backend)
- 🌐 Live Site: [https://thecloudbookcafe.vercel.app](https://thecloudbookcafe.vercel.app)

---
