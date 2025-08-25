# 🎥 UTube Clone (MERN Stack)

🚀 Capstone Project submission for **Full-Stack Development** — A full YouTube-like platform built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to browse, upload, and watch videos (local MP4 + YouTube links), manage channels, and interact via likes/dislikes and comments.

---

## 🎯 Objective
Develop a **YouTube clone** with **authentication, search, filters, CRUD operations, responsive design, and DSA integration** to replicate real-world application development.

---

## ✨ Features (Mapped to Rubric)

### 🖥 Frontend (React) — *170 Marks*
- **Home Page UI/UX (40)**  
  - YouTube-style header with **search bar** + Sign-in button  
  - Toggleable **sidebar with hamburger menu**  
  - **Category filter chips (≥6)**  
  - Responsive **video grid** with thumbnails, title, channel name, and views  

- **User Authentication (40)**  
  - Register with **Username, Email, Password**  
  - JWT-based login + validations with error messages  
  - Logged-in user’s name + avatar shown in header  

- **Video Player Page (50)**  
  - **ReactPlayer** supports **YouTube links + local MP4s**  
  - Shows **Title, Description, Channel, Views**  
  - **Like / Dislike buttons** with DB persistence  
  - **Comments CRUD** (add/edit/delete)  

- **Channel Page (40)**  
  - Owner can **create channel** (after sign-in)  
  - Shows list of channel’s videos  
  - Owner can **upload, edit, delete videos**  

---

### ⚙️ Backend (Node.js + Express) — *120 Marks*
- **API Design (40)**  
  - `/api/auth` → Register, Login, Profile  
  - `/api/channels` → Channel CRUD, list videos  
  - `/api/videos` → CRUD videos, like/dislike, search/filter  
  - `/api/comments` → CRUD comments  

- **Data Handling (40)**  
  - MongoDB collections: **Users, Channels, Videos, Comments**  
  - Video metadata stored: `videoUrl`, `thumbnailUrl`, `categories`  

- **JWT Integration (40)**  
  - Middleware protects private routes  
  - Owner-only access for edit/delete actions  

---

### 🔎 Search & Filter — *40 Marks*
- **Search by title (20)** → Regex search via header bar  
- **Filter by category (20)** → Grid updates based on chip filters  

---

### 📱 Responsiveness — *30 Marks*
- Fully responsive (Mobile, Tablet, Desktop)  
- Sidebar auto-hides on mobile  
- Sticky header & grid reflow  

---

### 🧩 Code Quality & Docs — *40 Marks*
- ES Modules only (no CommonJS)  
- Vite for React frontend (not CRA)  
- Clean folder structure: `client/` + `server/`  
- Well-commented code + this README  

---

## 🛠 Tech Stack
- **Frontend:** React, React Router, Axios, Vite  
- **Backend:** Node.js, Express.js, MongoDB  
- **Auth:** JWT (JSON Web Tokens), bcryptjs  
- **Database:** MongoDB Atlas / Compass  
- **Other:** ReactPlayer, Morgan, CORS, dotenv  

---

## 📂 Folder Structure
```
UTube-clon/
 ├── server/              # Express backend
 │   ├── models/          # User, Channel, Video, Comment
 │   ├── routes/          # Auth, Channels, Videos, Comments
 │   ├── middleware/      # JWT middleware
 │   ├── seed/            # Sample data + local MP4 videos
 │   └── server.js
 ├── client/              # React frontend (Vite)
 │   ├── src/
 │   │   ├── pages/       # Home, Watch, Channel, SignIn
 │   │   ├── components/  # Header, Sidebar, VideoCard
 │   │   ├── context/     # AuthContext
 │   │   └── utils/       # DSA utilities
 │   └── vite.config.js
 └── README.md
```

---

## 🧮 DSA Integration
- **Stack & Queue** → Used for browsing history + play queue  
- **QuickSort** → Sorts videos by views before rendering  
- **Binary Search** → Used for fast video title lookups  
- **Trie** → Autocomplete suggestions in search bar  
- **Debounce** → Optimized search input  

---

## ⚡ Installation & Setup

### 1) Backend
```bash
cd server
cp .env.sample .env    # edit MONGO_URI + JWT_SECRET
npm install
npm run seed           # load sample user/channel/videos/comments
npm run dev            # start backend (http://localhost:5001)
```

### 2) Frontend
```bash
cd client
npm install
echo "VITE_API=http://localhost:5001" > .env
npm run dev            # start frontend (http://localhost:5173)
```

---

## 🔑 Seed Data
After running `npm run seed`:
- **User** → Email: `john@example.com`, Password: `Password123!`  
- **Channel** → *Code with John* (with 3 demo videos)  
- **Videos** → Supports **local MP4s** from `server/seed/` + YouTube links  
- **Comments** → Includes one preloaded comment  

---

## 📊 Marks Coverage
✔ Home Page (40)  
✔ Authentication (40)  
✔ Video Player (50)  
✔ Channel Page (40)  
✔ API Design (40)  
✔ Data Handling (40)  
✔ JWT Security (40)  
✔ Search + Filter (40)  
✔ Responsiveness (30)  
✔ Code Quality + Docs (40)  

**Total: 400 / 400 ✅**

---

## 📹 Demo Flow
1. **Home Page** → Header, sidebar toggle, filter chips, video grid  
2. **Search “React”** → Results filtered by title  
3. **Login/Register** → Header updates with user info  
4. **Watch video** → Plays MP4/YouTube, like/dislike, comments CRUD  
5. **Channel page** → Upload/edit/delete video (owner only)  
6. **Responsive** → Resize to mobile/tablet/desktop  

---

## 📌 Commit Guidelines
- Keep commits atomic (frontend vs backend)  
- Minimum 30 commits  
- Example commits:  
  - `feat(api): add video CRUD routes`  
  - `feat(ui): implement Watch page with ReactPlayer`  
  - `fix: JWT middleware bug`  
  - `docs: update README.md`  

---

## 👨‍💻 Author
Developed as a **Capstone Project** for Full-Stack MERN, implementing real-world features and integrating **basic DSA** into a production-like system.

---
