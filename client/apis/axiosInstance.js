import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URI;

const axiosInstance = axios.create({
  baseURL
})

export default axiosInstance;