import React, { useState } from "react";
import { create_account_api } from "../../../API/bb";

export const Register = (props) => {


    const createAccount = async (event) => {
      const username =  event.target[0].value;
      const pass = event.target[1].value;

     console.log( await create_account_api({
      username: username,
      matkhau: pass
    }))
    
    }
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type","application/x-www-form-urlencoded");

    //   var urlencoded = new URLSearchParams();
    //   urlencoded.append("username",username);
    //   urlencoded.append("password",pass);

    //   var requestOption = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: urlencoded,
    //     redirect: 'follow'
    //   }

    //   fetch("")
    // }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={createAccount}>
           
            <label htmlFor="username">Username</label>

            <input value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  type="text"  
                  id="username" 
                  name="username" />

            <label htmlFor="password">password</label>
            <input value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="text" 
                    id="password" 
                    name="password" />

            <button type="submit" >Regis</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}