import axios from "axios";

export default axios.create({
  baseURL: "https://bezkoder-list-backend.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});