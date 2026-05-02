# 🛒 Product Store

A full-stack **Product Store Web Application** built using **React, Node.js, Express.js, PostgreSQL, and Neon DB**.  
The project provides a responsive shopping interface with complete product management functionality including **CRUD operations**, real-time updates, backend API integration, and secure deployment.

---

# 🚀 Features

### 🖥️ Frontend Features
- Responsive UI built with React
- Dynamic product cards
- Product detail management page
- Toast notifications for better UX
- Theme switching using DaisyUI
- Dynamic basket counter
- Zustand-based state management
- Modular reusable React components

### ⚙️ Backend Features
- RESTful API using Express.js
- PostgreSQL database integration
- CRUD operations for product management
- Centralized route handling
- Controller-based backend architecture
- Environment-based configuration
- Database seeding support
- Rate limiting and token protection using Arcjet

### 🌐 Deployment
- Frontend and backend deployed on Render
- Cloud PostgreSQL database hosted on Neon

---

# 🧰 Tech Stack

## 🎨 Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3
- DaisyUI
- Zustand

## 🛠️ Backend
- Node.js
- Express.js
- PostgreSQL
- Neon DB

## 🔒 Security & Utilities
- Arcjet
- Toast Notifications

## ☁️ Deployment
- Render

---

# 📁 Project Structure

```bash
Product-Store/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── lib/
│   ├── routes/
│   ├── seeds/
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── shoppingcart.svg
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProductModal.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ThemeSelector.jsx
│   │   │
│   │   ├── constants/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── ProductPage.jsx
│   │   │
│   │   ├── store/
│   │   │   ├── useProductStore.js
│   │   │   └── useThemeStore.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚡ Core Functionalities

## ✅ Product Management
Users can:
- Add products
- Edit product details
- Delete products
- View products in real time

## ✅ Backend API Handling
The backend manages:
- API routing
- Database queries
- Request handling
- Product validation
- Error handling

## ✅ State Management
Implemented Zustand stores for:
- Product state management
- Theme persistence

## ✅ UI & User Experience
- Responsive layout
- Toast feedback notifications
- Theme customization
- Dynamic navigation updates

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
DATABASE_URL=your_neon_database_url
ARCJET_KEY=your_arcjet_key
```

---

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Product-Store.git
```

---

## 2️⃣ Navigate Into Project

```bash
cd Product-Store
```

---

## 3️⃣ Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# ▶️ Running the Application

## Start Backend Server

```bash
cd backend
npm run dev
```

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 🌍 Deployment

The application is deployed using **Render** with a cloud-hosted **PostgreSQL database via Neon**.

---

## 🏠 Home Page
Displays all products with:
- Product image
- Product name
- Product price

## ➕ Add Product Modal
Allows users to create new product entries dynamically.

## ✏️ Product Edit Page
Dedicated page for updating product information.

## 🎨 Theme Switching
Users can customize UI themes using DaisyUI.

---

# 🔮 Future Improvements

- User authentication
- Shopping cart functionality
- Product search & filters
- Admin dashboard
- Payment gateway integration
- Order management system

---
