import React, { useEffect } from 'react';
import './Gymkhana.css';
import image1 from './images/gymkhana1.jpg';
import image2 from './images/gymkhana2.jpg';
import image3 from './images/gymkhana3.jpg';
import image4 from './images/gymkhana4.jpg';
import raviSG from './images/Ravi - Ravi Ghalimath.jpg';
import keerthiK from './images/Keerthi Kumar.jpeg';
import GRamesh from './images/Ramesh - Ramesh G.png';
import image5 from './images/sport5.png';
import techClub from './images/technical1.jpg';
import sport1 from './images/sports1.jpg';
import sport2 from './images/sports2.jpg';
import sport3 from './images/sports3.jpg';
import img1 from './images/NSS.jpg';
import img2 from './images/NSS1.jpg';
import cultureClub1 from './images/homeimage8.jpg';
import nsss from './images/studentcampus5.png';
import { useRef } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import BackToTop from './BackToTop';
import { motion, useAnimation, useInView } from 'framer-motion';
export default function Gymkhana() {

    const club1 = useRef();
    const cultureClub = useRef();
    const sport = useRef();
    const nss = useRef();

    const scrollHandler = (elmRef) => {
        console.log(elmRef.current)
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <>
            <motion.div className='main-gymkhana' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                <div className='sub-gymkhana'>
                    <div className='gymkhana-header' style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                        <h3 style={{ marginBottom: "20px" }}>GYMKHANA</h3>

                    </div>
                    <div className='gymkhana-font'>
                        <p style={{ marginBottom: "20px" }}>Gymkhana is a collective name under which Co-Curricular activities of Students Clubs and Sports are carried out.</p>
                    </div>
                    <div className='gymkhana-sub' style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "center" }}>

                        <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='gymkhana-sub-1' onClick={() => scrollHandler(sport)} style={{ border: "3px solid #c084fc", cursor: "pointer", padding: "10px 50px 50px 50px", borderRadius: "5px", fontSize: "18px", }}>
                            <p style={{ textAlign: "center", margin: "10px", fontWeight: "600", fontSize: "1.7rem" }}>SPORTS</p>
                            <ul style={{ fontSize: "20px", fontWeight: "600", position: "relative", top: "0", bottom: "0" }}>

                                <li style={{ marginBottom: "10px" }}> <a>Outdoor Games</a> </li>
                                <li style={{ marginBottom: "10px" }}> <a>Indoor Games</a> </li>
                                <li style={{ marginBottom: "10px" }}> <a>Fitness Center</a> </li>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1rem", fontWeight: "200", color: "#0284c7" }}><p>Click here for more</p></div>
                                <FaArrowDownLong className='blink-shadow ' style={{ position: "absolute", left: "90%", top: "80%", backgroundColor: "#c084fc", padding: "5px 15px", borderRadius: "5px" }} />
                            </ul>
                        </motion.div>


                        <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='gymkhana-sub-1' onClick={() => scrollHandler(club1)} style={{ border: "3px solid #c084fc", padding: "10px 50px 50px 50px", cursor: "pointer", borderRadius: "5px", fontSize: "18px" }}>
                            <p style={{ textAlign: "center", margin: "10px", fontWeight: "600", fontSize: "1.7rem", paddingBottom: "20px" }}>TECHNICAL COUNCIL</p>
                            <ul style={{ fontSize: "20px", position: "relative", top: "0", bottom: "0", fontWeight: "600" }}>


                                {/* <li style={{ marginBottom: "10px", fontSize: "1.5rem" }}> <a>Technical Club</a> </li> */}

                                <li style={{ listStyleType: "none" }}><a></a></li>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1rem", fontWeight: "200", color: "#0284c7" }}><p>Click here for more</p>
                                    <FaArrowDownLong className='blink-shadow ' style={{ position: "absolute", left: "99%", top: "80%", backgroundColor: "#c084fc", padding: "5px 15px", borderRadius: "5px", color: "black" }} /></div>

                            </ul>

                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='gymkhana-sub-1' onClick={() => scrollHandler(cultureClub)} style={{ border: "3px solid #c084fc", padding: "10px 50px 50px 50px", cursor: "pointer", borderRadius: "5px", fontSize: "18px" }}>
                            <p style={{ textAlign: "center", margin: "10px", fontWeight: "600", fontSize: "1.7rem", paddingBottom: "20px" }}>CULTURAL COUNCIL</p>

                            <ul style={{ fontSize: "20px", fontWeight: "600", position: "relative", top: "0", bottom: "0" }}>



                                {/* <li style={{ marginBottom: "10px", fontSize: "1.5rem" }}> <a>Culture Club</a> </li> */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1rem", fontWeight: "200", color: "#0284c7" }}><p>Click here for more</p></div>
                                <FaArrowDownLong className='blink-shadow ' style={{ position: "absolute", left: "98%", top: "70%", backgroundColor: "#c084fc", padding: "5px 15px", borderRadius: "5px" }} />
                            </ul>

                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='gymkhana-sub-1' onClick={() => scrollHandler(nss)} style={{ border: "3px solid #c084fc", padding: "20px 50px 45px 50px", borderRadius: "5px", fontSize: "18px" }}>
                            <p style={{ textAlign: "center", margin: "10px", fontWeight: "600" }}></p>
                            <ul style={{ fontSize: "1.5rem", fontWeight: "600", position: "relative", top: "0", bottom: "0" }}>
                                <li style={{ marginBottom: "10px" }}> <a>NSO</a> </li>

                                <li style={{ marginBottom: "10px" }}> <a>NSS</a> </li>
                                <li style={{ marginBottom: "10px" }}> <a>NCC</a> </li>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1rem", fontWeight: "200", color: "#0284c7" }}><p>Click here for more</p></div>
                                <FaArrowDownLong className='blink-shadow ' style={{ position: "absolute", left: "98%", top: "80%", backgroundColor: "#c084fc", padding: "6px 15px", borderRadius: "5px" }} />
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className='about-gymkhana'>
                    <div className='gymkhana' ref={ref} style={{ borderBottom: "5px solid #86198f" }}>

                        <div ref={ref}>
                            <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }} className='faculty-in-gymhkana'>
                                <div>
                                    <div className='alumni-fs'>   <h3 style={{ marginTop: "25px" }} >FACULTY-IN-CHARGE, Gymkhana</h3></div>
                                    <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                                </div>

                                <div ref={ref} className='general-secre-hostel' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                                    <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rajeswara Rao M</p>
                                            <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Vigneshwara Raja P</p>
                                            <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Kavita Devi</p>
                                            <h4>Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)</h4>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Surya Prakash Ramesh</p>
                                            <h4>Faculty-In-Charge, Students Welfare (Culture & Events & Technical)</h4>
                                        </div>
                                        <div className='g-s'>
                                            <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Nagaveni S</p>
                                            <h4>Faculty-In-Charge, Students Welfare (Culture & Events & Technical)</h4>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <hr />
                        <div>
                            <div className='alumni-fs'>  <h3 style={{ marginTop: "20px" }} >ASSISTANT SPORTS OFFICERS</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='information' ref={ref} style={{ marginTop: "20px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={keerthiK} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Keerthi Kumar M</p>
                                    <h4 style={{ marginTop: "5px" }}>Sports Officer</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={raviSG} alt='loading' style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Shri Ravi Shivaprakash</p>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Ghalimath</p>
                                    <h4 style={{ marginTop: "5px" }}>Assistant Sports Officer</h4>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={GRamesh} alt="loading" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5px" }}>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Shri G Ramesh</p>
                                    <h4 style={{ marginTop: "5px" }}>Assistant Sports Officer</h4>
                                </div>
                            </div>
                        </motion.div>
                        <hr />
                        <div className='sports-section'>
                            <div>
                                <div className='alumni-fs'>    <h3 style={{ marginTop: "25px" }} >GENERAL SECRETARIES</h3></div>
                                <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                            </div>

                            <div className='secrataries' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    {/* <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "25px", marginBottom: "20px" }} >TECH CLUB SECRETARIES, Gymkhana</h3></div> */}
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Krishan</p>
                                        <h4>General Secretary, Sports Affairs</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Yadav Vansh Suresh </p>
                                        <h4>General Secretary, Technical Affairs</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Gurvir Singh</p>
                                        <h4>General Secretary, Cultural Affairs</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Kodati Tharun</p>
                                        <h4>General Secretary, Hostel Affairs</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Krishna Karthik</p>
                                        <h4>General Secretary, Mess Affairs</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Uttkarsh Jaiswal </p>
                                        <h4>General Secretary, Academic Affairs UG</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Sumit Sah </p>
                                        <h4>General Secretary, Academic Affairs PG</h4>
                                    </div>
                                </div>
                                <div className='sports-club'>
                                    {/* <div className='alumni-fs-fs'><h3 style={{ marginTop: "25px", marginBottom: "20px" }} >SPORTS CLUB SECRETARIES, Gymkhana</h3></div> */}
                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Patel Saurya Ashokbhai</p>
                                                <h4>Junior General Secretary, Mess Affairs </h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Nilesh Kumar </p>
                                                <h4>Junior General Secretary, Sports Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Samartha</p>
                                                <h4>Junior General Secretary, Technical Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Mareddy Naveen Kumar Reddy </p>
                                                <h4>Junior General Secretary, Cultural Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Amartya Sanjay Gawali</p>
                                                <h4>Junior General Secretary, Hostel Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Utkarsh Sengar </p>
                                                <h4>Junior General Secretary, Academic Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Sahil Bagade </p>
                                                <h4>PG Secretary, Sports Affairs</h4>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Anish S K</p>
                                                <h4>PG Secretary, Technical Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Rajput R Vikramsingh</p>
                                                <h4>PG Secretary, Cultural Affairs </h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Kaushik Shivanand Powar</p>
                                                <h4>PG Secretary, Hostel Affairs</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Alok Kumar</p>
                                                <h4>PG Secretary, Mess Affairs</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <hr />



                        <BackToTop />
                        <div className='sports-section'>
                            <div>
                                <div className='alumni-fs'>    <h3 style={{ marginTop: "25px" }} >CLUB SECRETARIES -Gymkhana</h3></div>
                                <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                            </div>

                            <div className='secrataries' style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div className='alumni-fs-fs'>   <h3 style={{ marginTop: "25px", marginBottom: "20px" }} >TECH CLUB SECRETARIES, Gymkhana</h3></div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Pranav Kumar Pandey</p>
                                        <h4>Tech Club Secretary, AI</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Nishant Shailesh Mehta </p>
                                        <h4>Tech Club Secretary, Space Data Science</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Animesh Jain</p>
                                        <h4>Tech Club Secretary, Robotics</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Amogh R</p>
                                        <h4>Tech Club Secretary, Coding</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Jai Sharma</p>
                                        <h4>Tech Club Secretary, Finance</h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Ratish Sinha</p>
                                        <h4>Tech Club Secretary, Ingene Motorsport </h4>
                                    </div>
                                    <div className='g-s'>
                                        <p style={{ fontWeight: "600", color: "#4338ca" }}>Upakramanika Bishnu</p>
                                        <h4>Tech Club Secretary, Design  </h4>
                                    </div>
                                </div>
                                <div className='sports-club'>
                                    <div className='alumni-fs-fs'><h3 style={{ marginTop: "25px", marginBottom: "50px" }} >SPORTS CLUB SECRETARIES, Gymkhana</h3></div>
                                    <div style={{ display: "flex", gap: "20px" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                            {/* <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Vikas Kumawat</p>
                                                <h4>Sports Club Secretary, Yoga </h4>
                                            </div> */}
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Shivam Kumar </p>
                                                <h4>Sports Club Secretary, Athletics</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Maddela Vaishwitha</p>
                                                <h4>Sports Club Secretary, Badminton</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Nipun Gupta </p>
                                                <h4>Sports Club Secretary, Basketball</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Khot Atharva Deepak</p>
                                                <h4>Sports Club Secretary, Chess</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Tanishq Singh </p>
                                                <h4>Sports Club Secretary, Weightlifting</h4>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Suharsh Agarwal</p>
                                                <h4>Sports Club Secretary, Cricket</h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Krishnanshu Yadav</p>
                                                <h4>Sports Club Secretary, E- Sports </h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Vedansh Chaudhary</p>
                                                <h4>Sports Club Secretary, Football</h4>
                                            </div>
                                            {/* <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Atharv Gade</p>
                                                <h4>Sports Club Secretary, Table Tennis</h4>
                                            </div> */}
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Omkar Shivram Kulkarni</p>
                                                <h4>Sports Club Secretary, Tennis </h4>
                                            </div>
                                            <div className='g-s'>
                                                <p style={{ fontWeight: "600", color: "#4338ca" }}>Gullipalli Rishikesh </p>
                                                <h4>Sports Club Secretary, Volleyball </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} className='image-block'>
                    <div style={{ margin: "auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>

                        <img src={sport1} alt='adminblock' ></img>
                        <img src={sport2} alt='adminblock' ></img>
                        <img src={sport3} alt='adminblock' ></img>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} className='image-block' ref={sport}>
                    <div style={{ margin: "auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>

                        <img src={image4} alt='adminblock' ></img>
                        <img src={image2} alt='adminblock' ></img>
                        <img src={image3} alt='adminblock' ></img>
                    </div>
                </div>




                <div className='tech-board-gymkhana'>
                    <div className='tech-board-sub-header'>
                        <p>Outdoor Games</p>
                    </div>
                    <div className='board-flex'>
                        <div className='list-items'>
                            <ul>
                                <li>Football</li>
                                <li>Volleyball</li>
                                <li>Cricket</li>
                                <li>Basketball</li>
                                <li>Swimming</li>

                            </ul>
                        </div>
                        <div className='sports-photos'>

                            <div className='image-div'><img src={image5} alt='loading'></img></div>

                        </div>
                    </div>

                    <div className='tech-board-sub-header'>
                        <p>Indoor Games</p>
                    </div>
                    <div className='board-flex'>
                        <div className='list-items'>
                            <ul>
                                <li>Chess</li>
                                <li>Carrom-Board</li>
                                <li>Badminton</li>
                                <li>Squash</li>
                                <li>Table tennis</li>

                            </ul>
                        </div>
                        <div className='sports-photos'>
                            <div className='image-div'><img src={image1} alt='loading'></img></div>


                        </div>
                    </div>
                    <div >
                        <div className='tech-board-sub-header' ref={cultureClub}>
                            <p>Culture Clubs</p>
                        </div>
                        <div className='board-flex'>
                            <div className='list-items'>
                                <ul>
                                    <li>Dance</li>
                                    <li>Dramatics</li>
                                    <li>EBSB</li>
                                    <li>Fine Arts</li>
                                    <li>Literary</li>
                                    <li>Music</li>
                                    <li>Photography</li>
                                    <li>Quiz</li>
                                    <li>Prabodhini</li>

                                </ul>
                            </div>
                            <div className='sports-photos' style={{ display: "flex", flexDirection: "column" }}>
                                <div className='image-block'><img src={cultureClub1} alt='loading' style={{ height: "260px" }}></img></div>
                            </div>
                        </div>
                        <div className='tech-board-sub-header' ref={club1}>
                            <div className='alumni-fs'><p style={{ marginBottom: "20px" }}>Tech Clubs</p></div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className='board-flex'>
                            <div className='sports-photos' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='tech-club-fs'>    <div style={{ marginBottom: "20px", color: "#4c5157" }} className='t-fs-t'>
                                    <p>The Technical Council serves as a student-led platform dedicated to nurturing
                                        and promoting students' technical interests. Its primary objectives include facilitating
                                        and supporting various technical clubs in executing their projects,events,
                                        and other activities. By providing guidance, resources, and assistance, the council enables
                                        students to explore, learn, and develop their skills in diverse technical domains.Ultimately, it aims
                                        to create an environment that encourages innovation,collaboration, and the
                                        pursuit of excellence in technical fields among the student body.

                                    </p>
                                </div>
                                </div>



                            </div>
                            <div className='list-items' style={{ display: "flex", gap: "70px" }}>
                                <div className='image-div'><img src={techClub} alt='loading'></img></div>
                                <ul style={{ color: "#5b21b6" }}>
                                    <p style={{ textAlign: "center", color: "#1e40af" }}>Click Below</p>
                                    <li>AI</li>
                                    <li><a href=' https://www.iitdh.ac.in/sdsl/' target='_blank' style={{ textDecoration: "underline" }}>Space Data Science</a></li>
                                    <li><a href='  https://github.com/IITDh-Robotics' target='_blank' style={{ textDecoration: "underline" }}>Robotics</a></li>
                                    <li>Coding</li>
                                    <li><a href=' https://www.linkedin.com/company/insolvent-finance-club-iitdh/' target='_blank' style={{ textDecoration: "underline" }}>Finance</a></li>
                                    <li><a href=' https://ingene.vercel.app/' target='_blank' style={{ textDecoration: "underline" }}>InGene Motorsports Club</a></li>
                                    <li>Design</li>

                                </ul>

                            </div>

                        </div>

                        <div className='tech-board' ref={nss}>
                            <p style={{ marginBottom: "20px", marginTop: "3%" }} className='tech-board-sub-header'>NSO/NSS</p>
                            <div className='tech-club-fs'>     <p style={{ marginTop: "20px", color: "#4c5157" }}>The National Service Scheme (NSS) is an Govt. of India program conducted by the ministry of Youth Affairs and Sports. </p>
                                <p style={{ color: "#4c5157" }}>IIT Dharwad has adopted the scheme and students are enrolled under the program as volunteers. NSS volunteers took many social welfare activities like Shramdaan and tree plantation.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} >
                            <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} className='image-block'>
                                <div style={{ margin: "auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>

                                    <img src={nsss} alt='adminblock' ></img>
                                    <img src={img1} alt='adminblock' ></img>
                                    <img src={img2} alt='adminblock' ></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </motion.div>
        </>
    )
}
