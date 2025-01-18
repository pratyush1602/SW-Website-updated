import React from "react";
import Scrollevent from "./Scrollerevent";

import "./Counselling.css";
import { motion } from 'framer-motion';

import yd from "./images/yourdost.png";
import te from "./images/tele-manas-mental-health-service1.jpg"

import Pasham from "./copy_of_mentor_photos/IMG_1245_-_Pasham_Pardeev_Narsi_Reddy.jpg"
import Utkarsh from "./copy_of_mentor_photos/IMG_20240912_230600 - UTKARSH RAJ.jpg"
import Rituraj from "./copy_of_mentor_photos/Rituraj_me23ms004 - Rituraj Kumar.jpg"
import Jan from "./copy_of_mentor_photos/IMG_20241004_010834 - Janagesh R.jpg"
import Juhi from "./copy_of_mentor_photos/IMG-20240907-WA0035 - JUHI KUMARI.jpg"
import Jaswika from "./copy_of_mentor_photos/InShot_20241004_111245765 - MARYADA JASWIKA.jpg"
import Meegada from "./copy_of_mentor_photos/IMG_20241005_113920 - MEEGADA SAI SINDHUJA.jpg"
import Avikal from "./copy_of_mentor_photos/Photo - AVIKAL SRIVASTAVA.jpg"
import Midhu from "./copy_of_mentor_photos/IMG20240907121652 - MIDDEPOGU MANVITHA.jpg"

import Harsh from "./copy_of_mentor_photos/IMG20230514225607 - Harsh Vardhan Chowdhary.jpg"

