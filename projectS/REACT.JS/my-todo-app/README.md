# Todo (React)

A modern, component-driven Todo application rebuilt from the original RL DOM ToDo.  
Built with React, small component surface, and clean CSS. Designed to be accessible, easy to extend, and production-ready.

---

## 🚀 Features (Detailed)
- **Add tasks** via a controlled textarea form.  
- **Task statuses**: `pending`, `done`, `not-done`. UI reflects state.  
- **Delete tasks** with a single click.  
- **Accessible form**: form `aria-label`, action buttons with `aria-label` attributes, and `aria-live` for updates.  
- **Responsive layout** (mobile → desktop).  
- **Component separation**: `Header`, `ToDoList`, `ToDoItem`.  
- **Clean UX**: keyboard-friendly focusable buttons and polite live region for new tasks.

---

## 📁 Project Structure (single-folder listing)
/react-todo  
├─ index.html  
├─ package.json  
├─ vite.config.js (or CRA config)  
├─ src/  
│  ├─ main.jsx  
│  ├─ App.jsx  
│  ├─ index.css  
│  ├─ components/  
│  │  ├─ Header.jsx  
│  │  ├─ ToDoList.jsx  
│  │  └─ ToDoItem.jsx  
│  └─ utils/ (optional)  
└─ public/ (static assets)

---

## 💻 Tech Stack
- React (v18+)  
- Plain CSS (keeps parity with original design) — easily swappable to Tailwind  
- Vite recommended for fast dev server, but CRA works as well

---

## 🔧 Installation & Run (one-shot)
1. Install dependencies: `npm install`  
2. Start dev server: `npm run dev`  (or `npm start` for CRA)  
3. Build for production: `npm run build`  
4. Preview production build (Vite): `npm run preview`  

> If using `create-react-app`, replace `dev` with `start`.

---

## 🧩 Component Overview

### `Header.jsx`
- Controlled textarea and submit form.
- Accepts `addTask` prop (function).
- Clears input on successful submit.
- Accessibility: `form` with `aria-label`, textarea has `id` and label (or placeholder).

### `ToDoList.jsx`
- Receives `tasks` array and action handlers: `markDone`, `markNotDone`, `deleteTask`.
- Renders message when no tasks (friendly hint).
- Wraps list with `section` and `aria-live="polite"` so screen readers announce updates.

### `ToDoItem.jsx`
- Renders a single task.
- Shows action buttons only when `task.status === "pending"`.
- Buttons use `aria-label` and are keyboard-focusable.
- Uses semantic roles where appropriate (e.g., `role="listitem"`).

---

## 🧠 State & Data Model
- Task shape (recommended):
  - `id` (string | number) — unique, e.g., `Date.now()` or `crypto.randomUUID()`  
  - `text` (string)  
  - `status` (`"pending" | "done" | "not-done"`)  
- Suggested initial state:
  - `const [tasks, setTasks] = useState([]);`
- Action handlers:
  - `addTask(text)` → push new task `{ id, text, status: 'pending' }`  
  - `markDone(id)` → set status to `'done'`  
  - `markNotDone(id)` → set status to `'not-done'`  
  - `deleteTask(id)` → remove task

---

## ♿ Accessibility Notes (important)
- Form has `aria-label` and meaningful `placeholder` fallback.  
- Buttons have `aria-label` describing the action (e.g., `aria-label="mark done"`).  
- List container uses `aria-live="polite"` to announce added tasks.  
- Use semantic HTML elements (`form`, `button`, `section`, `header`).  
- Ensure color contrast for status text (`.done` green and `.not-done` red should meet WCAG contrast).

---

## ✅ Example patterns (how to implement handlers)
- Add task:
  - Validate trimmed text: ignore empty input.  
  - Reset text input after adding.  
- Update status:
  - Use functional `setTasks(prev => prev.map(...))` to avoid stale closures.  
- Delete:
  - `setTasks(prev => prev.filter(t => t.id !== id))`

---

## 🧪 Testing & QA
- Manual tests:
  - Add tasks with long text (word-wrap should work).  
  - Keyboard navigation: Tab to textarea → type → Enter or Tab to Add button.  
  - Screen reader checks: confirm `aria-live` announces new item.  
- Unit tests (optional):
  - Use Jest + React Testing Library to test:
    - `Header` submits and clears input
    - `ToDoList` renders tasks based on state
    - `ToDoItem` calls handler on button clicks
- E2E (optional):
  - Playwright / Cypress: test add → status change → delete flow.

---

## 🔒 Deployment
- Build with `npm run build`.  
- Deploy static build to:
  - GitHub Pages, Netlify, Vercel, or any static host.  
- For GitHub Pages:
  - Add `homepage` in `package.json` (if using CRA) and follow GH Pages deploy steps.  
- For Vercel / Netlify:
  - Connect repo and set build command `npm run build`, publish `dist` or `build` folder.

---

## 📈 Possible Enhancements (prioritized)
1. **Persist to localStorage** — simplest persistence, auto-load on app start.  
2. **Edit task** — inline edit mode for a task item.  
3. **Filters & Search** — All / Pending / Done / Not Done, plus text search.  
4. **Animations** — subtle transitions for list changes (height/opacity).  
5. **Optimistic UI + Server** — add backend (Firebase / REST) for real persistence.  
6. **Tests** — add RTL unit tests + CI on push.  
7. **Performance** — for large lists, virtualize list (react-window) and memoize ToDoItem.

---

## 🔐 Security & Best Practices
- Sanitize user-provided text if rendering dangerously (avoid `dangerouslySetInnerHTML`).  
- Keep state immutable: use non-mutating updates.  
- Avoid storing sensitive data in localStorage.

---

## 👨‍💻 Developer Notes & Tips
- Use `useCallback` for handler functions passed down to `ToDoItem` if you observe unnecessary re-renders.  
- Use `key={task.id}` on list mapping.  
- Prefer `crypto.randomUUID()` when supported for unique ids. Fallback to `Date.now()` if necessary.  
- Keep CSS scoped to component class names (BEM-like naming) to avoid collisions.

---

## 🧾 Small code hints
- Controlled textarea pattern:
  - `const [text, setText] = useState('');`  
  - `<textarea value={text} onChange={e => setText(e.target.value)} />`  
- Add-task example:
  - `if (!text.trim()) return; addTask(text.trim()); setText('');`

---

## 📦 Packaging / Lint / Formatting
- Add ESLint + Prettier for consistent code style.  
- Use an eslint config for React (recommended: `eslint-config-react-app` or `eslint-plugin-react`).  
- Add `npm run lint` and `npm run format` scripts.

---

## 🧾 License & Author
MIT License — feel free to use, adapt, and learn from it.

**Author:** Rajithlingam Anbumani

---
