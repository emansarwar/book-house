import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailLogRef = useRef('');
    const passLogRef = useRef('');
    const navigateLog = useNavigate();

    const controlLogin = e =>{
        e.preventDefault();
        const emailLog = emailLogRef.current.value;
        const passLog =passLogRef.current.value;
        console.log(emailLog, passLog)

    }

    const navigateLogin = e =>{
        navigateLog('/register')
    }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-success mt-2">Please Login</h2>
      <Form className=" mb-3" onSubmit={controlLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailLogRef} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passLogRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <h6>Are you new to this site? <Button className="register-link"  onClick={navigateLogin}  variant="outline-success">Please Register</Button></h6>
    </div>
  );
};

export default Login;
