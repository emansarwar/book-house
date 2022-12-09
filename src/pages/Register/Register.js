import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const controlRegister = e =>{
        e.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const pass = event.target.password.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass =passRef.current.value;
        console.log(name, email, pass)
    }

    const navigateRegister = e =>{
        navigate('/login')
    }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-success mt-2">Please Register</h2>
      <Form className=" mb-3" onSubmit={controlRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name"/>
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <h6>Do you have already an account? <Button className="register-link"  onClick={navigateRegister}  variant="outline-success">Please Login</Button></h6>
    </div>
  );
};

export default Register;