import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css"; // or ./style.css — import your CSS here

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (text) => {
    if (!text || !text.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text, status: "pending" }]);
  };

  // Mark Completed
  const markDone = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: "done" } : t)));
  };

  // Mark Not Completed
  const markNotDone = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "not-done" } : t))
    );
  };

  // Delete
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section className="main w-full max-w-2xl mx-auto mt-8 px-4">
      <Header addTask={addTask} />
      <ToDoList
        tasks={tasks}
        markDone={markDone}
        markNotDone={markNotDone}
        deleteTask={deleteTask}
      />
    </section>
  );
}
