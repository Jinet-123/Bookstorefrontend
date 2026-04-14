# 📚 Bookstore Web Application (MERN Stack)

A full-stack **Bookstore Web Application** built using the MERN stack that allows users to browse, search, and purchase books, while providing admin-level controls for managing content and users.

---

## 🚀 Features

### 👤 User Features

* 📖 Browse and view all available books
* 🔍 Search books by title
* 🎯 Filter books based on genre
* 🧾 View detailed information about each book
* 💳 Demo payment integration using Stripe
* 🧑‍💼 User profile management (update profile details)
* ⚡ Smooth state management using Context API

---

### 🛠️ Admin Features

* 📊 Admin dashboard for overall management
* 👥 View and manage all registered users
* 📥 Review and approve book submission requests
* ✅ Only approved books are displayed on the homepage
* ➕ Manage book listings efficiently

---

### 🔄 Core Functionalities

* 🔁 Full CRUD operations for books
* 🌐 RESTful API integration between frontend and backend
* ⚙️ Seamless frontend-backend communication using Axios
* 📦 Centralized state management using React Context API

---

## 🧠 Tech Stack

### Frontend

* React.js
* Context API
* Axios
* Tailwind CSS / UI Components

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Payment Integration

* Stripe (Demo Payment)

---

## 🔗 Project Structure

```
Bookstore/
│
├── Bookstorefrontend/   # React frontend
├── Bookstorebackend/    # Node.js backend
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Jinet-123/Bookstorefrontend
git clone https://github.com/Jinet-123/Bookstorebackend
```

---

### 2. Setup Backend

```
cd Bookstorebackend
npm install
npm start
```

---

### 3. Setup Frontend

```
cd Bookstorefrontend
npm install
npm start
```

---

### 4. Environment Variables

Create a `.env` file in the backend and add:

```
MONGO_URI=mongodb+srv://jinet:jinetkl@cluster0.i2o2x.mongodb.net/Bookstore?appName=Cluster0
STRIPE_SECRET_KEY=pk_test_51ScgVUAtPzzowVVGVk0YyXaf7AppgzfERQTt72lYwxrvBAfyrPemnYxSDnR1L0uETiC7zjEh4iwOhCowAonX3BDH00olrAlljh
```

---

## 🔄 Application Flow

1. User interacts with the frontend UI
2. Frontend sends API requests to backend
3. Backend processes requests and interacts with database
4. Admin approves submitted books
5. Approved books are displayed on the homepage
6. Stripe handles demo payment transactions

---

## 📌 Key Highlights

* Full-stack MERN application
* Role-based functionality (User & Admin)
* Real-world features like payment and approval system
* Clean and scalable architecture
* Practical implementation of Context API

---

## 📈 Future Enhancements

* 🛒 Add cart and order history
* 🔐 Authentication & authorization improvements
* 📱 Mobile responsiveness enhancements
* ⭐ Ratings and reviews system

---

## 👨‍💻 Author

Developed by **Jinet KL**

---

## 📄 License

This project is for educational and demonstration purposes.

---
