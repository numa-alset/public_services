import React, { useState } from "react";
import Header from "./Header";
import ComputerLogin from "../img/ComputerLogin.svg"
import google from "../img/google.svg"
import Header2 from "./Header2";

import axios from "axios";



const LoginPage =()=>{
  const hundleSubmite = async (e) => {

    e.preventDefault();
    // send the username and password to the server
    const response = await axios.post(
      "https://dani2.pythonanywhere.com/myprofile/login/",
      JSON.stringify({ username: email, password: pwd }),
      {
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
        withCredentials: true
      }
    );
    // set the state of the user

    // store the user in localStorage
    //localStorage.setItem('user', response.data)
    console.log(response.data)
  };
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
    return(
        <>
            <div className="container">
                <Header2/>
                <div className="container col-md-6">
                <img src={ComputerLogin} style={{position: "absolute", width: "622px",height: "586px",left: "68px",top: "219px"}} />
            
                </div>

                <div>
                    <form>
                        <div><h1 class="logintext">Login</h1></div>
                        
                        <div className="Your E-mail">
                <input type="email" placeholder="user name" class="input" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        
                        <div className="Password">
                <input type="password" placeholder="Password" class="input" onChange={(e) => setPwd(e.target.value)}></input>
                        </div>

                        <div>
                            <button class="logingoogle"> <img src={google}/> Login With Google</button>
                        </div>

                        <div className="Singup Now">
                            <button type="submite" className="btn btn-dark" class="bt-singup" onClick={hundleSubmite}>
                            <p class="p-signup">Log in</p></button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default LoginPage

{/*
import { useState } from "react";
import Dashboard from "./Dashboard";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
    }
  };
  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
};
}

export default Login;

*/ }