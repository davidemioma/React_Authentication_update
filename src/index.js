import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextprovider } from "./store/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextprovider>
      <App />
    </AuthContextprovider>
  </BrowserRouter>,
  document.getElementById("root")
);
