# 📦 ShoppyGlobe — Dynamic Product Filter & Cart

A simple, mobile-first e-commerce mini-application built with **React + Vite + TailwindCSS + Redux Toolkit**.  
Users can browse products, filter by category, search items, and manage a fully functional shopping cart.

This project is inspired by my **FoodMall** project structure and created for the assignment **"Dynamic Product Filter & Cart"**.

---

## 🚀 Features

### 🛒 Product Listing  
- Fetches products from **DummyJSON API**  
- Shows product name, category, price, image  
- Add to Cart button  
- Mobile-first responsive card layout  

### 🔍 Search & Category Filtering  
- Auto-generated categories from API  
- Includes “All” category  
- Real-time search  
- Scrollable category pills on mobile  

### 🛍 Shopping Cart  
- Shows all added products  
- Quantity updates with **Add** button  
- Remove product  
- Clear entire cart  
- Dynamic total price calculation  

### 🎉 Order Placement Flow  
- Button: **“Place your favourite order”**  
- Plays success animation video → `src/assets/Order_Placed_Success.mp4`  
- Cart clears automatically after video ends  

### 📱 Fully Mobile-First UI  
- Cart becomes sidebar only on large screens  
- Smooth UI with Tailwind  
- Shimmer loading skeletons  

---

## 🛠 Tech Stack

- **React 18**  
- **Vite**  
- **Redux Toolkit**  
- **React Router DOM**  
- **TailwindCSS**  
- **DummyJSON API**

---

## 📂 Folder Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 ├── assets/
 │    └── Order_Placed_Success.mp4
 ├── pages/
 │    └── Home.jsx
 ├── components/
 │    ├── Header.jsx
 │    ├── ProductList.jsx
 │    ├── ProductItem.jsx
 │    ├── Cart.jsx
 │    ├── NotFound.jsx
 │    └── ui/
 │         └── Shimmer.jsx
 └── redux/
      ├── store.js
      └── cartSlice.js
```

---

## ▶️ Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start development server
```bash
npm run dev
```

### 3️⃣ Build production files
```bash
npm run build
```

### 4️⃣ Preview production build
```bash
npm run preview
```

---

## 🌐 API Used

```
https://dummyjson.com/products
```

---