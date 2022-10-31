import React, { useState } from "react";
import { login_account_api } from "../../../API/bb";
import {withRouter} from "react-router-dom"
import '../log_regis.css'
import axios from "axios";
 const Login = (props) => {
   const [username, setUsername] = useState('');
   const [matkhau, setMatkhau] = useState('');
   
    const handleSubmit = async (event) => {
        event.preventDefault();
     
      console.log("ok")
       const res = await axios.post("https://localhost:44369/api/Login",{
        "username": "khang",
        "matKhau": "123"
      })
       console.log(res);
       if(res != null && res.data != null )
           {
            localStorage.setItem("accessToken",JSON.stringify(res.data.data))
            props.history.push(`/doctor/add-event`)
            
           }
       
    }
    const handleChangeUsername = (event) =>{
            setUsername(event.target.value)
    }
    const handleChangeMatKhau = (event) =>{
        setMatkhau(event.target.value)
}

    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit} >
                <label htmlFor="username">username</label>
                <input type="text" id="username" name="username" onChange={handleChangeUsername}/>
                <label htmlFor="matkhau">matkhau</label>
                <input type="password" id="matkhau" name="matkhau" onChange={handleChangeMatKhau}/>
                <button type="submit" >Log In</button>
            </form>
            <button className="link-btn" >Don't have an account? Register here.</button>
        </div>

    )
   }


export default withRouter(Login);