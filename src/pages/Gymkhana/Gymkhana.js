import React, { useEffect } from 'react';
import './Gymkhana.css';

import PeopleList from '../../components/PeopleList/PeopleList.js';
import ImageGrid from '../../components/ImageGrid/ImageGrid.js';
import BootstrapCard from '../../components/Cards/BootstrapCard.js';
import {facultyInCharges, secretaries, clubSecretaries} from './GymkhanaData.js'

import image1 from '../../images/gymkhana1.jpg';
import image2 from '../../images/gymkhana2.jpg';
import image3 from '../../images/gymkhana3.jpg';
import image4 from '../../images/gymkhana4.jpg';
import raviSG from '../../images/Ravi - Ravi Ghalimath.jpg';
import keerthiK from '../../images/Keerthi Kumar.jpeg';
import GRamesh from '../../images/Ramesh - Ramesh G.png';
import image5 from '../../images/sport5.png';
import techClub from '../../images/technical1.jpg';
import sport1 from '../../images/sports1.jpg';
import sport2 from '../../images/sports2.jpg';
import sport3 from '../../images/sports3.jpg';
import img1 from '../../images/NSS.jpg';
import img2 from '../../images/NSS1.jpg';
import cultural1 from '../../images/homeimage8.jpg';
import nsss from '../../images/studentcampus5.png';
import { useRef } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import BackToTop from '../BackToTop';
import { motion, useAnimation, useInView } from 'framer-motion';

const imagesSports = [
    { src: sport1, alt: 'Sport Image 1' },
    { src: sport2, alt: 'Sport Image 2' },
    { src: sport3, alt: 'Sport Image 3' },
    { src: image4, alt: 'Sport Image 4' },
    { src: image2, alt: 'Sport Image 5' },
    { src: image3, alt: 'Sport Image 6' },
    { src: image5, alt: 'Sport Image 7' },
    { src: image1, alt: 'Sport Image 8' },
];

const imagesCultural = [
    { src: cultural1, alt: 'Cultural Image 1' },
];



