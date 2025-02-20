import React from 'react';
import './Hostels.css';
import hostel1 from './images/homeimage1.jpg';
import hosteimage2 from './images/Hostel_2.jpg';
import hostelimage from './images/Hostel_3.jpg';
import hostelimage4 from './images/Hostel_5.jpg';
import hostelimage5 from './images/Hostel_6.jpg';
import hostelimage6 from './images/studentcampuslife.jpg';
import hostelroom from './images/Hostel_Room (1).jpg';
import hostelroom1 from './images/Hostel_Room (2).jpg';
import { motion } from 'framer-motion';
export default function Hostels() {
    return (
        <>
            <motion.div className='hostels-main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='about-hostel'>
                    <div className='hostel-imagee'>
                        <div className='hosetl-imagee-1' style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "19px", fontSize: "1.3rem" }}>
                            <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }}> <img src={hostelimage6} alt='adminblock' ></img></motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }}> <img src={hostel1} className='img-1' alt='loading'></img></motion.div>
                        </div>
                    </div>
                    <div className='hostel-image'>
                        <div className='hosetl-image-1'>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='hostel-paragraph' >
                        <div className='sub-header'>    <p style={{ borderLeft: "5px solid #312e81", color: "rgb(30, 64, 175)", paddingLeft: "10px", marginBottom: "15px" }} >Hostels</p></div>
                        <p>IIT Dharwad being a fully residential institute, all students are mandatorily accommodated in hostels within the campus. Girls have a separate section. Hostels are safe and under round the clock security supervision.
                            There are two hostel blocks(Hostel Block - I and - II) with a total of 550 spacious rooms each accommodating, up to four students, belonging to the same batch.
                        </p>
                        <p style={{ marginTop: "20px" }}>The hostels and mess blocks have access to a very good campus internet network (wired and wireless). Adequate common bathrooms, washrooms, cloth washing machines-drying area and indoor play areas are available in each floor along with three spacious common rooms. These common rooms have television, a study setup and to encourage various social/recreational/group activities such as meetings. Centralized filterd water facility is available in the hostels round the clock. Availability of dedicated bicycle stands, courtyards for outdoor activities, nurse station and medical isolation rooms, security, housekeeping and other hostel staff on 24 hours duty are salient features of these hostels. </p>
                        <p style={{ marginTop: "20px" }}>While basic furniture are provided, students have to arrange for their personal furnishings like beds and bedsheets.
                            IIT Dharwad hostels provide an ideal, social and peaceful environment for studies and all-round personality.</p>
                    </div>
                </div>
                <div className='hostels' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className='alumni-fs'>    <h3 style={{ marginBottom: "30px" }}>HOSTELS</h3></div>
                    <div className='alumni-fs'>   <h3 style={{}} >WARDENS</h3></div>
                    <div style={{ width: "50px", height: "3px", backgroundColor: "#86198f", marginBottom: "20px", marginTop: "7px" }}></div>


                    <div className='wardens' style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <div className='warden-1' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Subhash Mehto</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Sudhir Sahoo</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Santosh Kumar</p></div>
                                <h4>Warden, Hostel-1, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Saroj Mondal</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Hirnaya Deka</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rakesh Lingam</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Mohana Rao Balaga</p></div>
                                <h4>Warden, Hostel-2, Boys</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ruma Ghosh</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Nagaveni S</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div>
                            {/* <div className='row-1'>
                                <div className='name-fs'>    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Ambukkarasi Rajendran</p></div>
                                <h4>Warden, Hostel-1, Girls</h4>
                            </div> */}
                            {/* <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rakesh Lingam</p></div>
                                <h4>Warden, Hostel 1 (Asavari)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Mohan Rao Balaga</p></div>
                                <h4>Warden, Hostel 1 (Asavari)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Dhriti Ranjan Dolai</p></div>
                                <h4>Warden, Hostel 2 (Bhairavi)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'><p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Satyapriya Gupta</p></div>
                                <h4>Warden, Hostel 2 (Bhairavi)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Dhriti Ranjan Dolai</p></div>
                                <h4>Warden, Hostel 3 (Abheri)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Satyapriya Gupta</p></div>
                                <h4>Warden, Hostel 3 (Abheri)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Rahul J Pandya</p></div>
                                <h4>Warden, Hostel 4 (Behag)</h4>
                            </div>
                            <div className='row-1'>
                                <div className='name-fs'>   <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Surya Prakash R

                                </p></div>
                                <h4>Warden, T-7 Hostel 7 (Durga)
                                </h4>
                            </div> */}

                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} className='image-block'>
                    <div style={{ margin: "auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>

                        <img src={hosteimage2} alt='adminblock' ></img>
                        <img src={hostelimage} alt='adminblock' ></img>
                        <img src={hostelroom} alt='adminblock' ></img>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "40px" }} className='image-block'>
                    <div style={{ margin: "auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                        <img src={hostelimage4} alt='adminblock' ></img>
                        <img src={hostelimage5} alt='adminblock' ></img>
                        <img src={hostelroom1} alt='adminblock' ></img>

                    </div>
                </div>
            </motion.div>
        </>
    )
}
