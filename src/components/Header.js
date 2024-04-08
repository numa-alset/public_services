import React from 'react';
import "../css/Form.css";
import Logo from "../img/Logo.svg"
import { Link } from 'react-router-dom';




const Header =() =>{
    return (
        
        <div className="navbar navbar-expand bg-dark text-white" class="nav">
            <div className="container">
                <div class="help">
                     < img src={Logo} alt='logo' id='logo' />
                     <h1 class="help-me">Help Me</h1>
                </div>
            
                <div>
                    <a href='/Map' class="try">try it out</a>
                    <button  class="login"   ><Link to='/login'>Login Now</Link></button>
                </div>
         
            </div>
        </div>
    )
}
export default Header;