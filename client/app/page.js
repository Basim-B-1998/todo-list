"use client";

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("Pending");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { ...t, todo, status } : t
      );
      setTodos(updatedTodos);
      setEditId(null);
      setTodo("");
      setStatus("Pending");
      return;
    }

    if (todo !== "") {
      setTodos((prev) => [{ id: Date.now(), todo, status }, ...prev]);
      setTodo("");
      setStatus("Pending");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((t) => t.id !== id);
    setTodos(delTodo);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setStatus(editTodo.status);
    setEditId(id);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Heading */}
      <div className="text-3xl font-bold">TODO APP</div>

      {/* Input Section */}
      <div className="mt-10 flex items-center">
        <input
          type="text"
          placeholder="Enter a task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border w-80 p-2"
        />

        {/* Status Dropdown */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border ml-2 p-2"
        >
          <option value="Pending">Pending</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          onClick={handleAdd}
          className="ml-2 border px-4 py-2 bg-green-600 text-white"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* List */}
      <div className="flex mt-10">
        <ul className="space-y-3">
          {todos.map((t) => (
            <li
              key={t.id}
              className="flex flex-col border w-96 p-3 rounded bg-white shadow"
            >
              <div className="flex justify-between">
                <span className="text-lg font-medium">{t.todo}</span>

                <div className="flex space-x-2">
                  <button
                    className="bg-yellow-400 px-2 py-1 rounded"
                    onClick={() => handleEdit(t.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Status Badge */}
              <span className="mt-2 text-sm">
                Status:{" "}
                <span
                  className={`font-bold px-2 py-1 rounded
                    ${
                      t.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : t.status === "In-Progress"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-green-200 text-green-800"
                    }
                  `}
                >
                  {t.status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;