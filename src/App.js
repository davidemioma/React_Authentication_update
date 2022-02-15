import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/update-profile"
            element={
              <PrivateRoutes>
                <UpdateProfile />
              </PrivateRoutes>
            }
          />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/login" element={<Login />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
