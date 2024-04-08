import React from "react";
import Singup from "./Singup";
import SingupInfo from "./SingupInfo";
import "../css/Form.css";


const DoctorSingup =()=>{
    return(
        <>
         <div>
             <Singup/>
                <form>
                     <div>
                         <h1 class="signup">Singup</h1>
                     </div>

                    
                    <div>
                        <input type="text" placeholder="Clinic Name" class="input"></input>
                    </div> 

                    <div>
                        <input type="text" placeholder="Your Specialty" class="input"></input>
                    </div> 

             <SingupInfo/>
                </form>
         </div>
        
        </>
    )
}
export default DoctorSingup;