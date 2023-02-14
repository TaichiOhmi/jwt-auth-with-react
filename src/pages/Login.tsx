import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <h1 className="text-center">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="Checkbox">
          <Form.Check type="checkbox" label="Remember me" name="remember" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