function Counselling() {
    return (
        <div className="main">
            {/* <div className="nah"></div> */}
            <div style={{ borderLeft: "5px solid #312e81", paddingLeft: "10px", fontSize: "1.5rem", fontWeight: "600", color: "rgb(30, 64, 175)" }}  >  Counselling</div>

            {/* <div>
                <h1>COUNSELLING CENTRE</h1>
            </div> */}
            <div className="scroll">

                <Scrollevent />
            </div>


            <span style={{ fontSize: "1.3rem" }}>The Counselling Center at IIT DHARWAD provides assistance and counselling service to all residents of the campus.</span>


            <p style={{ fontSize: "1.3rem" }}>There are two options available to anyone who wishes to seek counselling services:</p>
            <div className="box">

                <div className="outerbox">

                    <div className="box2">
                        <img src={yd} alt="yourdost" />
                    </div>
                    <div className="box3">
                        <div className="yourdost">
                            <a href="https://www.iitdh.ac.in/sites/default/files/2023-10/YourDOST_steps_2023_07_19.pdf">
                                <strong style={{ fontSize: "20px" }}>YourDOST</strong>
                            </a>
                        </div>
                        <div>
                            IIT Dharwad in cooperation with YourDOST -- a professional online counselling service, provides a direct link to anyone at IIT Dharwad to contact them and seek their services without any charge.
                        </div>
                        <div className="btnyd">
                            <a href="https://www.iitdh.ac.in/sites/default/files/2023-10/YourDOST_steps_2023_07_19.pdf"> Connect With YourDost</a>
                        </div>
                    </div>

                </div>


                <div className="outerbox">

                    <div className="box4">
                        <img src={te} alt=" Tele Manas" />
                    </div>

                    <div className="box5">
                        <div className="telemanas">
                            <a href="https://telemanas.mohfw.gov.in/home"> <strong style={{ fontSize: "20px" }}>TeleMANAS</strong></a>
                        </div>
                        <div>
                            TeleMANAS works with a network of Hubli-Dharwad based mental health hospitals and institutions to provide counselling both in-person and over the telephone. Anyone can avail this service directly without having to go through the IIT DHARWAD counselling center.
                        </div>
                        <div className="btntele">
                            <a href="https://telemanas.mohfw.gov.in/home"> Connect With TeleMANAS</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='counselling-outerbox'>
                <div className='counselling' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='facetoface'>     <h3 style={{ marginBottom: "12px", fontSize: "1.3rem" }} >FACE TO FACE COUNSELLING</h3>
                        <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "1px", marginBottom: "18px" }}></div>
                        <p>You may choose any counselor that you prefer, and book your appointment online using the links below.
                            Upon being granted an appointment, you may directly approach the counselor without having to sign any registers at the Health Center.</p>

                        <div style={{ marginTop: "40px" }}>

                            <div style={{ display: "flex", gap: "300px", fontSize: "1.1rem" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Pradeep Yammiyavar</p>
                                        <h4>Pg.D.MH PhD</h4>
                                    </div>
                                </div>

                                <div className="appt" style={{ marginTop: "5px" }}>
                                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2kkN9_v0ypAzAi8gCHQc1JFwFz7JdGrz4Ytog55w2QRrGwzcmVdvaLiSLc2avZY0dsK6u6NEF8">BOOK APPOINTMENT</a>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "278px", marginTop: "10px", fontSize: "1.1rem" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Ms. Vijayalakshmi Peri</p>
                                        <h4>M.A. Counseling Psychology</h4>
                                    </div>
                                </div>

                                <div className="appt" style={{ marginTop: "5px" }}>
                                    <a href="https://yourdost.com/auth/sign-in?serviceId=1&next=https:%2F%2Fyourdost.com%2Fin-person-counselling%2Ff2f%2Fiitdh">BOOK APPOINTMENT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>

            <div className='counselling-outerbox'>
                <div className='counselling' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='facetoface'>     <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }} >COUNSELLING</h3>

                        <div>
                            <div className='alumni-fs-fs'>    <h3 style={{ marginTop: "20px", fontSize: "1.3rem" }} >ASSOCIATE DEAN, Health</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "10px", marginBottom: "18px" }}></div>
                        </div>
                        <div style={{ display: "flex", gap: "330px", fontSize: "1.1rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ridhima Tewari</p>
                                    <h4>Associate Dean, Students Welfare</h4>
                                    <h4>adean.sww@iitdh.ac.in</h4>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='alumni-fs-fs'>    <h3 style={{ marginTop: "18px", fontSize: "1.5rem" }} >FACULTY IN CHARGE</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "10px", marginBottom: "3px" }}></div>
                        </div>
                        <div style={{ marginTop: "15px" }}>

                            <div style={{ display: "flex", gap: "300px", fontSize: "1.2rem" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Pradeep Yammiyavar</p>
                                        <h4>fic.sw.wellness@iitdh.ac.in</h4>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "278px", marginTop: "10px", fontSize: "1.2rem" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rajshekar K</p>
                                        <h4>fic.sw.wellness@iitdh.ac.in</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>


            <div className='counselling-outerbox'>
                <div className='counselling' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='facetoface'>     <h2 style={{ marginBottom: "20px", fontSize: "1.7rem" }} >Student Counselling Mentors</h2>
                        <div className="name-box">

                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Pasham} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Pasham Pardeev Reddy</div>
                                    <div className="email">220010040@iitdh.ac.in</div>
                                </div>



                            </div>
                            <div className="mentorsdata">
                            <div className="mentorimg">
                                    <img src={Utkarsh} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Utkarsh Raj</div>
                                    <div className="email">cs23bt028@iitdh.ac.in</div>
                                </div>
                                
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Avikal} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Avikal Srivastava</div>
                                    <div className="email">is23bm023@iitdh.ac.in</div>
                                </div>

                            </div>
                            <div className="mentorsdata">
                                <div className="mentorimg">
                                    <img src={Midhu} alt="" />
                                </div>

                                <div className="names">
                                    <div className="name">Middepogu Manvitha </div>
                                    <div className="email">cs23bt061@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Rituraj} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Rituraj Kumar</div>
                                    <div className="email">me23ms004@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Jaswika} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Jaswika Maryada</div>
                                    <div className="email">cs23bt013@iitdh.ac.in </div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Jan} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Janagesh R</div>
                                    <div className="email">225100015@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Harsh} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Harsh Vardhan Chowdhary</div>
                                    <div className="email">210030013@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Juhi} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Juhi Kumari </div>
                                    <div className="email">mc23bt002@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={Meegada} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Meegada Sai Sindhuja </div>
                                    <div className="email">me23bt027@iitdh.ac.in</div>
                                </div>
                            </div>
                            <div className="mentorsdata">

                                <div className="mentorimg">
                                    <img src={te} alt="" />
                                </div>
                                <div className="names">
                                    <div className="name">Neeli Deekshith </div>
                                    <div className="email">210020032@iitdh.ac.in</div>
                                </div>
                            </div>
                            {/* <div className="names">
                                <div className="name">Srihari K G</div>
                                <div className="email">210030035@iitdh.ac.in</div>
                            </div> */}
                            {/* <div className="names">
                                <div className="name">E.S.S.SANTOSH</div>
                                <div className="email">220020021@iitdh.ac.in</div>
                            </div> */}
                            {/* <div className="names">
                                <div className="name">Vedant Hemant Ghodke</div>
                                <div className="email">220010061@iitdh.ac.in</div>
                            </div> */}
                            {/* <div className="names">
                                <div className="name">Vidhi Kadam</div>
                                <div className="email">me23bt043@iitdh.ac.in</div>
                            </div> */}
                            {/* <div className="names">
                                <div className="name">D.GOUTHAMEE REDDY</div>
                                <div className="email">ee23bt046@iitdh.ac.in</div>
                            </div> */}
                            {/* <div className="names">
                                <div className="name">Prachi Prasoon</div>
                                <div className="email">225100029@iitdh.ac.in</div>
                            </div> */}



                        </div>
                    </div>
                    <hr></hr>

                </div>





            </div >

        </div>


    )
}

export default Counselling;