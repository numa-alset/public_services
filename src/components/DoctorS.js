import React, { useState, useEffect, useRef,useContext } from 'react'
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
const DoctorS = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState('');
   // const [id, setid] = useState(localStorage.getItem('id'));
    const [pwd, setPwd] = useState('');
    const [pwd2, setPwd2] = useState('');

    const [matchPwd, setMatchPwd] = useState('');

    const [select, setSelect] = useState("");
    const [day, setDay] = useState("");
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");

    const [email, setEmail] = useState("");

    const [number, setNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let id = auth;
        console.log(id);
        console.log(JSON.stringify({ ip_s: select, description: user, holiday: day, longitude: long, laditude: lat }));
       
            // await axios.put('https://dani2.pythonanywhere.com/doctors/' + id + '/',
            //     JSON.stringify({ ip_s: select, description: user, holiday: day, longitude: long, laditude:lat }),
            //     {
            //         headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
            //         withCredentials: true
            //     }
            // ).then((data) => {
            //     console.log(data.data);
            //     // console.log(data.data.night_shift)
               
            



            
            // //console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response))

            // //clear state and controlled inputs
          
            // navigate('DO');
            // }
            // );
        navigate('DO');
    
        
    }
    return (
        <div>
            <Singup />

            <form onSubmit={handleSubmit}>
                <div>
                    <h1 class="signup">Singup</h1>
                </div>
                <div className="select">
                    <select class="input" onChange={(e) => setSelect(e.target.value)} value={select}>
                        <option class="text" value="OP"> OPHTHALMOLOGIST  <SlArrowDown /> </option>
                        <option class="text" value="CA">CARDIOLOGIST</option>
                        <option class="text" value="BO">BONS</option>
                        <option class="text" value="AS">ASETHETICIAN</option>
                        <option class="text" value="NE">NEUROLOGIST</option>
                        <option class="text" value="PE">PEDIATRICIAN</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="description" class="input"

                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required>

                    </input>
                </div>

                <div className="Your E-mail">
                    <select class="input" onChange={(e) => setDay(e.target.value)} value={day}>
                        <option class="text" value="Sunday"> Sunday   </option>
                        <option class="text" value="Monday">Monday</option>
                        <option class="text" value="Tuesday">Tuesday</option>
                        <option class="text" value="Wednesday">Wednesday</option>
                        <option class="text" value="Thursday">Thursday</option>
                        <option class="text" value="Friday">Friday</option>
                        <option class="text" value="Saturday">Saturday</option>
                    </select>
                </div>
                <div className="Your Number Phone">
                    <input type="text" placeholder="longitude" class="input"
                        id="number"
                        autoComplete="off"
                        onChange={(e) => setLong(e.target.value)}
                        
                        required
                    >

                    </input>
                </div>

                <div className="Password">
                    <input type="text" placeholder="laditude" class="input"
                        
                        onChange={(e) => setLat(e.target.value)}
                       
                        required
                    >

                    </input>
                </div>

                {/* <div className="Repeat Password">
                    <input type="password" placeholder="Repeat Password" class="input"
                        id="confirm_pwd"
                        onChange={(e) => { setMatchPwd(e.target.value); setPwd2(e.target.value) }}
                        value={matchPwd}
                        required
                    >
                    </input>
                </div>

                <div>
                    <image class="bt-singup">Choose Location From Map </image>
                </div> */}
                <div className="Singup Now">
                    <button type="submite" className="btn btn-dark" class="bt-singup">
                        <p class="p-signup">Singup Now</p>
                    </button>
                </div>

            </form>

        </div>

    )
}
export default DoctorS