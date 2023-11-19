import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your API URL
  timeout: 5000, // Adjust timeout as needed
  // Additional configurations if required (headers, interceptors, etc.)
});

export default instance;
