import React, { Fragment, useState, useRef } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const authCtx = useAuth();

  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      await authCtx.resetPassword(emailRef.current.value);

      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setError("Failed to reset password");
    }

    setLoading(false);
  };

  return (
    <Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          {message && <Alert variant="success">{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Fragment>
  );
}
