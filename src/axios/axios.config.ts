import axios, { AxiosError, AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../utils/constant";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
const token = Cookies.get(TOKEN_NAME);

if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axiosInstance.defaults.headers.common["Authorization"];
}

export const setAuthHeader = () => {};
export default axiosInstance;
