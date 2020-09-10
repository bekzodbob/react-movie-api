import axios from "axios";

// base url to make requests to movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;