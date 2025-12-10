import axios from "axios";

const API = axios.create({
 VITE_API_URL: "https://fullstack-flipr-archana.onrender.com",
  baseURL: VITE_API_URL || "http://localhost:5000/api",
  
});

export default API;
