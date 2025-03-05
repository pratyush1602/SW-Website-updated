import React from 'react';
import './AdministrativeOffice.css';
import BootstrapCard from '../../components/Cards/BootstrapCard'; // Import your BootstrapCard component
import Ramjee from '../../images/r1.jpeg';
import Arun from "../../images/Arun_Verma.jpg";
import amoldiwate from '../../images/amoldiwate.jpg';
import Avinash from "../../images/IMG_20240115_154113 - AVINASH B.jpg";
import janardanReddy from '../../images/Janardhan Reddy S.jpg';
import { motion } from 'framer-motion';

export default function AdministrativeOffice() {
    return (
        <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1 className='mb-2'>Student Welfare Administrative Office</h1>
            <div className='row rounded p-2 justify-content-center custom-important-container'>
                <div className="col-md-12">
                    <BootstrapCard
                        image={Ramjee}
                        name="Prof. Ramjee Repaka"
                        title="Dean, Student Welfare"
                        link="https://iitdh.ac.in/user-profile/ramjee-repaka"
                    />
                </div>
                <div className="col-md-12">
                    <BootstrapCard
                        image={Arun}
                        name="Shri. Arun Verma"
                        title="Assistant Registrar, Student Welfare"
                        link="https://iitdh.ac.in/user-profile/arun-verma"
                    />
                </div>
                <div className="col-md-3">
                    <BootstrapCard
                        image={amoldiwate}
                        name="Shri. Amol Diwate"
                        title="Junior Superintendent"
                        link="https://iitdh.ac.in/user-profile/amol-diwate"
                    />
                </div>
                <div className="col-md-3">
                    <BootstrapCard
                        image={Avinash}
                        name="Shri. Avinash B"
                        title="Junior Assistant"
                        link="https://iitdh.ac.in/user-profile/avinash-b"
                    />
                </div>
                <div className="col-md-3">
                    <BootstrapCard
                        image={janardanReddy}
                        name="Shri. Janardhan Reddy S"
                        title="Junior Assistant"
                        link="https://iitdh.ac.in/user-profile/janardhan-reddy"
                    />
                </div>
            </div>

            <div className='mt-5'>
                <div className='custom-sub-header fs-2 rounded'>
                    <p> About </p>
                </div>
                <div className='custom-content text-left'>
                    <p className='fs-4'>
                        The Student Welfare Administrative office Team at IIT Dharwad believes in all-round development of holistic personality of its students and ensures students' stay on campus is comfortable, fruitful, and happy. The SW Team is on duty 24 hours round the clock with Hostel Managers residing with the students in the Hostels.
                    </p>
                    <p className='fs-4'>
                        IIT Dharwad practices gender equality, respects neurodivergence, and is a socially all-inclusive residential campus. The Campus buildings, including Hostels, are designed for accessibility by persons with disabilities (PWD).
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
