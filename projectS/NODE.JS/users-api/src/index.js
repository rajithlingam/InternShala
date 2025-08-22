// RESTful Users API — Full Marks Solution + Basic DSA
// ============================================================
// - Routing for users (per assignment)
// - Middleware: request logger + body validation (POST/PUT)
// - Error handling with proper HTTP status codes
// - In-memory data source (array)
// - Two extra DSA endpoints (linear search, bubble sort)
// ============================================================

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------- In-memory Data Source ---------------------
// NOTE: This resets on every server restart (assignment requires in-memory).
let users = [
  // Seeded sample user (matches provided structure)
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
];

// Root "playground" — clickable GET links + forms for POST/PUT/DELETE + DSA
app.get("/", (req, res) => {
  res.type("html").send(`
    <h1>Users API (Full Marks + DSA)</h1>
    <h3>Quick GET links</h3>
    <ul>
      <li><a href="/health">GET /health</a></li>
      <li><a href="/users">GET /users</a></li>
      <li><a href="/users/1">GET /users/:id</a></li>
    </ul>

    <h3>POST /user</h3>
    <form onsubmit="postUser(event)">
      <input name="id" placeholder="id" required />
      <input name="firstName" placeholder="firstName" required />
      <input name="lastName" placeholder="lastName" required />
      <input name="hobby" placeholder="hobby" required />
      <button type="submit">Create</button>
    </form>

    <h3>PUT /user/:id</h3>
    <form onsubmit="putUser(event)">
      <input name="id" placeholder="id to update" required />
      <input name="firstName" placeholder="firstName" required />
      <input name="lastName" placeholder="lastName" required />
      <input name="hobby" placeholder="hobby" required />
      <button type="submit">Update</button>
    </form>

    <h3>DELETE /user/:id</h3>
    <form onsubmit="deleteUser(event)">
      <input name="id" placeholder="id to delete" required />
      <button type="submit">Delete</button>
    </form>

    <h3>DSA</h3>
    <form onsubmit="linearSearch(event)">
      <label>POST /dsa/linear-search — array (comma-separated) & target</label><br/>
      <input name="arr" placeholder="e.g. 5,3,9,1,3" required />
      <input name="target" placeholder="target e.g. 9" required />
      <button type="submit">Run Linear Search</button>
    </form>

    <form onsubmit="bubbleSort(event)">
      <label>POST /dsa/bubble-sort — array (comma-separated)</label><br/>
      <input name="arr" placeholder="e.g. 5,3,9,1,3" required />
      <button type="submit">Run Bubble Sort</button>
    </form>

    <pre id="out" style="background:#111;color:#0f0;padding:12px;white-space:pre-wrap;"></pre>

    <script>
      const out = document.getElementById('out');
      function show(obj){ out.textContent = JSON.stringify(obj, null, 2); }

      async function postUser(e){
        e.preventDefault();
        const f = e.target;
        const body = {
          id: f.id.value.trim(),
          firstName: f.firstName.value.trim(),
          lastName: f.lastName.value.trim(),
          hobby: f.hobby.value.trim()
        };
        const r = await fetch('/user', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
        show(await r.json());
      }

      async function putUser(e){
        e.preventDefault();
        const f = e.target;
        const id = f.id.value.trim();
        const body = {
          firstName: f.firstName.value.trim(),
          lastName: f.lastName.value.trim(),
          hobby: f.hobby.value.trim()
        };
        const r = await fetch('/user/' + encodeURIComponent(id), { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
        show(await r.json());
      }

      async function deleteUser(e){
        e.preventDefault();
        const f = e.target;
        const id = f.id.value.trim();
        const r = await fetch('/user/' + encodeURIComponent(id), { method:'DELETE' });
        show(await r.json());
      }

      async function linearSearch(e){
        e.preventDefault();
        const f = e.target;
        const array = f.arr.value.split(',').map(x=>Number(x.trim()));
        const target = Number(f.target.value);
        const r = await fetch('/dsa/linear-search', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ array, target }) });
        show(await r.json());
      }

      async function bubbleSort(e){
        e.preventDefault();
        const f = e.target;
        const array = f.arr.value.split(',').map(x=>Number(x.trim()));
        const r = await fetch('/dsa/bubble-sort', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ array }) });
        show(await r.json());
      }
    </script>

    <p style="margin-top:12px;color:#666">
      Note: Only the GET links above open directly. Other methods use fetch() via the forms.
    </p>
  `);
});

