import React from "react";
import HomeHeader from "./HomeHeader"
import Ontheway from "../img/Ontheway.svg"
import benefit1 from "../img/benefit1.svg"
import benefit2 from "../img/benefit2.svg"
import benefit3 from "../img/benefit3.svg"
import img1 from "../img/img1.svg"
import img2 from "../img/img2.svg"
import img3 from "../img/img3.svg"
import Logo from "../img/Logo.svg"
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"
import instagram from "../img/instagram.svg"
import youtube from "../img/youtube.svg"


const Home=()=>{
    return(
        <div  class="body">
            <HomeHeader/>
            <div className="container" >
                <div>
                    <h1 class="h1">
                    HELP ME is a website that provides some general services to all users
                    </h1>
                </div>

                <div>
                    <p class="p">
                    Its simple and its free way to find almost any location you necessary want
                    </p>
                </div>

              

                <div>
                    <img src={Ontheway} class="onthewy"/>
                </div>
              
                <div class="BTryLogin">
               <div><button type="submit"  id="try"><p class="ptry">Try it out</p></button></div> 
               <div><button type="submit"  id="login"><p class="plogin">Login</p> </button></div> 
                </div>

                <div>
                    <p class="p2"> What is the services that <span class="helpmecolor">Help Me</span> provides</p>
                </div>

                <div id="card">
                    <div class="card1">
                        <div><div class="card11">
                            <div class="helpme">Help Me</div>
                            </div></div>
                        
                        <div class="card2">
                            <div class="helpme">Help Me</div>
                        </div>
                        <div class="card3">
                            <div class="card33">
                                 <div class="helpme">Help Me</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">

                </div>
            </div>
            <div><p class="p3"><span class="helpmecolor">Help Me</span>BENEFITS</p> </div> 
            <div className="container" class="benefit1">
                <img src={img1} class="img1"/>
                <img src={benefit1} class="imgbenefit1"/>
                <p class="pbenef1">Save a lot of time</p>
                <p class="p2benef1">You can search in a faster way through advanced filters.</p>
            </div>

            <div className="container" class="benefit2">
                <img src={img2} class="img2"/>
                <img src={benefit2} class="imgbenefit2"/>
                <p class="pbenef2">Save cash</p>
                <p class="p2benef2">By using our free services to find everything you need with one click.</p>
            </div>

            <div className="container" class="benefit3">
                <img src={img3} class="img3"/>
                <img src={benefit3} class="imgbenefit3"/>
                <p class="pbenef3">Updated information 24/7</p>
                <p class="p2benef3">All the places you will find are real and valid.</p>
            </div>

            <div class="footer">
                <div class="help">
                     < img src={Logo} alt='logo' id='logo' />
                     <h1 class="help-me" style={{left: "102.31px", top: "13.51px"}}>Help Me</h1>
                </div>

                <div id="learn">
                    <p class="learn">Learn More</p>
                    <p class="about">About us Environment Jobs Privacy Policy Contact Us</p>
                </div>
               
                <div id="contact">
                    <p class="contact">Contact Us</p>
                   <div id="f">
                        <p class="f">Front-end:</p>
                        <p class="phone">09XXXXXXXX</p>
                   </div>

                    <div id="b">
                        <p class="b">Back-end:</p>
                        <p class="phone">09XXXXXXXX</p>
                    </div>
                </div>
              
                <div id="social">
                    <p class="social">Social</p>
                    <div class="">
                        <img src={facebook} style={{ position: "absolute",left: "5.13%"}}/>
                        <img src={instagram} style={{ position: "absolute",left: "15.13%"}}/>
                        <img src={twitter} style={{ position: "absolute",left: "30.13%"}}/>
                        <img src={youtube} style={{ position: "absolute",left: "45.13%"}}/> 
                    </div>
                </div>
                <div >
                    <hr class="hr"></hr>
                </div>
                <div class="end">
                © 2023 IT_Project_Y4 | All Rights Reserved
                </div>

            </div>

        </div>

    )
}
export default Home