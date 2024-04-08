import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "../css/Form.css";
import SingupInfo from "./SingupInfo"
import Singup from "./Singup";


const Account =()=>{
   
    const newLocal = "264.06deg";
    return(
        <div>
            <Singup/>
            <Form>
            <div>  
                <h1>Choose Your Account</h1>
            </div>
            <div>
            <div><button
             class="button" 
            //  onClick={<SingupInfo/>}
        
             style={{ width: "155px", height: "50px" , borderRadius: "5.95238px"
                        }}><Link class="button" to="/signup">User</Link></button> </div> 
                    <div><button  class="button" ><Link class="button" to="/account/doc">Doctor</Link></button></div> 
                    <div><button to="/pharm" class="button"><Link class="button" to="/pharm">Pharmacy</Link></button> </div> 
                    <div><button to="hos" class="button"><Link class="button" to="/hos">Hospital</Link></button></div> 
                    <div><button to="rep" class="button"><Link class="button" to="/rep">CarRepair</Link></button> </div> 
                    <div><button to="trav" class="button"><Link class="button" to="/trav">TravelCompany</Link></button> </div>
                    <div><button to="trav" class="button"><Link class="button" to="/AdminDashboardPharmacy">TravelCompany</Link></button> </div>
            
            </div>
            </Form>
        </div>
        
    )
}
export default Account;