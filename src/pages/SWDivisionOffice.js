import React from 'react';
import "./SWDivisionOffice.css";
import pradeepy from './images/PY Adj Prof - Pradeep_Yammiyavar_0.jpg';
import prabhur from './images/Prabhu1 - Prabhu R.jpg';
import ridhima from './images/Ridhima_Photo - Ridhima Tewari.jpg';
import GopalSP from './images/Gopal Parashari Pic - Gopal Sharan Parashari.jpg';
import prahladJoshi from './images/Dr. Prahlad Joshi.jpg';
import vcprakash from './images/vs prakash.jpg';
import { NavLink } from 'react-router-dom';
import Ramesh from '../Img/DSC_4417 copy - Surya Prakash Ramesh.jpg';
import Rajesh from "../Img/rajesh.jpg"
import Surya from "../Img/IMG_5363 - Surya Pratap Singh.jpeg";
import sudheer from './images/sudheer_bio - Prof. Sudheer.jpg';
import ramjee from './images/r1.jpeg';
import { motion } from 'framer-motion';
export default function SWDivisionOffice() {
    return (
        <>
            <motion.div className='sw-division-office' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='sw-division-office-1' style={{ display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap" }}>
                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                        <div className='dean' style={{padding: "25px", height: "350px"}}>
                            <div className='first-info' style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src={ramjee} alt='loading'></img>
                                <a href='https://iitdh-my.sharepoint.com/:w:/g/personal/pradeepyammi_iitdh_ac_in/ETk5ATyitbNGsH3bi7wF4UIB_esJbA4yfOgWmWxwP1dr7Q?rtime=H4caIQHb20g'> <p className='name' style={{ color: "#4338ca" }}>Prof. Ramjee Repaka</p></a>
                                <p className='designation' style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }}>Dean, Student Welfare</p>
                                <p className='about-des' style={{ textAlign: "center"}}>The Dean of<span style={{ fontWeight: "600" }}> Student Welfare</span>  is responsible to the Director on all matters related to Students Welfare. The Dean is assisted by a team of Associate Deans & Officers.</p>
                            </div>
                        </div>
                        {/* width: "280px",height:"1120px", */}
                        {/* <div className='dean'>
                            <div className='first-info' style={{ display: "flex", flex: "1", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                            <div className='sw-organo-division' style={{ display: "flex", flexDirection: "column", padding: "30px", gap: "5px", alignItems: "center", justifyContent: "center" }}>
                            <NavLink to="/sw_division_organogram" className="link-class" style={{ backgroundColor: "#f5f5f5", padding: "30px", width: "120px", height: "120px", borderRadius: "50%", textAlign: "center", border: "1px solid #a21caf" }} >
                            <p style={{ color: "#a21caf", marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }} className='click-here'>Click</p>
                                        <p style={{ color: "#a21caf", marginTop: "10px", fontSize: "1.1rem", fontWeight: "600" }} className='click-here'>Here</p>
                                    </NavLink>
                                    <p className='designation' style={{ fontSize: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3px" }}>Student Welfare <p>Team</p></p>
                                    <p style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "20px" }} className='designation'> Organogram</p>

                                    </div>
                                    </div>
                                    </div> */}

                    </div>

                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                                    <div className='dean' style={{padding: "25px", height: "350px"}}>
                                        <div className='first-info' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "15px" }}>
                                            <img style = {{ width: "120px", height: "auto"}} src={Ramesh} alt='loading'></img>
                                            <a href='#'> <p className='name' style={{ color: "#4338ca" }}>Prof. Surya Prakash Ramesh</p></a>
                                            <p className='designation' style={{ color: "rgb(51, 72, 120)", fontWeight: "600", marginBottom: "70px" }}>Associate Dean, Socio-cultural activities</p>
                                            <p></p>
                                        </div>
                                    </div>
                        <div className='dean' style={{padding: "25px", height: "350px"}}>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src ={Surya} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Prof. Surya Pratap Singh</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Associate Dean - Hostel and Mess</p>
                                <p style={{ textAlign: "center" }} className='about-des'>Hostel management & Maintenance; Allocation, Rules &amp; Regulation</p>
                            </div>
                        </div>
                        <div className='dean' style={{padding: "25px", height: "350px"}}>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src ={Rajesh} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Prof. Rajeshwara Rao M</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600",textAlign: "center" }} className='designation'>Associate Dean - Gymkhana, Sports, Clubs and Technology</p>
                                <p style={{ textAlign: "center" }} className='about-des'>Students Technical &amp; Cultural Councils; Gymkhana Facilities; Sports, NSS,NSO,NCC</p>
                            </div>
                        </div>
                        <div className='dean' style={{padding: "25px", height: "350px"}}>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src={ridhima} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Dr. Ridhima Tewari</p>
                                <div style={{ color: "rgb(51, 72, 120)", fontWeight: "600",textAlign:"center", alignItems: "center",}} className='designation'>Associate Dean - Wellness & Female Students</div>
                                <p style={{ textAlign: "center" }} className='about-des'>Wellness Centre, Health and Counselling facilities, Female Students Welfare.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>

                    </div> */}
                    {/* <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}> */}
                        {/* <div className='dean'>
                            <div className='first-info' style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src={prahladJoshi} alt='loading'></img>
                                <p style={{ color: "#4338ca", display: "flex", justifyContent: "center", flexWrap: "wrap" }} className='name'>Group Captain Dr. Prahlad S <p>Joshi</p></p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Students Welfare, Advisor</p>
                            </div>
                        </div> */}
                        {/* <div className='dean'>
                            <div className='first-info' style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img style = {{ width: "120px", height: "auto"}} src={vcprakash} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Col. V. C. Prakash</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='about-des'>Students Welfare, Advisor</p>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </motion.div>
        </>
    )
}
