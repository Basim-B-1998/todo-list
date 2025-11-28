"use client";

import { useState, useEffect } from "react";
import { fetchTodosApi, createTodoApi, deleteTodoApi, editTodoApi } from "../apis/todoServices.js";
import TodoForm from "./components/todo-form.js";
import TodoList from "./components/todo-list.js";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const loadTodos = async () => {
    const data = await fetchTodosApi();
    setTodos(data);
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        await loadTodos();
      } catch (err) {
        console.error("Error loading todos:", err);
      } 
    };

    getTodos();
  }, []);



  const handleAdd = async (e) => {
    e.preventDefault();

    if (editId) {
      const updated = await editTodoApi(editId, { title: todo, status });
      setTodos((prev) =>
        prev.map((t) => (t._id === editId ? updated : t))
      );
      resetForm();
      return;
    }

    if (todo.trim() !== "") {
      const newTodo = await createTodoApi({
        title: todo,
        status,
      });

      setTodos((prev) => [newTodo, ...prev]);
      resetForm();
    }
  };

  const resetForm = () => {
    setTodo("");
    setStatus("PENDING");
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await deleteTodoApi(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  const handleEdit = (todoObj) => {
    setTodo(todoObj.title);
    setStatus(todoObj.status);
    setEditId(todoObj._id);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-3xl font-bold">TODO APP</div>
      
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        status={status}
        setStatus={setStatus}
        editId={editId}
        handleAdd={handleAdd}
      />
      
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}