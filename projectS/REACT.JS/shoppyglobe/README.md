# 📦 ShoppyGlobe — Dynamic Product Filter, Cart & Product Details

ShoppyGlobe is a **mobile-first e-commerce mini-application** built with  
**React + Vite + TailwindCSS + Redux Toolkit + React Router**.

Users can browse products, filter by category, search items, view full product details, add/remove items from cart, and place an order with a success animation.

This project is inspired by my **FoodMall** architecture.

---

## 🚀 Features

### 🛒 Product Listing  
- Fetches products from **DummyJSON API**  
- Product card shows image, title, price  
- Add to Cart button  
- Fully responsive mobile-first layout  

### 🔍 Search & Category Filtering  
- Auto-generated categories from product data  
- “All” category included  
- Real-time search across title + description  
- Scrollable category pills on mobile  

### 🛍 Shopping Cart  
- Add, Remove, Increase quantity  
- Clear entire cart  
- Shows quantity & calculated price  
- Mobile-first responsive cart  
- Sidebar cart on desktop, inline on mobile  

### 🎉 Order Placement Flow  
- “Place your favourite order” button  
- Plays a success animation video  
  - Located at: `src/assets/Order_Placed_Success.mp4`  
- Video plays centered at **13% viewport height**  
- Cart is automatically cleared after order success  

### 📄 Product Details Page  
- Route: `/product/:id`  
- Loads full product info (image, brand, category, rating, stock, description)  
- Shimmer UI while fetching  
- Add to cart from product details  
- Fully responsive design  

### 🎨 UI / UX  
- TailwindCSS  
- Shimmer loading components  
- Modern shadows, spacing, layout  
- All interactions mobile-friendly  
- Smooth lazy-loading with Suspense  

---

## 🛠 Tech Stack

- **React 18**
- **Vite**
- **TailwindCSS**
- **Redux Toolkit**
- **React Router DOM**
- **DummyJSON Products API**

---

## 📂 Folder Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 ├── assets/
 │    └── Order_Placed_Success.mp4
 │
 ├── pages/
 │    ├── Home.jsx
 │    └── ProductDetail.jsx
 │
 ├── components/
 │    ├── Header.jsx
 │    ├── ProductList.jsx
 │    ├── ProductItem.jsx
 │    ├── Cart.jsx
 │    ├── NotFound.jsx
 │    └── ui/
 │         └── Shimmer.jsx
 │
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

### 4️⃣ Preview the production build
```bash
npm run preview
```

---

## 🌐 API Used

```
https://dummyjson.com/products
```

---
