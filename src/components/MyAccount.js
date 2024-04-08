import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./MyAccount.css";
import axios from "axios";
import { useEffect, useState } from "react";
const MyAccount = () => {
 
  const id = localStorage.getItem('id');

  useEffect(() => {
    // let id=auth;

    console.log(id);
    axios.get('https://dani2.pythonanywhere.com/myprofile/' + id).then(data => {
      console.log(data.data)
      setPwd(data.data.password);
      setUser(data.data.username)
      setEmail(data.data.email);
      setName(data.data.username)
      setPhone(data.data.phone);
    });

  }, [id]);
  console.log(id);




   const [user,setUser]=useState('userName');

   const [pwd,setPwd]=useState('');

   const [email,setEmail]=useState('');

   const [name,setName]=useState('');

   const [phone,setPhone]=useState('');

   const [file,setFile]=useState(null);


   const [src,setSrc]=useState(null);

  // const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const submitFile = () => {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   axios.post("/api/upload", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  const submitFile = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.put('https://dani2.pythonanywhere.com/myprofile/' + id+'/', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    const response = await axios.put('https://dani2.pythonanywhere.com/myprofile/' + id+'/',
      JSON.stringify({ password: pwd, username:name, email:email, phone:phone }),
      {
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
        withCredentials: true
      }
      ).then(response => response.data)
        .then((data) => {
           return data;
        });
     setSrc(response.src);

    
  }




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
          <b className="accountt">Account</b>
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
              <div className="user11">User</div>
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
        <div className="x1-cardd">
          <b className="change-your-passwordd">Change your password:</b>
          <Form.Group className="wrapperr">
            <Form.Control type="password" placeholder="********" onChange={(e) => setPwd(e.target.value)} />
          </Form.Group>
        </div>
        <div className="x1-card11">
          <b className="change-your-phonee">Change your Phone number:</b>
          <Form.Group className="containerr">
            <Form.Control type="text" placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
        </div>
        <div className="x1-card22">
          <b className="change-your-passwordd">Change your name:</b>
          <Form.Group className="wrapperr">
            <Form.Control type="text" placeholder={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </div>
        <div className="x1-card33">
          <b className="change-your-passwordd">Change your E-mail:</b>
          <Form.Group className="wrapperr">
            <Form.Control type="email" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
        </div>
        {/* <b className="change-your-profilee">Change your profile pic</b> */}
        <div className="x1-card44" >
        
          {/* <iframe src="https://images.unsplash.com/photo-1432804567890-72a5be5fcbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"style={{position:"relative",width:"100%",height:"100%",top:"-50px"}}  ></iframe>
          <input type="file" id="img" name="img" accept="image/*" style={{position:'relative',top:'-50px' ,left:"400px"}}/> */}
{/*           
          <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setFile(e.target.value)} />
            {src && (
            <img src={src} alt="Submitted file" />
            )} */}
          <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={submitFile}>Upload</button>
          <img style={{  width: "207.5px", height: "158.5px", top:'50px', }} alt="you ph pic" src={src} />  
        
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
                }).then(localStorage.clear()).then(window.location.href = "/")}}
            >
              logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
