import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/js/bootstrap.js";

import AppRoutes from "./app/routes";
import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "./utils/constant";

const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Authorization = Cookies.get(TOKEN_NAME) || "";
console.log(Cookies.get(TOKEN_NAME));
function App() {
  return <AppRoutes />;
}

export default App;
