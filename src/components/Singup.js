import React from "react";
import "../css/Form.css";
import Frame from "../img/Frame.svg"
import Button from 'react-bootstrap/Button';
import Account from "./Account";
import Header from "./Header";

const Singup =() =>{
        return(
        
            <div className="container">
                <Header/>
                <div className="container col-md-6">
                 <img src={Frame} style={{position: "absolute", width: "622px",height: "586px",left: "70px",top: "295px"}} />
                    
                </div>
            </div>
        )
    }

export default Singup 