import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://136.243.50.33:5001",
});

export default axiosInstance;
