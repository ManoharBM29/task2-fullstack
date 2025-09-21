# 🚀 Task2 Fullstack App

A fullstack web application built with *React* (frontend) and *Express + PostgreSQL* (backend) implementing *user authentication with JWT* 🔐.

---

## ✨ Features

- 📝 *Sign Up*: Create new user, validate inputs, hash password, return JWT  
- 🔑 *Sign In*: Validate credentials, return JWT  
- 🛡 *Protected Route*: /api/users/me returns logged-in user info  
- 💾 *Token Handling*: Store JWT in localStorage, used for API requests  
- 🚪 *Sign Out*: Clears token and user info  

---

## ⚡ Installation

### Backend

cd backend
npm install

Create .env file with:

DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=5432
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1d

Start backend server:

npm run dev

Frontend

cd frontend
npm install
npm start

> 🌐 Frontend: http://localhost:3000
🔌 Backend: http://localhost:5000




---

🏃‍♂ Usage

1. Open the app in your browser


2. 📝 Sign Up with a new email


3. 🔑 Sign In with existing credentials


4. 🏠 View Home page showing Name + Phone


5. 🚪 Sign Out to remove token




---

✅ Testing

🟢 Sign Up / Sign In with valid inputs

🔴 Sign Up / Sign In with invalid inputs → error messages

🛡 Access /api/users/me with valid/invalid JWT

💾 Verify JWT stored in localStorage

🚪 Sign Out removes token and blocks access



---

📸 Screenshots

1. Sign Up success ✅


2. Sign In success ✅


3. Home page showing Name + Phone 🏠




---

🛠 Technologies

Frontend: React, React Router DOM

Backend: Node.js, Express, PostgreSQL, bcryptjs, jsonwebtoken, cors, dotenv



---
