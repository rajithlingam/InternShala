
# 🛒 ShoppyGlobe - E-commerce Application

ShoppyGlobe is a **React + Redux + TailwindCSS** based e-commerce application built as a project.  
It implements product browsing, cart management, search, routing, shimmer UI, and responsive design.
---

## 📹 Demo / Screencast

> 🎥 Add your demo GIF or video here once recorded.  
Record a short screencast showing:
- Browsing products
- Viewing a product detail
- Adding/removing items in cart
- Checkout flow
- Responsive (mobile/desktop) view

Example placeholder (replace with your own):

(shoppyglobe.mp4 Demo video)[https://github.com/rajithlingam/InternShala/raw/refs/heads/main/projectS/REACT.JS/shoppyglobe/shoppyglobe.mp4]

---

## ✨ Features

- 📦 Product List fetched from [DummyJSON API](https://dummyjson.com/products)  
- 🔎 Product search & filtering  
- 🛍️ Product Detail page with dynamic routing  
- 🛒 Cart management with add/remove/update using **Redux Toolkit**  
- 🎨 **Shimmer UI (Skeleton loaders)** for list & detail pages  
- ⚡ Lazy loading with `React.lazy` + `Suspense`  
- 📱 **Responsive, mobile-first design** (TailwindCSS)  
- 🚫 404 page for unknown routes  
- ✅ Error handling for API fetch failures  

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/) (Vite)  
- [Redux Toolkit](https://redux-toolkit.js.org/)  
- [React Router v7](https://reactrouter.com/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [DummyJSON API](https://dummyjson.com/)  

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/shoppyglobe.git
cd shoppyglobe
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App will be live at [http://localhost:5173](http://localhost:5173).

---

## 📂 Folder Structure

```
src/
  App.jsx
  main.jsx
  index.css
  components/
    Header.jsx
    NotFound.jsx
    ProductItem.jsx
    ProductList.jsx
    CartItem.jsx
    shimmer/
      ProductCardSkeleton.jsx
      ProductDetailSkeleton.jsx
      CartItemSkeleton.jsx
    ui/
      Skeleton.jsx
  pages/
    Home.jsx
    ProductDetail.jsx
    Cart.jsx
    Checkout.jsx
  redux/
    store.js
    cartSlice.js
  hooks/
    useFetchProducts.js
```

---

## 🚀 Performance Optimizations

* Code splitting with **React.lazy**
* Suspense fallback with shimmer loaders
* Redux selectors for efficient re-renders

---

## 👨‍💻 Author

**RAJITHLINGAM ANBUMANI**
---

## 📜 License

This project is licensed for educational purposes.

---