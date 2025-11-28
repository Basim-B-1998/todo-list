import axios from "axios";

const baseURL = process.env.BACKEND_URI

const axiosInstance = axios.create({
  baseURL
})

export default axiosInstance;