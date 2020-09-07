import axios from "axios";

const api = axios.create({
  baseURL: "http://swvschools.swvsoftware.com.br/api/",
});

export default api;
