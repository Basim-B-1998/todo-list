import axiosInstance from "./axiosInstance";

export const fetchTodosApi = async() => {
  const response = await axiosInstance.get('/api/todo');
  return response.data;
}

export const createTodoApi = async (todo) => {
  const response = await axiosInstance.post('/api/todo', todo);
  return response.data;
}

export const editTodoApi = async (id, todo) => {
  const response = await axiosInstance.put(`/api/todo/${id}`, todo);
  return response.data;
}

export const deleteTodoApi = async (id) => {
  const response = await axiosInstance.delete(`/api/todo/${id}`);
  return response.data;
}