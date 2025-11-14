# Online Library (React + Redux + Router + Tailwind)

A polished online library app built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**.  
Demo-ready with an initial dataset, responsive carousels, search & filter, add-book form, and graceful image fallbacks.

---

## 🚀 Key Features
- Browse books by category (horizontal category carousel)  
- Search books by title or author (live filtering)  
- Book details page with cover, metadata, and description  
- Add new books via a validated form (title, author, category, rating)  
- Redux state management (`booksSlice`) for global book list  
- Image fallback handling (prevents broken images)  
- Keyboard-friendly carousels and accessible UI patterns  
- Responsive layout for mobile → desktop

---

## 📁 Project Structure
/online-library  
├─ public/  
│  └─ index.html  
├─ package.json  
├─ src/  
│  ├─ main.jsx  
│  ├─ App.jsx  
│  ├─ index.css (Tailwind + small custom styles)  
│  ├─ components/  
│  │  ├─ Navbar.jsx  
│  │  ├─ BookCard.jsx  
│  │  └─ ...  
│  ├─ pages/  
│  │  ├─ Home.jsx  
│  │  ├─ BrowseBooks.jsx  
│  │  ├─ BookDetails.jsx  
│  │  └─ AddBook.jsx  
│  ├─ redux/  
│  │  ├─ store.js  
│  │  └─ booksSlice.js  
│  └─ data/  
│     ├─ books.js (initialBooks)  
│     └─ categories.js  
└─ README.md

---

## 💻 Tech Stack
- React (v18+)  
- Redux Toolkit  
- React Router  
- Tailwind CSS  
- Build: Vite (recommended) or Create React App

---

## 🔧 Installation & Run
1. Install:
   npm install
2. Dev server (Vite):
   npm run dev
   (CRA: npm start)
3. Build:
   npm run build
4. Preview (Vite):
   npm run preview

---

## 🔍 Data Model
Book object:
- `id` (number|string)  
- `title` (string)  
- `author` (string)  
- `category` (string)  
- `description` (string)  
- `rating` (number 0–5)  
- `imageUrl` (string | optional)

Redux slice:
- initialState: `{ list: initialBooks }`  
- reducer: `addBook` pushes `{ id: Date.now(), ...payload }`

---

## 🧩 Component Responsibilities
- **Navbar.jsx** — App title, nav links, category dropdown, Add Book link  
- **BookCard.jsx** — cover, title, author, rating, fallback image logic, "View Details" link  
- **Home.jsx** — hero + popular carousel, jump to categories  
- **BrowseBooks.jsx** — search input, category select, responsive grid of `BookCard`s  
- **BookDetails.jsx** — full details, back link  
- **AddBook.jsx** — validated form, dispatch `addBook`, navigate to category

---

## ✅ UX & Accessibility
- Carousels: `scroll-snap-type`, keyboard support (ArrowLeft/ArrowRight), prev/next buttons  
- Image fallback: `onError` sets fallback once to avoid loops  
- Forms: inline validation and user-friendly error messages  
- Semantic HTML: `nav`, `main`, `section`, `form` and `aria-*` where needed  
- Focus states and color contrast checked for readability

---

## 🧠 Implementation Notes & Best Practices
- Memoize filtered lists using `useMemo` to avoid unnecessary recalculation.  
- Use `React.memo` for `BookCard` if prop changes are infrequent.  
- For unique IDs prefer `crypto.randomUUID()` with `Date.now()` fallback.  
- Functional updates for state derived from previous: `setState(prev => ...)`.  
- Debounce search input when dataset grows.

---

## 🔧 AddBook Validation Rules
- Required: `title`, `author`, `category`, `description`, `rating`  
- Rating: numeric `0 <= rating <= 5`  
- On success: dispatch `addBook({ ...form, rating: parseFloat(rating) })` and navigate to `/books/{category}`

---

## 🧪 Testing Suggestions
- Unit tests (Jest + RTL): `AddBook` validation, `BrowseBooks` filtering, `BookCard` fallback behavior  
- E2E (Cypress / Playwright): add-book → appears in browse and details, carousel interactions  
- Accessibility audits: axe-core or pa11y

---

## 📈 Roadmap & Enhancements
1. Persist data to backend (Firebase / REST) or localStorage for demo persistence  
2. Add user auth, favorites, reviews, and rating persistence  
3. Pagination or virtualization for large datasets (`react-window`)  
4. CSV import/export or admin bulk-upload  
5. Image optimization and CDN usage for production

---

## 🚀 Deployment
- Build and deploy to Vercel / Netlify / GitHub Pages  
- Build command: `npm run build`  
- Publish directory: `dist` (Vite) or `build` (CRA)

---

## 👨‍💻 Author & License
**Author:** Rajithlingam Anbumani  
