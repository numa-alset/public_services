import React from 'react'
import ReactDOM from 'react-dom'
//import App from './components/App.js'
// import './style.css'
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Singup from "./Singup";
import Header from "./Header"
import Account from "./Account";
import PharmacySingup from "./PharmacySingup"
import HospitalSingup from "./HospitalSingup"
import DoctorSingup from "./DoctorSingup";
import RepairCarSingup from "./RepairCarSingup";
import TravelSingup from "./TravelSingup"
import UserSingup from "./UserSingup";
import LoginPage from "./LoginPage";
import Home from "./Home";
import HomeHeader from "./HomeHeader"
import SingupInfo from "./SingupInfo";
import Home2 from "./Home2";
import Choose from './Choose';
import Map from './Map';
// import AdminDashboardPharmacy from './components/AdminDashboardPharmacy';
import MyAccount from './MyAccount';
import AdminPh from './AdminPh';
import AdminTravel from './AdminTravel';
import AdminDoctor from './AdminDoctor';
import DoctorS from './DoctorS';
import AdminHos from './AdminHos';
import AdminRep from './AdminRep';
import Map2 from './Map2';
import Map3 from './Map3';
import Map4 from './Map4';
import Map5 from './Map5';
import Map6 from './Map6';
import HospitalS from './HospitalS';
import PharmS from './PharmS';
function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/header' element={<Header />} />
        <Route path='/account/' element={<Account />} />
        <Route path='/pharm' element={<PharmacySingup />} />
        <Route path='/hos' element={<HospitalSingup />} />
        <Route path='/account/doc' element={<DoctorSingup />} />
        <Route path='/rep' element={<RepairCarSingup />} />
        <Route path='/trav' element={<TravelSingup />} />
        <Route path='/user' element={<UserSingup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<UserSingup />} />
        <Route path='/homeheader' element={<HomeHeader />} />
        <Route path='/choose' element={<Choose />} />
        <Route path='/map' element={<Map />} />
        <Route path='/signup/US' element={<MyAccount />} />
        <Route path='/signup/PH/PH' element={<AdminPh />} />
        <Route path='/TR' element={<AdminTravel />} />
        <Route path='/signup/DR/DO' element={<AdminDoctor />} />
        <Route path='/signup/HO/HO' element={<AdminHos />} />
        <Route path='/ME' element={<AdminRep />} />
        <Route path='/map2' element={<Map2 />} />
        <Route path='/map3' element={<Map3 />} />
        <Route path='/map4' element={<Map4 />} />
        <Route path='/map5' element={<Map5 />} />
        <Route path='/map6' element={<Map6 />} />
        <Route path='/signup/DR' element={<DoctorS />} />
        <Route path='/signup/HO' element={<HospitalS />} />
        <Route path='/signup/PH' element={<PharmS />} />
        {/* <Route path='/map2' element={<Map2 />} />
              <Route path='/map3' element={<Map3 />} /> */}

      </Routes>


    </Router>
  )

}

export default App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


