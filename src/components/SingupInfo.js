import React from "react"
import "../css/Form.css";
import { AiOutlineEnvironment } from "react-icons/ai";

const SingupInfo =()=>{
    return(
        <>
                
                    <div className="Your Number Phone">
                            <input type="" placeholder="Your Number Phone" class="input"></input>
                        </div>

                        <div className="Password">
                             <input type="password" placeholder="Password" class="input"></input>
                        </div>
                       
                        <div className="Repeat Password">
                            <input type="password" placeholder="Repeat Password" class="input"></input>
                        </div>

                        <div>
                            <button class="bt-singup">Choose Location From Map <AiOutlineEnvironment/></button>
                        </div>
                        <div className="Singup Now">
                            <button type="submite" className="btn btn-dark" class="bt-singup">
                                <p class="p-signup">Singup Now</p></button>
                        </div>
                      
                        
                 
        </>
    )
}
export default SingupInfo;