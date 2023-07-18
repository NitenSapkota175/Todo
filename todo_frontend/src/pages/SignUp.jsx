import React ,{ useRef , useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import custom_axios from '../axios/AxiosSetup';
import ApiConstants from '../api/ApiConstants';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faUser , faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function SignUp() {
    let navigate = useNavigate();
    let username  = React.useRef();
    let email = React.useRef();
    let password  = React.useRef();
    let confirmPassword  = React.useRef(); 

    const register = async () =>{
      if(password.current.value !== confirmPassword.current.value ){
              toast.info("Password does not match!!!");
              return;
      }  
      const response = await custom_axios.post(ApiConstants.USER.SIGN_UP,
        {
          username : username.current.value,
          email : email.current.value,
          password : password.current.value,

    });
    toast.success("Your account has been created!!!");
    navigate('/login');

    }


  return (
    <div className="container">
    <div className="form-box">
        <h1 id="title">Sign up</h1>
        <form>
            <div className="input-group signup-input-group" >
                <div className="input-field" id="nameFeild">
                <i><FontAwesomeIcon icon={faUser} /></i>
                    <input ref = {username} type="text" placeholder="username" />

                </div>
                <div className="input-field">
                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <input ref={email} type="email" placeholder="Email" />

                </div>

                <div className="input-field">
                <i><FontAwesomeIcon icon={faLock} /></i>
                    <input ref={password} type="password" placeholder="Password"/>

                </div>
                
                <div className="input-field">
                <i><FontAwesomeIcon icon={faLock}/></i>
                    <input ref={confirmPassword} type="password" placeholder="confirm password"/>

                </div>

                {/* <p className='forget-pass'>Forget Password ? <a href="#">Click here</a></p> */}

                <p className='forget-pass'>Already have an account ? <Link to="/login">Click here</Link></p>

            </div>
             <div className="btn-field">
                <button onClick={register} type="button" id="signupBtn" >Sign up</button>
                
             </div>   

        </form>
    </div>
</div>

  )
}
