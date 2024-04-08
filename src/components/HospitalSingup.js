import React from "react";
import Singup from "./Singup";
import SingupInfo from "./SingupInfo";
import "../css/Form.css";
import { SlArrowDown } from "react-icons/sl"

const HospitalSingup =()=>{
    return(
        <div>
            <Singup/>
                <form>
                     <div>
                         <h1 class="signup">Singup</h1>
                     </div>

                    
                    <div className="select">
                        <select class="input">
                            <option class="text">Choose Hospital Specialty  <SlArrowDown/> </option>
                            <option class="text"value="heart attack" >Heart Attack</option>
                            <option class="text"value="tumors">Tumors</option>
                            <option class="text"value="nervousness">nervousness</option>
                            <option class="text"value="surgery">surgery</option>
                            <option class="text"value="Psychological">Psychological</option>
                            <option class="text"value="Obstetrics and gynecology">Obstetrics and gynecology</option>

                        </select>
                    </div>

                    <div>

                        <input type="text" placeholder="Hospital Name" class="input"></input>
                    </div> 


                    <div>
                        <input type="text" placeholder="Hospital Type" class="input"></input>
                    </div>
             <SingupInfo/>
                </form>
        </div>

    )
}
export default HospitalSingup