"use client";

import { useState, useEffect } from "react";
import { fetchTodosApi, createTodoApi, deleteTodoApi, editTodoApi } from "../apis/todoServices.js";
import TodoForm from "./components/todo-form.js";
import TodoList from "./components/todo-list.js";
import Loading from "./components/loading.js";
import Pagination from "./components/pagination.js";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

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
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  if (loading) return <Loading />;

  const handleAdd = async (e) => {
    e.preventDefault();

    if (editId) {
      const updated = await editTodoApi(editId, { title: todo, status });
      setTodos((prev) => prev.map((t) => (t._id === editId ? updated : t)));
      resetForm();
      return;
    }

    if (todo.trim()) {
      const newTodo = await createTodoApi({ title: todo, status });
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

 
  const currentPageTodos = todos.slice(page * 4 - 4, page * 4);

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
        todos={currentPageTodos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <Pagination
        totalItems={todos.length}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}
