import React, { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const policy = "http://localhost:3000/policy";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [err, setErr] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submit");
    if (password !== cPassword) {
      setErr("Password confirmation failed.");
      return;
    } else {
      setErr("");
    }

    await fetch("http://127.0.0.1:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    setRedirect(true);
    if (redirect) {
      return navigate("/login");
    }
  };

  return (
    <>
      <h1 className="text-center">Sign up</h1>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="ConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password again"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {err !== "" && (
          <span className="err">
            <Alert key="danger" variant="danger">
              {err}
            </Alert>
          </span>
        )}
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check
            type="checkbox"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
            label={
              <span>
                I agree with the
                <a
                  href={policy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                >
                  terms & conditions
                </a>
              </span>
            }
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
