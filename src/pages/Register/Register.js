import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
  const [agree, setAgree] = useState(false);
  
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    

    const [
      createUserWithEmailAndPassword,
      user, 
      loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateRegister = e =>{
      navigate('/login')
  }

  if(loading || updating){
    return <Loading/>
  }

  if(user){
    console.log('user', user)
    // navigate('/home');
  }

    const controlRegister = async (event) =>{
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const pass = event.target.password.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass =passRef.current.value;
        console.log(name, email, pass)
    //     const agree = event.target.terms.checked;
    
    await  createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name});
          
    console.log('Updated profile');
    navigate('/home');
    

        
    }

    
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-success mt-2">Please Register</h2>
      <Form className=" mb-3" onSubmit={controlRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Your Name</Form.Label> */}
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name"/>
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control ref={passRef} type="password" placeholder="Enter Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={agree? "text-success" : "text-danger"} onClick={()=> setAgree(!agree)} type="checkbox" name="terms"
          id='terms'
          label="Accept lawyer terms and conditions" />
        </Form.Group>
        <Button 
        disabled={!agree}
        className='w-100' 
        variant="success" 
        type="submit">
          Register
        </Button>
      </Form>
      <h6>Do you have already an account? <Button className="register-link"  onClick={navigateRegister}  variant="outline-success">Please Login</Button></h6>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;