import React, { useState, useEffect, useRef, useContext } from 'react'
import Singup from './Singup'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SingupInfo from './SingupInfo'
import { SlArrowDown } from "react-icons/sl"
import PharmacySingup from './PharmacySingup'
import DoctorSingup from './DoctorSingup'
import HospitalSingup from './HospitalSingup'
import RepairCarSingup from './RepairCarSingup'
import TravelSingup from './TravelSingup'
import AuthContext from "./contex/AuthProvider";
const UserSingup =()=>{
    const { setAuth } = useContext(AuthContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();  
    const [user, setUser] = useState('');

    const [pwd, setPwd] = useState('');
    const [pwd2, setPwd2] = useState('');

    const [matchPwd, setMatchPwd] = useState('');

    const [select,setSelect]=useState("");

    const [email,setEmail]=useState("");

    const [number,setNumber]=useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pwd != matchPwd) {
            alert("Invalid password and match");
            return;
        }
        // console.log(JSON.stringify({ 'username': user, 'password': pwd, 'password2': pwd2, 'user_type': select, 'email': email, 'phone': number, 'first_name': '', 'last_name': '' }));
        // try {
        //     const response = await axios.post('https://dani2.pythonanywhere.com/myprofile/register/',
        //         JSON.stringify({ 'username': user, 'password': pwd, 'password2': pwd2, 'user_type': select, 'email': email, 'phone': number, 'first_name': '', 'last_name': '' }), {
        //             headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },

        //         withCredentials: true
        //     }
        //     );
        //     let id = response.data.id;
        //     setAuth(id);
        //     console.log(response.data.id)
        //     localStorage.setItem("id", response.data.id)
        //    console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response))
        //     console.log(auth);
            //clear state and controlled inputs
            // setUser('');
            // setPwd('');
            // setNumber('');
            // setPwd2('');
            // setEmail('');
            // setMatchPwd('');
            console.log(select);
        navigate(select.toString());
        
            
        // } catch (err) {
        //  console.log(err);
        // }
    }
    return(
        <div>
          <Singup/>
           
            <form onSubmit={handleSubmit}>
               <div>
                   <h1 class="signup">Singup</h1>
               </div>
                <div className="select">
                    <select class="input" onChange={(e) => setSelect(e.target.value)} value={select}>
                        <option class="text" value="us"> User  <SlArrowDown /> </option>
                        <option class="text" value="PH">Pharmacy</option>
                        <option class="text" value="DR">Doctor</option>
                        <option class="text" value="HO">Hospital</option>
                        <option class="text" value="ME">RepairCar</option>
                        {/* <option class="text" value="TR">TravelCompany</option> */}
                    </select>
                </div>
              <div>
                    <input type="text" placeholder={"Full Name"} class="input" 
                        
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required>

                    </input>
               </div>

               <div className="Your E-mail">
                    <input type="email" placeholder="Your E-mail" class="input" 
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required>
                            
                    </input>
                </div>
                 <div className="Your Number Phone">
                    <input type="" placeholder="Your Number Phone" class="input"
                        id="number"
                        autoComplete="off"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        required
                    >

                    </input>
                </div>

                <div className="Password">
                    <input type="password" placeholder="Password" class="input"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    >

                    </input>
                </div>

                <div className="Repeat Password">
                    <input type="password" placeholder="Repeat Password" class="input"
                        id="confirm_pwd"
                        onChange={(e) => { setMatchPwd(e.target.value); setPwd2(e.target.value)}}
                        value={matchPwd}
                        required
                    >
                    </input>
                </div>

                <div>
                    <image class="bt-singup">Choose Location From Map </image>
                </div>
                <div className="Singup Now">
                    <button type="submite" className="btn btn-dark" class="bt-singup">
                        <p class="p-signup">Singup Now</p>
                    </button>
                </div>
                
            </form>
       
       </div>
       
    )
}
export default UserSingup