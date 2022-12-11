import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigateLog = useNavigate();
  const location = useLocation();
  let errorTrue;
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigateLog(from, { replace: true });
  }

  if (error) {
    errorTrue = <p className="text-danger">Error: {error?.message}</p>;
  }

  const controlLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(email, pass);

    signInWithEmailAndPassword(email, pass);
  };

  const navigateLogin = (e) => {
    navigateLog("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
    else{
      toast('Please enter your email address');
    }
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-success mt-2">Please Login</h2>
      <Form className=" mb-3" onSubmit={controlLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passRef} type="password" placeholder="Enter Password" required />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className="w-100" variant="success" type="submit">
          Login
        </Button>
      </Form>
      {errorTrue}
      <h6>
        Are you new to this site?
        <Button className="register-link" onClick={navigateLogin} variant="outline-success">
          Please Register
        </Button>
      </h6>

      <h6>
        forget password?
        <Button className="register-link" onClick={resetPassword} variant="outline-success">
          Reset Password
        </Button>
      </h6>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
