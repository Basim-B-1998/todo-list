"use client";

export default function TodoForm({ 
  todo, 
  setTodo, 
  status, 
  setStatus, 
  editId, 
  handleAdd 
}) {
  return (
    <div className="mt-10 flex items-center">
      <input
        type="text"
        placeholder="Enter a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border w-80 p-2"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border ml-2 p-2"
      >
        <option value="PENDING">Pending</option>
        <option value="IN_PROGRESS">In-Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <button
        onClick={handleAdd}
        className="ml-2 border px-4 py-2 bg-green-600 text-white"
      >
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
}