// --------------- Core Middlewares ---------------------------
app.use(express.json()); // parse JSON bodies

// Request logger: logs method, URL, HTTP status code, and response time
app.use((req, res, next) => {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1e6;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${
        res.statusCode
      } (${ms.toFixed(1)} ms)`
    );
  });
  next();
});

// --------------- Validation Helpers -------------------------
const has = (v) => v !== undefined && v !== null && String(v).trim() !== "";

// Validate for POST /user (all fields required)
function validateCreateUser(req, res, next) {
  const { id, firstName, lastName, hobby } = req.body || {};
  const missing = [];
  if (!has(id)) missing.push("id");
  if (!has(firstName)) missing.push("firstName");
  if (!has(lastName)) missing.push("lastName");
  if (!has(hobby)) missing.push("hobby");
  if (missing.length) {
    return res.status(400).json({ error: "Missing required fields", missing });
  }
  next();
}

// Validate for PUT /user/:id (fields required except id)
function validateUpdateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body || {};
  const missing = [];
  if (!has(firstName)) missing.push("firstName");
  if (!has(lastName)) missing.push("lastName");
  if (!has(hobby)) missing.push("hobby");
  if (missing.length) {
    return res.status(400).json({ error: "Missing required fields", missing });
  }
  next();
}

// --------------- Small Utilities ----------------------------
const findUserById = (id) => users.find((u) => u.id === String(id));

// Health check (handy during development)
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

// ----------------- Routes (Required) ------------------------

// GET /users – Fetch the list of all users.
app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

// GET /users/:id – Fetch details of a specific user by ID.
app.get("/users/:id", (req, res) => {
  const user = findUserById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.status(200).json(user);
});

// POST /user – Add a new user. Requires id, firstName, lastName, hobby.
app.post("/user", validateCreateUser, (req, res) => {
  const { id, firstName, lastName, hobby } = req.body;
  if (findUserById(id)) {
    return res.status(409).json({ error: "User with this id already exists" });
  }
  const user = { id: String(id), firstName, lastName, hobby };
  users.push(user);
  return res.status(201).json(user);
});

// PUT /user/:id – Update details of an existing user.
app.put("/user/:id", validateUpdateUser, (req, res) => {
  const user = findUserById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  const { firstName, lastName, hobby } = req.body;
  user.firstName = firstName;
  user.lastName = lastName;
  user.hobby = hobby;
  return res.status(200).json(user);
});

// DELETE /user/:id – Delete a user by ID.
app.delete("/user/:id", (req, res) => {
  const idx = users.findIndex((u) => u.id === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "User not found" });
  const removed = users.splice(idx, 1)[0];
  return res.status(200).json({ message: "User deleted", user: removed });
});

// ------------------ DSA Bonus Endpoints ---------------------

// Linear Search — O(n)
app.post("/dsa/linear-search", (req, res) => {
  const { array, target } = req.body || {};
  if (!Array.isArray(array))
    return res.status(400).json({ error: "array must be an array" });
  let index = -1;
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) {
      index = i;
      break;
    }
  }
  return res.status(200).json({ index, steps });
});

// Bubble Sort — O(n^2)
app.post("/dsa/bubble-sort", (req, res) => {
  const { array } = req.body || {};
  if (!Array.isArray(array))
    return res.status(400).json({ error: "array must be an array" });
  const arr = array.slice();
  let swaps = 0;
  for (let n = arr.length; n > 1; n--) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps++;
      }
    }
  }
  return res.status(200).json({ sorted: arr, swaps });
});

// ------------------ Error Handling --------------------------
// 404 for unknown routes
app.use((req, res) =>
  res
    .status(404)
    .json({ error: `Route ${req.method} ${req.originalUrl} not found` })
);

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  if (res.headersSent) return next(err);
  return res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// ------------------ Server Start ----------------------------
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