export default function Gymkhana() {

    const techCouncil = useRef();
    const culturalCouncil = useRef();
    const sportsCouncil = useRef();
    const socialActivities = useRef();

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
            <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className='mb-5'>Gymkhana</h1>

                <div className='d-flex flex-column align-items-center'>
                    {/*<div className='fs-5'>
                        <p>Gymkhana is a collective name under which Co-Curricular activities of Students Clubs and Sports are carried out.</p>
                    </div>*/}
                </div>

                <div>
                    <div className="row">
                        <motion.div className="col-md-3" onClick={() => scrollHandler(sportsCouncil)}>
                            <div className='gymkhana-council-box'>
                                <p>SPORTS COUNCIL</p>
                                <ul>
                                    <li><a>Outdoor Games</a></li>
                                    <li><a>Indoor Games</a></li>
                                    <li><a>Fitness Center</a></li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="col-md-3" onClick={() => scrollHandler(techCouncil)}>
                            <div className='gymkhana-council-box'>
                            <p>TECHNICAL COUNCIL</p>
                                <ul>
                                    <li><a>Workshops</a></li>
                                    <li><a>Technical Fests</a></li>
                                    <li><a>Competitions</a></li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="col-md-3" onClick={() => scrollHandler(culturalCouncil)}>
                            <div className='gymkhana-council-box'>
                            <p>CULTURAL COUNCIL</p>
                                <ul>
                                    <li><a>Festivities</a></li>
                                    <li><a>Cultural Fests</a></li>
                                    <li><a>Competitions</a></li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="col-md-3" onClick={() => scrollHandler(socialActivities)}>
                            <div className='gymkhana-council-box'>
                            <p>SOCIAL ACTIVITIES</p>
                            <ul>
                                <li><a>NSO</a></li>
                                <li><a>NSS</a></li>
                                <li><a>NCC</a></li>
                            </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>


                <div>
                    <div className='rounded custom-important-container p-4 d-flex flex-column align-items-center'>
                        <div className='col-md-12 d-flex flex-column align-items-center text-center mb-5'>
                            <h2 className='text-decoration-underline'>Faculty and Council Members</h2>
                        </div>

                        <div className='rounded custom-important-container p-4 col-md-6'>
                            <h5>FACULTY IN CHARGES - GYMKHANA</h5>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>

                            <div className='d-flex flex-column align-items-center'>
                                <PeopleList
                                    mainTitle=""
                                    items={facultyInCharges}
                                />
                            </div>
                        </div>

                        <hr />

                        <div className='rounded custom-important-container p-4'>
                            <h5>ASSISTANT SPORTS OFFICERS</h5>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>

                            <div className="row pt-2 justify-content-center">
                                <div className="col-md-4">
                                    <BootstrapCard
                                        image={keerthiK}
                                        name="Dr. Keerthi Kumar M"
                                        title="Sports Officer"
                                        link="#"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <BootstrapCard
                                        image={raviSG}
                                        name="Shri Ravi Shivaprakash Ghalimath"
                                        title="Assistant Sports Officer"
                                        link="#"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <BootstrapCard
                                        image={GRamesh}
                                        name="Shri G Ramesh"
                                        title="Assistant Sports Officer"
                                        link="#"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='rounded custom-important-container p-4'>
                            <h5>STUDENT COUNCIL SECRETARIES</h5>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>

                            <div className='row'>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={secretaries.filter(secretary => secretary.subTitle.startsWith('General Secretaries'))}
                                    />
                                </div>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={secretaries.filter(secretary => secretary.subTitle.startsWith('PG Secretaries'))}
                                    />
                                </div>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={secretaries.filter(secretary => secretary.subTitle.startsWith('Junior General Secretaries'))}
                                        customClasses={{
                                            listItem: 'w-100'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='rounded custom-important-container p-4 w-100'>
                            <h5>CLUB SECRETARIES</h5>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>

                            <div className='row'>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={clubSecretaries.filter(secretary => secretary.subTitle.startsWith('Tech Club Secretaries'))}
                                    />
                                </div>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={clubSecretaries.filter(secretary => secretary.subTitle.startsWith('Sports Club Secretaries'))}
                                    />
                                </div>
                                <div className='d-flex flex-column align-items-center col-md-4'>
                                    <PeopleList
                                        mainTitle=""
                                        items={clubSecretaries.filter(secretary => secretary.subTitle.startsWith('Cultural Club Secretaries'))}
                                    />
                                </div>
                            </div>
                        </div>

                        <BackToTop />

                    </div>
                </div>

                <div className='mt-5'>
                    <div className='fs-2'>
                        <p className='custom-sub-header' ref={sportsCouncil}>Sports Council</p>
                    </div>
                    <p className='fs-4' style={{color: '#666666'}}>
                        The Sports Council is dedicated to fostering a vibrant and inclusive sports culture within the student community.
                        Its primary mission is to promote physical fitness, teamwork, and sportsmanship among students through a variety of athletic activities.
                        The council organizes events and competitions cater to diverse interests, ensuring that every student has the opportunity to participate and excel in their chosen sport.
                        By providing resources, coaching, and support, the Sports Council aims to cultivate a spirit of healthy competition and camaraderie, empowering students to achieve their personal best while building lasting friendships and memories.
                    </p>
                    <div className='row'>
                        <div className='col-md-4 d-flex flex-column align-items-center'>
                            <div>
                                <p className='custom-sub-header border-danger rounded fs-3'>Outdoor Games</p>
                            </div>
                            <div className='fs-4'>
                                <ul>
                                    <li>Football</li>
                                    <li>Volleyball</li>
                                    <li>Cricket</li>
                                    <li>Basketball</li>
                                    <li>Swimming</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex flex-column align-items-center'>
                            <div>
                                <p className='custom-sub-header border-danger rounded fs-3'>Indoor Games</p>
                            </div>
                            <div className='fs-4'>
                                <ul>
                                    <li>Chess</li>
                                    <li>Carrom-Board</li>
                                    <li>Badminton</li>
                                    <li>Squash</li>
                                    <li>Table tennis</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 d-flex flex-column align-items-center'>
                            <div>
                                <p className='custom-sub-header border-danger rounded fs-3'>Gym Activities</p>
                            </div>
                            <div className='fs-4'>
                                <ul>
                                    <li>Powerlifting</li>
                                    <li>Weightlifting</li>
                                    <li>Yoga</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className='image-block'>
                        <ImageGrid
                            key={1}
                            images={imagesSports} // Combine all images into a single array
                            width="332px" // Adjustable width
                            height="250px" // Adjustable height
                            columns={4} // Adjustable number of columns
                        />
                    </div>

                    <div>
                        <div className='custom-sub-header fs-2' ref={culturalCouncil}>
                            <p>Cultural Council</p>
                        </div>
                        <p className='fs-4' style={{ color: '#666666' }}>
                            The Cultural Council is dedicated to promoting artistic expression and cultural awareness within the student community.
                            It serves as a platform for students to explore their creative talents and engage in various cultural activities.
                            Through workshops, events, and performances, the council aims to foster a sense of community and appreciation for the arts,
                            encouraging students to collaborate and showcase their skills.
                        </p>
                        <div className='row'>
                            <div className='fs-3 col-md-3'>
                                <ul>
                                    <li>Dance</li>
                                    <li>Dramatics</li>
                                    <li>Fine Arts</li>
                                    <li>Literary</li>
                                </ul>
                            </div>
                            <div className='fs-3 col-md-3'>
                                <ul>
                                    <li>Music</li>
                                    <li>Photography</li>
                                    <li>Quiz</li>
                                    <li>Prabodhini</li>
                                </ul>
                            </div>
                        </div>
                        <div className='image-block'>
                            <ImageGrid
                                key={2}
                                images={imagesCultural} // Use the imagesCultural array
                                width="332px" // Adjustable width
                                height="250px" // Adjustable height
                                columns={4} // Adjustable number of columns
                            />
                        </div>
                    </div>


                    <div>
                        <div className='tech-board-sub-header' ref={techCouncil}>
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

                        <div className='tech-board' ref={socialActivities}>
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
