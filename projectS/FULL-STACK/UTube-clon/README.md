# uTube (YouTube Clone — MERN Stack)

🚀 Capstone Project submission for **Full-Stack Development (MERN)** — A full YouTube-like platform with video browsing, search, filters, user auth, comments, channels, and CRUD management.

---

## ✨ Features (Mapped to Rubric)

### 🖥 Frontend (React)

- **Home Page UI/UX**

  - Sticky **YouTube-style header** with search bar & sign-in button.
  - **Hamburger menu** toggles sidebar.
  - **Filter chips (≥6)** for categories.
  - Responsive **video grid** with cards showing **Thumbnail • Title • Channel Name • Views**.

- **User Authentication**

  - Register with **Username, Email, Password**.
  - JWT-based Login with validation & error messages.
  - After sign-in, header shows **username + avatar**.

- **Video Player Page**

  - Dedicated `/watch/:id` route.
  - HTML5 video player with **Title, Description, Channel Name, Views**.
  - **Like / Dislike buttons** (persisted in DB).
  - **Comments CRUD** (Add, Edit, Delete).

- **Channel Page**
  - `/channel/:id` shows channel info + videos.
  - Owners can **Upload, Edit, Delete** videos.
  - Non-owners see channel content only.

---

### ⚙️ Backend (Node.js + Express)

- **API Design**

  - `/api/auth` → Register, Login, Profile.
  - `/api/channels` → Create & fetch channel + channel videos.
  - `/api/videos` → CRUD videos, like/dislike.
  - `/api/comments` → CRUD comments.

- **Data Handling**

  - Models: `User`, `Channel`, `Video`, `Comment`.
  - Stores metadata (video URLs, thumbnails, categories).

- **JWT Integration**
  - Secure routes with middleware.
  - Owner-only access for edit/delete.

---

### 🔎 Search & Filter

- Header search filters videos **by title**.
- Filter chips work by **category**.

---

### 📱 Responsiveness

- Mobile, Tablet, Desktop layouts.
- Sidebar auto-hides on mobile.
- CSS grid adapts columns automatically.

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
uTube-MERN/
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
- **Channel:** _Code with John_ (with seeded videos).
- **Videos:** Sample programming/tech tutorials with thumbnails & categories.
- **Comments:** One preloaded comment.

---

## 📹 Demo Flow

1. Open **Home** → show header, sidebar toggle, chips, video grid.
2. **Register/Login** → header updates with username/avatar.
3. **Search "React"** → filtered results.
4. **Click video** → Watch page: play video, like/dislike, add/edit/delete comments.
5. **Channel page** → upload new video, edit it, delete it.
6. **Resize window** → mobile/tablet/desktop responsive layout.

---

## 👨‍💻 Author

## RAJITHLINGAM ANBUMANI.
