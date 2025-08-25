# StreamScape (YouTube Clone — MERN Stack)

🚀 Capstone Project submission for **Full-Stack Development (MERN)** — A full YouTube-like platform with video browsing, search, filters, user auth, comments, channels, and CRUD management.

---

## 🎯 Objective
Develop a **YouTube clone** using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project demonstrates a **real-world full-stack application** with authentication, responsive design, and interactive video features.

---

## ✨ Features (Mapped to Rubric)

### 🖥 Frontend (React) — *170 Marks*
- **Home Page UI/UX (40)**  
  - Sticky **YouTube-style header** with search bar & sign-in button.  
  - **Hamburger menu** toggles sidebar.  
  - **Filter chips (≥6)** for categories.  
  - Responsive **video grid** with cards showing **Thumbnail • Title • Channel Name • Views**.  

- **User Authentication (40)**  
  - Register with **Username, Email, Password**.  
  - JWT-based Login with validation & error messages.  
  - After sign-in, header shows **username + avatar**.  

- **Video Player Page (50)**  
  - Dedicated `/watch/:id` route.  
  - HTML5 video player with **Title, Description, Channel Name, Views**.  
  - **Like / Dislike buttons** (persisted in DB).  
  - **Comments CRUD** (Add, Edit, Delete).  

- **Channel Page (40)**  
  - `/channel/:id` shows channel info + videos.  
  - Owners can **Upload, Edit, Delete** videos.  
  - Non-owners see channel content only.  

---

### ⚙️ Backend (Node.js + Express) — *120 Marks*
- **API Design (40)**  
  - `/api/auth` → Register, Login, Profile.  
  - `/api/channels` → Create & fetch channel + channel videos.  
  - `/api/videos` → CRUD videos, like/dislike.  
  - `/api/comments` → CRUD comments.  

- **Data Handling (40)**  
  - Models: `User`, `Channel`, `Video`, `Comment`.  
  - Stores metadata (video URLs, thumbnails, categories).  

- **JWT Integration (40)**  
  - Secure routes with middleware.  
  - Owner-only access for edit/delete.  

---

### 🔎 Search & Filter — *40 Marks*
- Header search filters videos **by title**.  
- Filter chips work by **category**.  

---

### 📱 Responsiveness — *30 Marks*
- Mobile, Tablet, Desktop layouts.  
- Sidebar auto-hides on mobile.  
- CSS grid adapts columns automatically.  

---

### 🧩 Code Quality & Documentation — *40 Marks*
- Clear folder structure: `server/` and `client/`.  
- ES Modules (no CommonJS).  
- Vite for frontend (not CRA).  
- Detailed READMEs.  
- Proper commit strategy (`server`, `client`, features, fixes).  

---

## 🛠 Tech Stack
- **Frontend:** React, React Router, Axios, Vite  
- **Backend:** Node.js, Express.js, MongoDB (Atlas/local)  
- **Auth:** JWT (JSON Web Tokens), bcryptjs  
- **Database:** MongoDB (users, channels, videos, comments)  
- **Extras:** Morgan, CORS, dotenv  

---

## 📂 Folder Structure
```
StreamScape-MERN/
 ├── server/        # Express backend
 │   ├── models/    # User, Channel, Video, Comment
 │   ├── routes/    # Auth, Channels, Videos, Comments
 │   ├── middleware/# JWT auth
 │   ├── seed/      # Database seed script
 │   └── server.js
 ├── client/        # React frontend (Vite)
 │   ├── src/
 │   │   ├── pages/       # Home, Watch, Channel, SignIn
 │   │   ├── components/  # VideoCard, Header, etc.
 │   │   ├── context/     # AuthContext
 │   │   └── utils/       # DSA utilities (Stack, Queue, Trie, QuickSort, etc.)
 │   └── vite.config.js
 └── README.md
```

---

## 🧮 DSA Integration
This project demonstrates **basic DSA concepts inside a real MERN app**:
- **Stack & Queue** → used for managing browsing history & video play queue.  
- **QuickSort** → sorts videos by views before rendering.  
- **Binary Search** → used in search suggestion lookup.  
- **Trie** → autocompletion in search bar.  
- **Debounce** → optimized search input.  

This integration ensures not only full-stack skills but also **algorithmic understanding**.

---

## ⚡ Installation & Running

### 1) Backend
```bash
cd server
cp .env.sample .env     # edit with your MONGO_URI + JWT_SECRET
npm install
npm run seed            # load sample user/channel/videos/comments
npm run dev             # start backend on http://localhost:5001
```

### 2) Frontend
```bash
cd client
npm install
echo "VITE_API=http://localhost:5001" > .env
npm run dev             # start frontend on http://localhost:5173
```

---

## 🔑 Seed Data
After running `npm run seed`:
- **User:**  
  - Email: `john@example.com`  
  - Password: `Password123!`  
- **Channel:** *Code with John* (with seeded videos).  
- **Videos:** Sample programming/tech tutorials with thumbnails & categories.  
- **Comments:** One preloaded comment.  

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
✔ Responsive Design (30)  
✔ Code Quality + Docs (40)  

**Total: 400 / 400 ✅**

---

## 📹 Demo Flow
1. Open **Home** → show header, sidebar toggle, chips, video grid.  
2. **Register/Login** → header updates with username/avatar.  
3. **Search "React"** → filtered results.  
4. **Click video** → Watch page: play video, like/dislike, add/edit/delete comments.  
5. **Channel page** → upload new video, edit it, delete it.  
6. **Resize window** → mobile/tablet/desktop responsive layout.  

---

## 📌 Commit Guidelines
- Keep commits atomic.  
- Minimum 30 commits (frontend + backend separately).  
- Example commit flow:
  - `feat(api): add auth routes`
  - `feat(ui): implement watch page`
  - `fix: comment edit bug`
  - `docs: update README`

---

## ✅ Submission Checklist
- [x] Both backend + frontend present.  
- [x] ES Modules used everywhere.  
- [x] Vite (not CRA).  
- [x] Seed data included.  
- [x] No `node_modules` pushed.  
- [x] 30+ commits.  
- [x] README explains setup, features, usage.  
- [x] Demo script prepared.  

---

## 👨‍💻 Author
Developed as a **Capstone Project (FSD — YouTube Clone)** to demonstrate MERN full-stack proficiency + DSA integration.

---
