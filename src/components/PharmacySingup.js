import React from "react"
import { Form } from "react-bootstrap"
import Singup from "./Singup"
import SingupInfo from "./SingupInfo"
import "../css/Form.css";

const PharmacySingup =()=>{
    return(
        <div>
            {/* <Singup/> */}
           
            {/* <form> */}
          

                <div>
                    <h1 class="signup">Singup</h1>
                </div>
               <div>
                    <input type="text" placeholder="Pharmacy Name" class="input"></input>
                </div>
                <SingupInfo/>
            {/* </form> */}
        </div>
    )
}
export default PharmacySingup