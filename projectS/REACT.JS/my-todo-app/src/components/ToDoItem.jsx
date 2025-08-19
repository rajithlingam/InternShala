import React from "react";

export default function ToDoItem({ task, markDone, markNotDone, deleteTask }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 hover:scale-[1.02] transition-transform">
      <span className="flex-1 text-orange-600 break-words text-lg">{task.text}</span>

      {task.status === "done" && <p className="text-green-600 font-bold">Task Completed</p>}
      {task.status === "not-done" && <p className="text-red-600 font-bold">Task Not Completed</p>}

      {task.status === "pending" && (
        <div className="flex gap-2">
          <button
            onClick={() => markDone(task.id)}
            className="text-green-600 text-2xl hover:scale-125 transition-transform"
          >
            ✔
          </button>
          <button
            onClick={() => markNotDone(task.id)}
            className="text-red-600 text-2xl hover:scale-125 transition-transform"
          >
            ✘
          </button>
        </div>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-600 text-2xl hover:scale-125 transition-transform"
      >
        🗑
      </button>
    </div>
  );
}
