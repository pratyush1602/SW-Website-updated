import React from "react";
import Scrollevent from "../../Scrollerevent";

import "./Counselling.css";
import { motion } from 'framer-motion';

import yd from "../../../images/yourdost.png";
import te from "../../../images/tele-manas-mental-health-service1.jpg"

import mentorsData from './CounsellingMentorsData.js';

import RajshekarK from '../../../images/faculty/rajshekar-k.jpg';
import PradeepYammiyavar from '../../../images/faculty/pradeep-yammiyavar.jpg';
import RidhimaTewari from '../../../images/faculty/ridhima-tewari.jpg';

import BootstrapCard from '../../../components/Cards/BootstrapCard.js';

function Counselling() {
    return (
        <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/*<div className="scroll">

                <Scrollevent />
            </div>*/}

            <h1 className='mb-2'>Wellness - Counselling</h1>

            <div className='mt-5 custom-sub-header fs-2'>
                <p>Counselling Center</p>
            </div>

            <div className='custom-content text-start fs-4'>
                <p>
                    The Counselling Center at IIT DHARWAD provides assistance and counselling service to all residents of the campus.
                    <br/>
                    There are two options available to anyone who wishes to seek counselling services:
                </p>
            </div>

            <div className="row g-3 d-flex">
                {/* YourDOST Card */}
                <div className="col h-100">
                    <div className="card w-100 h-100 p-3">
                        <img src={yd} alt="YourDOST" className="card-img-top h-auto" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">
                                <a href="https://www.iitdh.ac.in/sites/default/files/2023-10/YourDOST_steps_2023_07_19.pdf" className="text-decoration-none">
                                    YourDOST
                                </a>
                            </h5>
                            <br/>
                            <p className="card-text fs-5">
                                IIT Dharwad in cooperation with YourDOST -- a professional online counselling service, provides a direct link to anyone at IIT Dharwad to contact them and seek their services without any charge.
                            </p>
                            <a href="https://www.iitdh.ac.in/sites/default/files/2023-10/YourDOST_steps_2023_07_19.pdf" className="btn btn-primary">Connect With YourDOST</a>
                        </div>
                    </div>
                </div>

                {/* TeleMANAS Card */}
                <div className="col h-100">
                    <div className="card w-100 h-100 p-3">
                        <img src={te} alt="TeleMANAS" className="card-img-top h-auto" />
                        <div className="card-body">
                            <h5 className="card-title fs-4">
                                <a href="https://telemanas.mohfw.gov.in/home" className="text-decoration-none">
                                    TeleMANAS
                                </a>
                            </h5>
                            <br/>
                            <p className="card-text fs-5">
                                TeleMANAS works with a network of Hubli-Dharwad based mental health hospitals and institutions to provide counselling both in-person and over the telephone.
                                Anyone can avail this service directly.
                            </p>
                            <a href="https://telemanas.mohfw.gov.in/home" className="btn btn-primary">Connect With TeleMANAS</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-1 custom-sub-header fs-2'>
                <p>Face to Face Counselling</p>
            </div>

            <div className='custom-content text-start fs-4'>
                <p>
                    You may choose any counselor that you prefer, and book your appointment online using the links below.
                    Upon being granted an appointment, you may directly approach the counselor without having to sign any registers at the Health Center.
                </p>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div className='custom-important-container p-3' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className="mt-4">
                        {/* Counselor 1 */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="g-s fs-3">
                                <p className="font-weight-bold" style={{ color: "#4338ca" }}>
                                    Prof. Pradeep Yammiyavar
                                </p>
                                <h4 className='fs-5'>Pg.D.MH PhD</h4>
                            </div>
                            <div className="appt">
                                <a
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2kkN9_v0ypAzAi8gCHQc1JFwFz7JdGrz4Ytog55w2QRrGwzcmVdvaLiSLc2avZY0dsK6u6NEF8"
                                    className="btn btn-link"
                                >
                                    BOOK APPOINTMENT
                                </a>
                            </div>
                        </div>

                        {/* Counselor 2 */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="g-s fs-3">
                                <p className="font-weight-bold" style={{ color: "#4338ca" }}>
                                    Ms. Vijayalakshmi Peri
                                </p>
                                <h4 className='fs-5'>M.A. Counseling Psychology</h4>
                            </div>
                            <div className="appt">
                                <a
                                    href="https://yourdost.com/auth/sign-in?serviceId=1&next=https:%2F%2Fyourdost.com%2Fin-person-counselling%2Ff2f%2Fiitdh"
                                    className="btn btn-link"
                                >
                                    BOOK APPOINTMENT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-5 custom-sub-header fs-2'>
                <p>Student Counselling Mentors</p>
            </div>

            <div className='custom-content text-start fs-4'>
                <p className='text-start fs-4'>
                    Our Student Counselling Mentors are dedicated individuals who provide support and guidance to their peers. They are trained to listen, empathize, and help students navigate their challenges. If you need someone to talk to or seek advice, feel free to reach out to any of our mentors listed below.
                </p>
            </div>


            <div className='custom-important-container' style={{ borderBottom: "5px solid #86198f" }}>
                <div className="row g-1">
                    {mentorsData.map((mentor, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card text-center">
                                <div className="">
                                    <img src={mentor.image} alt={mentor.name} className="card-img-top rounded-circle" style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{mentor.name}</h5>
                                    <p className="card-text">{mentor.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-5 custom-sub-header fs-2'>
                <p>Associate Dean & Faculty in Charge</p>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div className="rounded custom-important-container">

                    <div className="row p-5 justify-content-center">
                        <div className="col-md-4">
                            <BootstrapCard
                                image={RidhimaTewari}
                                name="Prof. Ridhima Tewari"
                                title="Associate Dean, Students Welfare, Wellness"
                                link="https://www.iitdh.ac.in/node/1999"
                                email="adean.sww@iitdh.ac.in"
                            />
                        </div>
                        <div className="col-md-4">
                            <BootstrapCard
                                image={RajshekarK}
                                name="Prof. Rajshekar K"
                                title="Faculty-In-Charge, Students Welfare (Wellness)"
                                link="https://www.iitdh.ac.in/user-profile/rajshekar-k"
                                email="fic.sw.wellness@iitdh.ac.in"
                            />
                        </div>
                        <div className="col-md-4">
                            <BootstrapCard
                                image={PradeepYammiyavar}
                                name="Prof. Pradeep Yammiyavar"
                                title="Faculty-In-Charge, Students Welfare (Wellness)"
                                link="https://www.iitdh.ac.in/mode/2015"
                                email="fic.sw.wellness@iitdh.ac.in"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Counselling;