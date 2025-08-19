import React, { useState } from "react";

export default function Header({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <header>
      <h1 className="text-center text-blue-600 text-2xl font-bold mb-4">
        Welcome to React ToDo List
      </h1>
      <form onSubmit={handleAdd} className="bg-yellow-300 p-4 rounded-lg shadow flex flex-col gap-2 sm:flex-row">
        <textarea
          className="resize-none h-10 p-2 text-red-600 font-bold rounded border border-gray-400 flex-1"
          placeholder="Write your task here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-green-700 font-bold px-4 py-2 rounded hover:bg-yellow-300"
        >
          Add Task
        </button>
      </form>
    </header>
  );
}
