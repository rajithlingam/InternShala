import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, status: "pending" }]);
  };

  // Mark Completed
  const markDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t)));
  };

  // Mark Not Completed
  const markNotDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "not-done" } : t)));
  };

  // Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-8 px-4">
      <Header addTask={addTask} />
      <ToDoList tasks={tasks} markDone={markDone} markNotDone={markNotDone} deleteTask={deleteTask} />
    </section>
  );
}
