import React from "react";
import { Button } from "react-bootstrap";
import Google from './google2.png';
import github from './github.png';
import Facebook from './facebook.png';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user,loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1,loading1, error1] = useSignInWithGithub(auth);
    let errorTrue;

    if(loading || loading1){
      return <Loading/>
    }
    if (error || error1) {
        
        errorTrue =
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
       
        
      }

      if (user || user1) {
        navigate('/home')
      }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{height: "2px"}} className="bg-secondary w-50"></div>
        <p className="pt-2 mx-2">or</p>

        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
      </div>
      {errorTrue}
      <div>
        <Button 
        onClick={() => signInWithGoogle() }
        variant="secondary" className="w-100 mb-2">
            <img style={{width:"40px"}} src={Google} alt="google logo" />  Google Sign In</Button>
      </div>
      <div>
        <Button
        onClick={()=> signInWithGithub()}
        variant="secondary" className="w-100 mb-2"><img style={{width:"40px"}} src={github} alt="github logo" />  Github Sign In</Button>
      </div>
      <div>
        <Button variant="secondary" className="w-100"><img style={{width:"40px"}} src={Facebook} alt="facebook logo" />  Facebook Sign In</Button>
      </div>
      
    </div>
  );
};

export default SocialLogin;
