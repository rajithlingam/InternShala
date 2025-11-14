import React from "react";

export default function ToDoItem({ task, markDone, markNotDone, deleteTask }) {
  return (
    <div className="record-item-container" role="listitem">
      <span className="record-list">{task.text}</span>

      <span className="record-but">
        {/* If pending show action buttons, else show status text */}
        {task.status === "pending" ? (
          <>
            <button
              className="record-but-check"
              onClick={() => markDone(task.id)}
              aria-label="mark done"
            >
              ✔
            </button>
            <button
              className="record-but-cross"
              onClick={() => markNotDone(task.id)}
              aria-label="mark not done"
            >
              &#10540;
            </button>
          </>
        ) : task.status === "done" ? (
          <p className="done">Task Completed</p>
        ) : (
          <p className="not-done">Task Not Completed</p>
        )}
      </span>

      <span className="delete-btn">
        <button
          className="record-but-delete"
          onClick={() => deleteTask(task.id)}
          aria-label="delete task"
        >
          &#9940;
        </button>
      </span>
    </div>
  );
}
