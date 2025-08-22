# Users API

A simple **RESTful API** built with **Node.js + Express** for managing users, with middleware, error handling, and extra DSA endpoints.

---

## 🚀 Features

- **CRUD for Users**

  - `GET /users` → Fetch all users
  - `GET /users/:id` → Fetch a single user by ID
  - `POST /user` → Add a new user
  - `PUT /user/:id` → Update an existing user
  - `DELETE /user/:id` → Delete a user

- **Middleware**

  - Request logger (method, URL, status, response time)
  - Input validator (checks `id`, `firstName`, `lastName`, `hobby` for POST/PUT)

- **Error Handling**

  - 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 409 Conflict
  - Central error handler with descriptive JSON error messages

- **Data Source**

  - In-memory `users` array (resets on restart)

- **DSA Endpoints**

  - `POST /dsa/linear-search` → finds index of target in array
  - `POST /dsa/bubble-sort` → sorts array in ascending order

- **Home Page**
  - `GET /` → Returns clickable API documentation links

---

## 📦 Project Setup

```bash
# Install dependencies
npm install

# Start server
npm start

# Start with auto-reload (dev mode)
npm run dev
```

Server runs on: **[http://localhost:3000](http://localhost:3000)**

---

## 📂 File Structure

```
users-api/
├── src/
│   └── index.js        # Express app with routes + middleware + DSA
├── package.json        # Dependencies + scripts
├── README.md           # Project documentation (this file)
├── SCREENSHOTS.md      # Paste Postman/Thunder test results here
└── postman_collection.json # Importable Postman collection
```

--- 

## 📖 Sample User Object

```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

---

## 📊 Rubric Mapping

- **Initialize project** → ✅ `package.json`, Express installed
- **Routes** → ✅ CRUD + tested
- **Middleware** → ✅ Logger + Validator
- **Error handling** → ✅ 200/201/400/404/409 codes
- **Data source** → ✅ In-memory users array
- **Submission** → ✅ Comments, Screenshots, README

---

## 💡 Note

- Only `GET` endpoints can be clicked in the browser.
- Use **Postman/Thunder Client** to test `POST`, `PUT`, `DELETE`.
- Data is reset when server restarts (in-memory).

---

✍️ **Author:** RAJITHLINGAM
📅 **Date:** 22-Aug-2025

---
