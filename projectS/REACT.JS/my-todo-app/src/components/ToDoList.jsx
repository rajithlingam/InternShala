import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, markDone, markNotDone, deleteTask }) {
  return (
    <section className="mt-6 flex flex-col gap-4">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          markDone={markDone}
          markNotDone={markNotDone}
          deleteTask={deleteTask}
        />
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-600">No tasks yet. Add one above 👆</p>
      )}
    </section>
  );
}
