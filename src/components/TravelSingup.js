import React from "react";
import Singup from "./Singup";
import SingupInfo from "./SingupInfo";
import "../css/Form.css";

const TravelSingup =()=>{
    return(
        <div>
            <Singup/>
                <form>
                     <div>
                         <h1 class="signup">Singup</h1>
                     </div>

                    
                    <div>
                        <input type="text" placeholder="Company Name" class="input"></input>
                    </div> 


             {/* <SingupInfo/> */}
                </form>
        </div>

    )
}
export default TravelSingup