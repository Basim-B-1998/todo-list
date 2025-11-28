"use client";

export default function TodoItem({ todo, handleEdit, handleDelete }) {

  return (
    <li className="flex flex-col border w-96 p-3 rounded bg-white shadow">
      <div className="flex justify-between">
        <span className="text-lg font-medium">{todo.title}</span>

        <div className="flex space-x-2">
          <button
            className="bg-yellow-400 px-2 py-1 rounded"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </div>
      </div>

      <span className="mt-2 text-sm">
        Status:{" "}
                 <span
                  className={`font-bold px-2 py-1 rounded
                    ${
                      todo.status === "PENDING"
                        ? "bg-yellow-200 text-yellow-800"
                        : todo.status === "IN_PROGRESS"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-green-200 text-green-800"
                    }
                  `}
                >
                  {todo.status}
                </span>
      </span>
    </li>
  );
}