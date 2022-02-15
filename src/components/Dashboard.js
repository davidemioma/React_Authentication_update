import React, { Fragment, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const authCtx = useAuth();

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await authCtx.logout();

      navigate("/login", { replace: true });
    } catch (err) {
      setError("Failed to log out");
    }
  };

  return (
    <Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {authCtx.currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </Fragment>
  );
}
