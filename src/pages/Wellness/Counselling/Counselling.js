import React from "react";
import Scrollevent from "../../Scrollerevent";

import "./Counselling.css";
import { motion } from 'framer-motion';

import yd from "../../../images/yourdost.png";
import te from "../../../images/tele-manas-mental-health-service1.jpg"
import karuneMainLogo from "../../../images/counselling-centre/karune-main-logo.png"

import mentorsData from './CounsellingMentorsData.js';

import RajshekarK from '../../../images/faculty/rajshekar-k.jpg';
import PradeepYammiyavar from '../../../images/faculty/pradeep-yammiyavar.jpg';
import RidhimaTewari from '../../../images/faculty/ridhima-tewari.jpg';
import VijayalakshmiPeri from "../../../images/counselling-centre/vijayalakshmi-peri.jpg"
import DarshanaKishoreGandhi from "../../../images/counselling-centre/darshana-kishore-gandhi.jpg"
import Navyashree from "../../../images/counselling-centre/navyashree.jpg"

import BootstrapCard from '../../../components/Cards/BootstrapCard.js';

function Counselling() {
    return (
        <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/*<div className="scroll">

                <Scrollevent />
            </div>*/}

            <h1 className='mb-2'>Karune</h1>
            <div className="d-flex flex-column">
                <h2 className='mb-2 align-self-center'>Counselling Centre</h2>
            </div>

            <div className="d-flex flex-column">
                <img src={karuneMainLogo} className='align-self-center bg-transparent' alt="Karune"/>
            </div>

            <div className='custom-content text-start fs-4'>
                <p>
                    The Counselling Center at IIT DHARWAD provides assistance and counselling service to all residents of the campus.
                    <br/>
                    There are two options available to anyone who wishes to seek counselling services:
                </p>
            </div>

            <div className="row g-3 d-flex align-items-stretch">
                {/* YourDOST Card */}
                <div className="col-lg-6">
                    <div className="card w-100 h-100 p-3">
                        <img src={yd} alt="YourDOST" className="card-img-top" style={{ width: '50%', height: 'auto' }}/>
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
                <div className="col-lg-6">
                    <div className="card w-100 h-100 p-3">
                        <img src={te} alt="TeleMANAS" className="card-img-top" style={{ width: '50%', height: 'auto' }} />
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

            <div className='mt-5 custom-sub-header fs-2'>
                <p>Face to Face Counselling</p>
            </div>

            <div className='custom-content text-start fs-4'>
                <p>
                    You may choose any counselor that you prefer, and book your appointment online using the links below.
                    Upon being granted an appointment, you may directly approach the counselor without having to sign any registers at the Health Center.
                </p>
            </div>

            {/*<div className='d-flex flex-column align-items-center'>
                <div className='custom-important-container p-3' style={{ borderBottom: "5px solid #86198f" }}>
                    <div className="mt-4">
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
            </div>*/}

            <div className="rounded custom-important-container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <BootstrapCard
                            image={PradeepYammiyavar}
                            name="Prof. Pradeep Yammiyavar"
                            /*(Self discovery, Personality profiling, and Guidance)*/
                            title="Pg.D.MH PhD , Counselling Psychologist"
                            link=""
                            email="mailto:counselor1.karuna@iitdh.ac.in"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <BootstrapCard
                            image={VijayalakshmiPeri}
                            name="Vijayalakshmi Peri"
                            title="M.A. Counseling Psychology, Counselling Psychologist"
                            link="https://yourdost.com/auth/sign-in?serviceId=1&next=https:%2F%2Fyourdost.com%2Fin-person-counselling%2Ff2f%2Fiitdh"
                            email="mailto:counselor2.karuna@iitdh.ac.in"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <BootstrapCard
                            image={DarshanaKishoreGandhi}
                            name="Darshana Kishore Gandhi"
                            /*(CRR No.: A110099)*/
                            title="M.Sc., M.Phil (Clin. Psych.), RCI Reg. Clinical Psychologist"
                            link="https://calendar.app.google/zDd6wq2iUpymgHEs5"
                            email="mailto:counselor3.karuna@iitdh.ac.in"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <BootstrapCard
                            image={Navyashree}
                            name="Navyashree"
                            /*(Individual Counselling and therapy, Group Counselling, Family Counselling, Life Skills training)*/
                            title="M.Sc in Clinical and Counselling Psychology, Counselling Psychologist"
                            link="https://calendar.app.google/aWnmKkN7aaXXD21w8"
                            email="mailto:counselor4.karuna@iitdh.ac.in"
                        />
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
                    {mentorsData.map((mentor, index) => {
                        // Calculate the total number of mentors
                        const totalMentors = mentorsData.length;
                        // Determine the column classes based on the index
                        let colClassLg = "col-lg-4"; // Default class for lg
                        let colClassMd = "col-md-6"; // Default class for md

                        if (totalMentors % 3 === 1) {
                            if (index === totalMentors - 1) {
                                colClassLg = "col-lg-12"; // Last item, remainder is 1 for lg
                            }
                        } else if (totalMentors % 3 === 2) {
                            if (index === totalMentors - 1) {
                                colClassLg = "col-lg-6"; // Last item, remainder is 2 for lg
                            } else if (index === totalMentors - 2) {
                                colClassLg = "col-lg-6"; // Second last item, remainder is 2 for lg
                            }
                        }

                        if (totalMentors % 2 === 1) {
                            if (index === totalMentors - 1) {
                                colClassMd = "col-md-12"; // Last item, remainder is 1 for md
                            }
                        }



                        return (
                            <div className={`${colClassLg} ${colClassMd}`} key={index}>
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
                        );
                    })}
                </div>
            </div>

            <div className='mt-5 custom-sub-header fs-2'>
                <p>Associate Dean & Faculty in Charge</p>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div className="rounded custom-important-container">

                    <div className="row p-5 justify-content-center">
                        <div className="col-lg-4 col-md-12">
                            <BootstrapCard
                                image={RidhimaTewari}
                                name="Prof. Ridhima Tewari"
                                title="Associate Dean, Students Welfare, Wellness"
                                link="https://www.iitdh.ac.in/node/1999"
                                email="mailto:adean.sww@iitdh.ac.in"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <BootstrapCard
                                image={RajshekarK}
                                name="Prof. Rajshekar K"
                                title="Faculty-In-Charge, Students Welfare (Wellness)"
                                link="https://www.iitdh.ac.in/user-profile/rajshekar-k"
                                email="mailto:fic.sw.wellness@iitdh.ac.in"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <BootstrapCard
                                image={PradeepYammiyavar}
                                name="Prof. Pradeep Yammiyavar"
                                title="Faculty-In-Charge, Students Welfare (Wellness)"
                                link="https://www.iitdh.ac.in/mode/2015"
                                email="mailto:fic.sw.wellness@iitdh.ac.in"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Counselling;