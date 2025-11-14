# RL ToDo List (Vanilla JavaScript)

A fully functional ToDo application built using **pure HTML**, **CSS**, and **JavaScript** — without any libraries or frameworks.  
This project demonstrates how to build dynamic UI updates using DOM manipulation, event handling, and clean UI styling.

The app is lightweight, responsive, and perfect for beginners wanting to understand how JavaScript interacts with the browser.

---

## ✨ Features (Explained in Detail)

### ➕ Add Tasks
- Users can write a task in the textarea.
- When the “Add Task” button is pressed:
  - The input is trimmed
  - Empty values are ignored
  - A new task container is dynamically created

### ✔ Mark Task as Completed
- Clicking the **✔ button** changes the task UI to:
  - Replace action buttons with a green **“Task Completed”** label  
  - Add `.done` CSS styling (bold + green)

### ↩ Mark Task as Not Completed
- Clicking the **↩ button** replaces the action area with:
  - A red **“Task Not Completed”** label  
  - Adds `.not-done` CSS styling (bold + red)

### 🗑 Delete Tasks
- Clicking the trash icon removes the entire task element instantly from the DOM.

### 🎨 Responsive + Smooth UI
- Task cards scale up on hover
- Fully responsive on mobiles
- Clean spacing, bold fonts, bright color palette
- Buttons increase size slightly on hover

---

## 📁 Project Structure (Simple & Clean)
/js-todo  
│── index.html (Main HTML Structure)  
│── style.css (Styling + Responsiveness + Hover Effects)  
└── app.js (All DOM Logic for Tasks)  

---

## 📘 File Breakdown

### **index.html**
- Loads Google Font "Oswald"
- Includes:
  - Main header  
  - Textarea input  
  - Add button  
  - Task record container  
- Links to external CSS + app.js

### **style.css**
Contains:
- Global resets  
- Font + background styling  
- Flex layout for responsiveness  
- Styles for:
  - Textarea  
  - Buttons  
  - Task card (`record-item-container`)  
  - Completed/not completed styling  
- Hover animations (scale effects)
- Media query for bigger screens

### **app.js**
Handles:
- Reading user input
- Creating task containers dynamically
- Adding event listeners for:
  - Add Task  
  - Mark Completed  
  - Mark Not Completed  
  - Delete Task  
- Updates innerHTML of components for state changes

Clean, readable, and beginner-friendly logic.

---

## ▶️ How to Use
1. Open **index.html** in any browser  
2. Type a task  
3. Click **Add Task**  
4. Choose:
   - ✔ = Completed  
   - ↩ = Not Completed  
   - 🗑 = Delete  
5. Add as many tasks as you like  

Simple. Instant. Smooth.

---

## 🧠 How It Works (Deep Dive)

### 1️⃣ Adding Tasks
- Retrieves input using:
  - `document.querySelector`
- Cleans input using `.trim()`
- Creates elements using:
  - `document.createElement("div")`
- Injects HTML with:
  - `.innerHTML = ...`
- Appends to the `.record` container

### 2️⃣ Marking Complete / Not Complete
- Targets `.record-but` span
- Replaces inner content with a `<p>` label
- Automatically applies `.done` or `.not-done` styles

### 3️⃣ Deleting Tasks
- Removes parent container using:
  - `recordItem.remove()`

### 4️⃣ Resetting Input
- After adding:
  - `txtArea.value = ""`

Simple and effective DOM manipulation.

---

## 🎨 UI / UX Design Choices

### Fonts
- **Oswald** is bold + clean → good for UI contrast.

### Colors
- **Blue** → Titles  
- **Lime Green** → Input box section  
- **Gold** → Add button  
- **Orangered** → Task text  
- **Green/Red** → Status messages (Done / Not Done)

### Animations
- Task card scales up on hover (`transform: scale(1.04)`)

### Layout
- Mobile-first  
- Grid-like stacking  
- Automatically reorganizes on wider screens

---

## 🔧 Possible Improvements
You can expand this project by adding:

### ✔ Save Tasks using LocalStorage
Keeps tasks even after refreshing page.

### ✔ Add Edit Feature
Let users update their task text.

### ✔ Add Filters
Tabs:
- All  
- Completed  
- Not Completed  
- Pending  

### ✔ Add Dark Mode
One toggle to switch themes.

### ✔ Add Enter-to-Add feature
Make UX faster.

---

## 🛠 Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Google Fonts  

No frameworks.  
No libraries.  
100% pure frontend.

---

## 👨‍💻 Author
**Rajithlingam Anbumani**

---

## 📜 License
Open-source. Free to modify and use.

