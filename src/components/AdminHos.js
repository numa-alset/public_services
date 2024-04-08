    import "bootstrap/dist/css/bootstrap.min.css";
    import { Form, Button } from "react-bootstrap";
    import "./MyAccount.css";
    import axios from "axios";

    import { useEffect, useState ,useContext} from "react";
import AuthContext from "./contex/AuthProvider";

    const AdminHos =() => {
        //  axios.get('https://dani2.pythonanywhere.com/hospitals/' + id).then(data => {
        //         setDes(data.description);
        //         setDay(data.specialization);
        //         setSrc(data.picture);
        //     });
            //  setid(localStorage.getItem(id))
        
        //const [id, setid] = useState(localStorage.getItem('id'));
        const { auth } = useContext(AuthContext);
const id = localStorage.getItem('id');
        
        
        console.log(id);
        const [user, setUser] = useState('userName');
        // const [id, setid]=useState('')
        // setid(auth);
        const [pwd, setPwd] = useState();
        // console.log(id);
        useEffect(() => {
            // let id=auth;
            
             console.log(id);
            axios.get('https://dani2.pythonanywhere.com/hospitals/' + id).then(data => {
                console.log(data.data)
            setDes(data.data.description);
                setUser(data.data.hospital_name)
                setDay(data.data.ip_t);
                setSpec(data.data.specialization)
                setSrc(('https://dani2.pythonanywhere.com/' + data.data.picture))
            });
            
        }, [id]);
        const [email, setEmail] = useState('');

        const [name, setName] = useState('');

        const [phone, setPhone] = useState('');

        //const [file,setFile]=useState(null);


        //const [src,setSrc]=useState(null);
        // start 

        const handleSubmit = async (e) => {
            e.preventDefault();
        // let id = localStorage.getItem(id);
            // let id = auth;
            // console.log(id);
            await axios.put('https://dani2.pythonanywhere.com/hospitals/' + id+'/',
                JSON.stringify({ description: des, ip_t: day, specialization:spec }),
                {
                    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
                    withCredentials: true
                }
            ).then((data) => {
                console.log(data.data)
                    setDes(data.data.description);
                setUser(data.data.hospital_name)
                setSpec(data.data.specialization)
                setDay(data.data.ip_t);
                });



        }


        // const [travel, setTravel] = useState('');
        // const [from, setFrom] = useState('');
        // const [to, setTo] = useState('');
        // const [time, setTime] = useState('');

        const [des, setDes] = useState('');
        const [spec, setSpec] = useState('');

        const [day, setDay] = useState('');
        const [night, setNight] = useState('');

        const [src, setSrc] = useState(null);

        // const deleteHundle=async (e)=>{
        //     e.preventDefault();
        //     await axios.post('url', JSON.stringify({ medicine: medicine, avb: avb, alternative: alternative, alternativeavb: alternativeavb }), {
        //         headers: { 'Content-Type': 'application/json' },
        //         withCredentials: true
        // }).then(alert("done"))
        // }
        // const deleteHundle = (e) => {
        //     console.log(JSON.stringify({ travel: travel, from: from, to: to, time: time }))
        // }
        const [file, setFile] = useState(null);

        const handleFileChange = (event) => {
            setFile(event.target.files[0]);
        };

        const submitFile = () => {
            const formData = new FormData();
            formData.append("file", file);
            // let id = auth;
            // console.log(id);
          //  let id = localStorage.getItem(id);
            axios.put('https://dani2.pythonanywhere.com/hospitals/' + id, {picture:file}, {
                headers: {
                    "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*" 
                },
            })
                .then((data) => {
                    console.log(data);
                    setSrc(('https://dani2.pythonanywhere.com/' + data.data.picture))
                })
                .catch((error) => {
                    console.log(error);
                });
        }



        return (
            <div className="my-accountt">
                <div className="sidebarr">
                    <a className="map-parentt" href="/map2">
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
                                <div className="user11">Hospital</div>
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
                    {/* <div style={{ position: "relative", borderRadius: "1.77px", backgroundColor: "#fff", boxShadow: "0px 11.797619819641113px 14.75px rgba(0, 0, 0, 0.05), 0px 0px 3.54px rgba(0, 0, 0, 0.15), 0px 2.3595240116119385px 2.36px rgba(0, 0, 0, 0.25)", width: "100%", height: "240px", overflow: "hidden", textAlign: "center", fontSize: "12px", color: "#fff", fontFamily: "Inter", }}>
                        <div style={{ position: "absolute", top: "66px", left: "79px", borderRadius: "4px", backgroundColor: "#363636", border: "1px solid #5b5b5b", boxSizing: "border-box", width: "929px", height: "144px", overflow: "hidden", }}>
                            <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(255, 255, 255, 0)", width: "929px", height: "72px", overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                                    <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                        <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Travel name</div>
                                    </div>
                                </div>
                                <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                                    <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                        <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>From</div>
                                    </div>
                                </div>
                                <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                                    <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                        <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>to</div>
                                    </div>
                                </div>
                                <div style={{ alignSelf: "stretch", flex: "1", backgroundColor: "rgba(255, 255, 255, 0.05)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", }}>
                                    <div style={{ alignSelf: "stretch", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                        <div style={{ flex: "1", position: "relative", lineHeight: "130%", fontWeight: "600", }}>Time</div>
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
                                        <input type="text" style={{ position: "absolute", top: "0px", left: "12px", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", width: "200px", height: "42px", }} onChange={(e) => setTravel(e.target.value)} />
                                    </div>
                                </div>
                                <div style={{ position: "absolute", top: "0px", left: "233px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                                    <div style={{ position: "absolute", top: "21px", left: "0px", width: "214px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", boxSizing: "border-box", alignItems: "center", justifyContent: "center", }}>
                                        <input type="text" onChange={(e) => setFrom(e.target.value)} style={{ position: "absolute", top: "0px", left: "12px", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", width: "200px", height: "42px", }} />
                                    </div>
                                </div>
                                <div style={{ position: "absolute", top: "0px", left: "465px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                                    <div style={{ position: "absolute", top: "18px", left: "0px", width: "214px", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 12px", boxSizing: "border-box", alignItems: "flex-start", justifyContent: "flex-start", }}>
                                        <input type="text" onChange={(e) => setTo(e.target.value)} style={{ flex: "1", position: "relative", top: '-10px', lineHeight: "50%", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", }} />
                                    </div>
                                </div>
                                <div style={{ position: "absolute", top: "0px", left: "697px", backgroundColor: "rgba(255, 255, 255, 0)", borderTop: "1px solid #5b5b5b", borderLeft: "1px solid #5b5b5b", boxSizing: "border-box", width: "232px", height: "72px", }}>
                                    <div style={{ position: "absolute", top: "21px", left: "0px", width: "214px", height: "30px", overflow: "hidden", }}>
                                        <input type="text" onChange={(e) => setTime(e.target.value)} style={{ position: "absolute", top: "0px", left: "12px", lineHeight: "130%", display: "flex", alignItems: "center", justifyContent: "left", width: "200px", height: "42px", }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b style={{ position: "absolute", height: "7.92%", width: "16.93%", top: "10.42%", left: "3.68%", fontSize: "15px", lineHeight: "130%", display: "inline-block", fontFamily: "'DM Sans'", color: "#000", }}>Your Pharmacy content :</b>
                    </div> */}


                    <div style={{ position: "relative", borderRadius: "1.77px", backgroundColor: "#fff", boxShadow: "0px 11.797619819641113px 14.75px rgba(0, 0, 0, 0.05), 0px 0px 3.54px rgba(0, 0, 0, 0.15), 0px 2.3595240116119385px 2.36px rgba(0, 0, 0, 0.25)", width: "80%", height: "251px", overflow: "hidden", textAlign: "center", fontSize: "15px", color: "#000", fontFamily: "'DM Sans'", }}>
                        <b style={{ position: "absolute", height: "7.57%", width: "22.77%", top: "9.96%", left: "4.95%", lineHeight: "130%", display: "inline-block", }}>Your  Hospital Photos :</b>
                        <div style={{ position: "absolute", height: "59.36%", width: "24.66%", top: "26.29%", right: "9.74%", bottom: "14.34%", left: "45.6%", borderRadius: "9px", backgroundColor: "#e0e0e0", }}>
                            <b style={{ position: "absolute", height: "43.62%", width: "40.5%", top: "28.19%", left: "30%", lineHeight: "130%", display: "flex", alignItems: "center", }}>
                                <span style={{ lineBreak: "anywhere", width: "100%", }}>
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
                            <input type="description" onChange={(e) => setDes(e.target.value)} style={{ position: "relative", lineHeight: "15px", width: '90%' }} placeholder={des} />
                        </div>
                    </div>
                    <div style={{ position: "relative", top: "-203px", left: "500px", lineHeight: "20px" }}>
                        <image class="bt-singup">Change Location From Map </image>
                    </div>

                    <div className="select" style={{ position: "relative", top: "-153px", left: "500px", lineHeight: "20px" }}>
                        <label style={{ position: "relative", left: "-700px" }} >Type</label>
                        <select class="input" onChange={(e) => setDay(e.target.value)} value={day}>
                            <option class="text" value="GO"> GOVERMENT  </option>
                            <option class="text" value="PR">PRIVATE</option>
                        
                        </select><br />
                        <label style={{ position: "relative", left: "-700px" }} >specialization</label>
                        <select class="input" onChange={(e) => setSpec(e.target.value)} value={spec}>
                            <option class="text" value="CART"> CANCERANDRADIOTHERAPY  </option>
                            <option class="text" value="CHILDREN">CHILDREN</option>
                            <option class="text" value="HAAB">HARTANDBODY</option>
                            <option class="text" value="SIAB">SICOANDBRANI</option>
                            <option class="text" value="BRAN">BRAINANDNARROW</option>
                            <option class="text" value="ALSP">ALLSPECIALIEST</option>

                        </select><br />
                        {/* <div style={{ position: "relative", left: "-700px" }}>
                            <label for="vehicle1"> Night shift</label><br />
                            <input type="checkbox" id="Night" onChange={(e) => setNight(e.target.value)} /></div> */}
                    </div>






                    <div className="buttons-wrapperr" style={{ top: '550px' }}>
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

    export default AdminHos;
