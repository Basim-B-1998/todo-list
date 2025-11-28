"use client";

import TodoItem from "./todo-item.js";

export default function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <div className="flex mt-10">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}