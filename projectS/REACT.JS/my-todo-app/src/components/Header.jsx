import React, { useState } from "react";

export default function Header({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setText("");
  };

  return (
    <header className="main-header">
      <h1>Welcome to DOM ToDo List</h1>

      <form
        onSubmit={handleAdd}
        className="container inputcol"
        aria-label="Add task form"
      >
        <textarea
          id="textarea"
          placeholder="Write your task here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button id="buttoninput" type="submit">
          <strong>Add Task</strong>
        </button>
      </form>
    </header>
  );
}
