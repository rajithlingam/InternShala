# ShoppyGlobe API (Full Marks + DSA)

This is the backend for the **ShoppyGlobe E-commerce Application**, built with **Node.js, Express.js, MongoDB, and JWT Authentication**.  
Additionally, it includes **Basic DSA APIs (Linear Search & Bubble Sort)** to showcase problem-solving integration.

---

## 🚀 Features
- **User Authentication**
  - `POST /register` → Register a new user
  - `POST /login` → Authenticate and receive a JWT token
- **Products API**
  - `GET /products` → Get all products
  - `GET /products/:id` → Get details of a single product
- **Cart API (JWT Protected)**
  - `GET /cart` → Get logged-in user’s cart
  - `POST /cart` → Add product to cart
  - `PUT /cart/:itemId` → Update product quantity
  - `DELETE /cart/:itemId` → Remove product from cart
- **DSA API**
  - `POST /dsa/linear-search` → Perform linear search
  - `POST /dsa/bubble-sort` → Perform bubble sort
- **Error Handling & Validation**
- **MongoDB Integration**
- **Thunder Client Tested**

---

## 🛠 Tech Stack
- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Thunder Client (API Testing)  

---

## 📂 Project Structure

```
shoppyglobe-api/
│── src/
│   ├── routes/        # Route handlers
│   ├── controllers/   # Business logic
│   ├── models/        # Mongoose schemas
│   ├── middleware/    # Error handling & JWT auth
│   ├── utils/         # Database connection
│   ├── server.js      # Entry point
│   └── app.js         # Express app
│── .env.example       # Example environment file
│── package.json
│── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository & install dependencies
```bash
git clone <your-repo-url>
cd shoppyglobe-api
npm install
````

### 2️⃣ Configure environment

Create a `.env` file in the root directory (based on `.env.example`):

```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=your_secret_key
```

### 3️⃣ Seed the database with products

```bash
npm run seed
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Server will run at → **[http://localhost:4000](http://localhost:4000)**

---

## 📌 API Endpoints

### 🔑 Auth

* **POST** `/register` → Register new user
* **POST** `/login` → Login & receive JWT

### 🛒 Products

* **GET** `/products` → Get all products
* **GET** `/products/:id` → Get single product details

### 🛍 Cart (JWT Protected)

* **GET** `/cart` → Get user’s cart
* **POST** `/cart` → Add product to cart
* **PUT** `/cart/:itemId` → Update cart item quantity
* **DELETE** `/cart/:itemId` → Remove cart item

### 📘 DSA APIs

* **POST** `/dsa/linear-search`

  ```json
  { "array": [5, 3, 9, 1, 3], "target": 9 }
  ```

  → `{ "index": 2 }`

* **POST** `/dsa/bubble-sort`

  ```json
  { "array": [5, 3, 9, 1, 3] }
  ```

  → `{ "sorted": [1, 3, 3, 5, 9] }`

---

## ✅ Testing with Thunder Client

1. Install the **Thunder Client extension** in VS Code.
2. Create requests for each route (Auth, Products, Cart, DSA).
3. Use `Bearer Token` authentication for cart routes (token from `/login`).
4. Verify responses & take screenshots.
5. Attach screenshots in submission document.

---

## 👨‍💻 Author

RAJITHLINGAM

---