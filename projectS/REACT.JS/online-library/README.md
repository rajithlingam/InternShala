
# 📚 Online Library

An online library management system built with **React + Vite + Redux Toolkit**.  
Users can browse, view, and manage books with features like adding books, detailed view, and fallback image handling.

---

## ✨ Features
- 🔎 **Browse Books** – Search and explore available books  
- 📖 **Book Details** – View author, description, and cover image  
- ➕ **Add Book** – Add new books to the system  
- 🖼 **Fallback Image** – Displays a default image if book cover is missing or broken  
- 🧭 **Navigation** – Navbar with links to Home, Browse, and Add Book  
- ❌ **404 Page** – Friendly error page for unknown routes  
- ⚡ **Vite + React** for blazing-fast development  

---

## 🛠 Tech Stack
- **Frontend:** React, Vite, Redux Toolkit, TailwindCSS  
- **State Management:** Redux Toolkit  
- **Routing:** React Router DOM  

---

## 📂 Project Structure
```

online-library/
├── public/
│   └── images/
│       └── default-book.jpg   # fallback image
├── src/
│   ├── assets/                # static assets (React logo, etc.)
│   ├── components/            # reusable UI components (Navbar, BookCard, etc.)
│   ├── data/                  # static data (books.js, categories)
│   ├── pages/                 # pages (Home, BrowseBooks, BookDetails, AddBook, NotFound)
│   ├── redux/                 # state management with Redux Toolkit
│   ├── App.jsx                # main app component
│   └── main.jsx               # entry point
└── package.json

````

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/online-library.git
cd online-library
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## ​ Screencast

🎥 [Watch the demo video on GitHub](https://github.com/rajithlingam/InternShala/raw/refs/heads/main/projectS/REACT.JS/online-library/Online-library.mp4)

---

## 📌 Notes

* Place all fallback/public images inside the `public/images/` folder.
* Example usage in `BookCard.jsx`:

```jsx
<img
  src={book.coverImage || "/images/default-book.jpg"}
  alt={book.title}
  onError={(e) => { 
    e.target.onerror = null; 
    e.target.src = "/images/default-book.jpg"; 
  }}
/>
```

---

## 🧑‍💻 Author

Developed by **RAJITHLINGAM** ✨


---