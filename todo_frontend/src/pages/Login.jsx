import React ,{useRef}from 'react'
import { toast } from "react-toastify";
import custom_axios from '../axios/AxiosSetup';
import ApiConstants from '../api/ApiConstants';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faUser , faLock } from '@fortawesome/free-solid-svg-icons';
export default function Login() {
  let navigate = useNavigate()
  let  email =  React.useRef();
  let password = React.useRef();

  const loginApp = async () =>{
        if(email.current.value == "" || password.current.value == ""){
          toast.info("Please fill the information");
          return;
        }
        try{
          const response = await custom_axios.post(ApiConstants.LOGIN,{
                email : email.current.value,
                password : password.current.value,
          });
          localStorage.setItem("token" , response.data.token);
          dispatchEvent(new Event("storage"));
          navigate('/');
        }catch(error){
          if(error.response.status == 401)toast.warn(error.response.data.message);

        }


  }
  
  return (
    <div className="container">
    <div className="form-box">
        <h1 id="title">Sign In</h1>
        <form>
            <div className="input-group login-input-group">
            
                <div className="input-field">
                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <input ref={email} type="email" placeholder="Email" />

                </div>

                <div className="input-field">
                <i><FontAwesomeIcon icon={faLock} /></i>
                    <input ref={password} type="password" placeholder="Password"/>

                </div>

                <p className='forget-pass'>Don't have an account ? <Link to="/signup">Click here</Link></p>

            </div>
             <div className="btn-field">
               
                <button onClick={loginApp} type="button" id="signinBtn" >Sign In</button>
             </div>   

        </form>
    </div>
</div>
  )
}
