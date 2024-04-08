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
const HospitalS = () => {
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
        let id=auth;
        console.log(id);
        console.log(JSON.stringify({ ip_s: select, description: user, holiday: day, longitude: long, laditude: lat }));

         await axios.put('https://dani2.pythonanywhere.com/hospitals/' + id + '/',
            JSON.stringify({ ip_t: select, hospital_name: user, specialization: day, longitude: long, laditude: lat, description:pwd2 }),
            {
                headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
                withCredentials: true
            }
        ).then((data) => {
            console.log(data.data);
            // console.log(data.data.night_shift)

            localStorage.setItem("id", data.data.hospital);




            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))

            //clear state and controlled inputs

            navigate('HO');
        }
        );



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
                        <option class="text" value="GO"> GOVERMENT  </option>
                        <option class="text" value="PR">PRIVATE</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="name" class="input"

                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required>

                    </input>
                </div>

                <div className="Your E-mail">
                    <select class="input" onChange={(e) => setDay(e.target.value)} value={day}>
                        <option class="text" value="CART"> CANCERANDRADIOTHERAPY  </option>
                        <option class="text" value="CHILDREN">CHILDREN</option>
                        <option class="text" value="HAAB">HARTANDBODY</option>
                        <option class="text" value="SIAB">SICOANDBRANI</option>
                        <option class="text" value="BRAN">BRAINANDNARROW</option>
                        <option class="text" value="ALSP">ALLSPECIALIEST</option>
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

                <div className="Repeat Password">
                    <input type="text" placeholder="description" class="input"
                        
                        onChange={(e) => { setMatchPwd(e.target.value); setPwd2(e.target.value) }}
                        
                        required
                    >
                    </input>
                </div>
{/* 
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
export default HospitalS