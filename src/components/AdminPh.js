import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./MyAccount.css";
import axios from "axios";
import { useEffect, useState,useContext} from "react";
import AuthContext from "./contex/AuthProvider";
const AdminPh = () => {
 
  //const [id, setid] = useState(localStorage.getItem('id'));
  const id = localStorage.getItem('id');
  const { auth } = useContext(AuthContext);
   const [user,setUser]=useState('userName');

   const [pwd,setPwd]=useState('');

   const [email,setEmail]=useState('');

   const [name,setName]=useState('');

   const [phone,setPhone]=useState('');

   //const [file,setFile]=useState(null);


   //const [src,setSrc]=useState(null);
// start 

  useEffect(() => {
    // let id = auth;
    console.log(id);
    axios.get('https://dani2.pythonanywhere.com/pharmacy/' + id).then(data => {
      console.log(data.data)
      console.log(data.data.picture)
      setUser(data.data.pharmacy_name)
      console.log(data.data.duration)
      setDes(data.data.duration);
      setDay(data.data.holiday);
      console.log(day)
      setNight(data.data.night_shift)
      setSrc(('https://dani2.pythonanywhere.com/' + data.data.picture)); console.log(id);
    });
    // setid(localStorage.getItem('id'))
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let id = auth;
    console.log(id);
    console.log(JSON.stringify({ 'duration': des, 'holiday': day, "night_shift": night }));

    await axios.put('https://dani2.pythonanywhere.com/pharmacy/' + id+'/',
      JSON.stringify({ 'duration': des, 'holiday': day, "night_shift":night }),
        {
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
          withCredentials: true
        }
      ) .then((data) => {
        console.log(data.data);
          console.log(data.data.night_shift)
          console.log(data.data.picture)
          console.log(data.data.duration)
          setDes(data.data.duration);
          setDay(data.data.holiday);
        console.log(data.data.holiday);
          console.log(day);
          setNight(data.data.night_shift)
        setSrc(('https://dani2.pythonanywhere.com/' + data.data.picture)); console.log(id);
        });
     //setSrc(response.src);

    
  }


const [medicine,setMedicine]=useState('');
const [avb,setAvb]=useState(false);
const [alternative,setAlternative]=useState('');
const [alternativeavb,setAlternativeavb]=useState(false);

const [des,setDes]=useState('');

const [day,setDay]=useState('');
const [night,setNight]=useState('');

const [src,setSrc]=useState(null);

const deleteHundle=async (e)=>{
    e.preventDefault();
    await axios.put('url', JSON.stringify({ medicine: medicine, avb: avb, alternative: alternative, alternativeavb: alternativeavb }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
}).then(alert("done"))
}
// const deleteHundle= (e)=>{
//     console.log(JSON.stringify({ medicine: medicine, avb: avb, alternative: alternative, alternativeavb: alternativeavb }))
// }
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const submitFile = () => {
      // let id = auth;
      console.log(id);
      console.log(file)
      if (file === null) {
        console.log("No file selected");
        return;
      }
        let formData = new FormData();
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
        formData.append("file", file);
      
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      axios.put('https://dani2.pythonanywhere.com/pharmacy/' + id + '/', {picture :file}, {
            headers: {
          "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*" 
            },
        })
            .then((response) => {
                console.log(response.data);
              setSrc(('https://dani2.pythonanywhere.com/' + response.data.picture))
            })
            .catch((error) => {
                console.log(error);
            });}



  return (
    <div className="my-accountt">
      <div className="sidebarr">
        <a className="map-parentt" href="/map">
          <div className="mapp">Map</div>
          <div className="ellipsee" />
          <img
            className="iconmapslocal-library-24px"
            alt=""
            src="/iconmapslocal-library-24px.svg"
          />
        </a>
        <div className="account-parentt">
          <a className="accountt" href="/signup/US">Account</a>
          <div className="ellipse11" />
          <img className="group-iconn" alt="" src="/group.svg" />
        </div>
      </div>
      <div className="navigationn">
        <div className="top-barr">
          <div className="menuu">
            <div className="userr">
              <h2 className="michel-makdisii" id="michel Makdisi">
               {user}
              </h2>
              <div className="user11">Pharmacy</div>
              <img className="group-icon11" alt="" src="/group1.svg" />
            </div>
            <img className="reload-iconn" alt="" src="/reload.svg" />
          </div>
        </div>
        <div className="logo-bar-darkk">
          <a className="groupp">
            <img className="help-me-logoo" alt="" src="/help-me-logo.svg" />
            <div className="help-mee">Help ME</div>
          </a>
        </div>
      </div>
      <div className="bodyy">
              <div style={{ position: "relative", borderRadius: "1.77px", backgroundColor: "#fff", boxShadow: "0px 11.797619819641113px 14.75px rgba(0, 0, 0, 0.05), 0px 0px 3.54px rgba(0, 0, 0, 0.15), 0px 2.3595240116119385px 2.36px rgba(0, 0, 0, 0.25)", width: "100%", height: "240px", overflow: "hidden", textAlign: "center", fontSize: "12px", color: "#fff", fontFamily: "Inter", }}>
                  <div style={{ position: "absolute", top: "66px", left: "79px", borderRadius: "4px", backgroundColor: "#363636", border: "1px solid #5b5b5b", boxSizing: "border-box", width: "929px", height: "144px", overflow: "hidden", }}>
                      <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(255, 255, 255, 0)", width: "929px", height: "72px", overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                          <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                              <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                  <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Medicine name</div>
                              </div>
                          </div>
                          <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                              <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                  <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Available</div>
                              </div>
                          </div>
                          <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                              <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                  <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Alternative medicine name</div>
                              </div>
                          </div>
                          <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                              <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                  <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Available</div>
                              </div>
                          </div>
                      </div>
                      <div style={{ position: "absolute", top: "72px", left: "0px", backgroundColor: "rgba(255, 255, 255, 0)", width: "929px", height: "72px", overflow: "hidden", color: "#9e9da2", }}>
                          <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "73px", height: "72px", }}>
                              <div style={{ position: "absolute", top: "18.5px", left: "16.5px", width: "40px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", boxSizing: "border-box", alignItems: "center", justifyContent: "center", }}>
                                  <img style={{ position: "relative", width: "15px", height: "15px", }} alt="" src="Union.svg" onClick={deleteHundle} />
                              </div>
                          </div>
                          <div style={{ position: "absolute", top: "0px", left: "73px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "160px", height: "72px", }}>
                              <div style={{ position: "absolute", top: "18px", left: "28px", width: "104px", height: "36px", overflow: "hidden", }}>
                                  <input type="text" style={{ position: "absolute", top: "0px", left: "12px", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", width: "200px", height: "42px", }} placeholder="Enter medicine name" onChange={(e) => setMedicine(e.target.value)} />
                              </div>
                          </div>
                          <div style={{ position: "absolute", top: "0px", left: "233px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                              <div style={{ position: "absolute", top: "21px", left: "0px", width: "214px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", boxSizing: "border-box", alignItems: "center", justifyContent: "center", }}>
                                  <input type="checkbox" onChange={(e) => setAvb(e.target.value)} style={{ position: "relative", borderRadius: "2px", border: "1px solid #9e9da2", boxSizing: "border-box", width: "10px", height: "10px", }} />
                              </div>
                          </div>
                          <div style={{ position: "absolute", top: "0px", left: "465px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                              <div style={{ position: "absolute", top: "18px", left: "0px", width: "214px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", boxSizing: "border-box", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                  <input type="text" onChange={(e) => setAlternative(e.target.value)} style={{ flex: "1", position: "relative",top:'-10px', lineHeight: "50%", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", }}placeholder="Enter alternative name" />
                              </div>
                          </div>
                          <div style={{ position: "absolute", top: "0px", left: "697px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                              <div style={{ position: "absolute", top: "21px", left: "0px", width: "214px", height: "30px", overflow: "hidden", }}>
                                  <input type="checkbox" onChange={(e) => setAlternativeavb(e.target.value)} style={{ position: "absolute", top: "10px", left: "102px", borderRadius: "2px", border: "1px solid #9e9da2", boxSizing: "border-box", width: "10px", height: "10px", }} />
                              </div>
                          </div>
                      </div>
                  </div>
                  <b style={{ position: "absolute", height: "7.92%", width: "16.93%", top: "10.42%", left: "3.68%", fontSize: "15px", lineHeight: "130%", display: "inline-block", fontFamily: "'DM Sans'", color: "#000", }}>Your Pharmacy content :</b>
              </div>
    
              <div style={{ position: "relative", borderRadius: "1.77px", backgroundColor: "#fff", boxShadow: "0px 11.797619819641113px 14.75px rgba(0, 0, 0, 0.05), 0px 0px 3.54px rgba(0, 0, 0, 0.15), 0px 2.3595240116119385px 2.36px rgba(0, 0, 0, 0.25)", width: "100%", height: "251px", overflow: "hidden", textAlign: "center", fontSize: "15px", color: "#000", fontFamily: "'DM Sans'", }}>
                  <b style={{ position: "absolute", height: "7.57%", width: "22.77%", top: "9.96%", left: "4.95%", lineHeight: "130%", display: "inline-block", }}>Your  Pharmacy Photos :</b>
                  <div style={{ position: "absolute", height: "59.36%", width: "24.66%", top: "26.29%", right: "9.74%", bottom: "14.34%", left: "45.6%", borderRadius: "9px", backgroundColor: "#e0e0e0", }}>
                      <b style={{ position: "absolute", height: "43.62%", width: "40.5%", top: "28.19%", left: "30%", lineHeight: "130%", display: "flex", alignItems: "center", }}>
                          <span  style={{ lineBreak: "anywhere", width: "100%", }}>
                              <p style={{ margin: "0", }}>Add</p>
                              <p style={{ margin: "0", }}>Photos</p>
                              <input type="file" onChange={handleFileChange} />
                              <button onClick={submitFile}>Upload</button>
                          </span>
                      </b>
                  </div>
                  <img style={{ position: "absolute", top: "59.5px", left: "79px", width: "207.5px", height: "158.5px", }} alt="you ph pic" src={src} />
                  {/* <img style={{ position: "absolute", top: "59.5px", left: "306px", width: "206.5px", height: "158.5px", }} alt="" src="Group 3733.svg" /> */}
              </div>
              <div style={{ position: "relative", borderRadius: "1.77px", backgroundColor: "#fff", boxShadow: "0px 11.797619819641113px 14.75px rgba(0, 0, 0, 0.05), 0px 0px 3.54px rgba(0, 0, 0, 0.15), 0px 2.3595240116119385px 2.36px rgba(0, 0, 0, 0.25)", width: "30%", height: "216px", overflow: "hidden", textAlign: "center", fontSize: "15px", color: "#000", fontFamily: "'DM Sans'", }}>
                  <b style={{ position: "absolute", height: "8.8%", width: "32.12%", top: "11.57%", left: "4.35%", lineHeight: "130%", display: "inline-block", }}>Your description:</b>
                  <div style={{ position: "absolute", height: "64.35%", width: "80%", top: "24.07%", right: "4.35%", bottom: "11.57%", left: "15.65%", borderRadius: "5px", backgroundColor: "#ececec", display: "flex", flexDirection: "row", padding: "15px 25px", boxSizing: "border-box", alignItems: "flex-start", justifyContent: "flex-start", color: "#747474", fontFamily: "Poppins", }}>
                      <input type="description" value={des} onChange={(e) => setDes(e.target.value)} style={{ position: "relative", lineHeight: "15px", width:'90%' }} placeholder={des}/>
                  </div>
              </div>
              <div style={{ position: "relative", top: "-203px", left: "500px", lineHeight: "20px" }}>
                  <image class="bt-singup">Change Location From Map </image>
              </div>

              <div className="select" style={{ position: "relative", top: "-153px", left: "500px", lineHeight: "20px" }}>
                  <label style={{ position: "relative" ,left:"-700px" }} >holyday</label>
          <select class="input" onChange={(e) => setDay(e.target.value)} value={day} >
                      <option class="text" value="SU"> Sunday   </option>0
                      <option class="text" value="MA">Monday</option>
                      <option class="text" value="TU">Tuesday</option>
                      <option class="text" value="WE">Wednesday</option>
                      <option class="text" value="TH">Thursday</option>
                      <option class="text" value="FR">Friday</option>
                      {/* <option class="text" value="Saturday">Saturday</option> */}
                  </select><br /><div style={{ position: "relative", left: "-700px" }}>
                  <label for="vehicle1"> Night shift</label><br />
            <input type="checkbox" checked={night} id="Night" onChange={(e) => setNight(e.target.value)}  /></div>
              </div>

        

        
        
        
        <div className="buttons-wrapperr">
          <div className="buttonss">
            <Button className="buttonn" variant="primary" onClick={handleSubmit}>
              Save
            </Button>
            <Button
              className="button11"
              variant="outline-secondary"
              onClick={() => {
                axios.post('https://dani2.pythonanywhere.com/myprofile/logout/', {
                  headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
                  withCredentials: true
                }).then(localStorage.clear()).then(window.location.href = "/")
              }}
            >
              logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPh;
