import React from 'react';
import "../css/Form.css";
import Logo from "../img/Logo.svg"




const Header =() =>{
    return (
        
        <div className="navbar navbar-expand bg-dark text-white" class="nav" style={{background : "white"}}>
            <div className="container">
                <div class="help">
                     < img src={Logo} alt='logo' id='logo' />
                     <h1 class="help-me">Help Me</h1>
                </div>
            
                <div>
                    <a href='www.google.com' class="singupnow">Singup now</a>
                    <button type="submit"  class="login">Login Now</button>
                </div>
         
            </div>
        </div>
    )
}
export default Header;