import React from "react";
import Singup from "./Singup";
import SingupInfo from "./SingupInfo";
import "../css/Form.css";
import { SlArrowDown } from "react-icons/sl"

const RepairCarSingup =()=>{
    return(
        <div>
            <Singup/>
                <form>
                     <div>
                         <h1 class="signup">Singup</h1>
                     </div>

                     <div className="select">
                        <select class="input">
                            <option class="text">Choose Shop Specialty  <SlArrowDown/> </option>
                            <option class="text" value="Electrical" >Electrical</option>
                            <option class="text" value="Mechanical">Mechanical</option>
                            <option class="text" value="Designer">Designer</option>
                        </select>
                    </div>
                    
                    <div className="select">
                        <select class="input">
                            <option class="text">Choose Car Type  <SlArrowDown/> </option>
                            <option class="text" value="BMW" >BMW</option>
                            <option class="text" value="Marsidis">Marsidis</option>
                            <option class="text" value="Dacia">Dacia</option>
                        </select>
                    </div>

                    <div>
                        <input type="text" placeholder="Shop Name" class="input"></input>
                    </div> 

             {/* <SingupInfo/> */}
                </form>
        </div>

    )
}
export default RepairCarSingup