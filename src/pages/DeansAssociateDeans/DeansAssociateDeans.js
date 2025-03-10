// src/DeansAssociateDeans.js
import React from 'react';
import "./DeansAssociateDeans.css";
import BootstrapCard from '../../components/Cards/BootstrapCard.js';
import RamjeeRepaka from '../../images/faculty/ramjee-repaka.jpeg';
import SuryaPrakashRamesh from '../../images/faculty/surya-prakash-ramesh.jpg';
import SuryaPratapSingh from '../../images/faculty/surya-pratap-singh.jpeg';
import RajeshwaraRao from '../../images/faculty/rajeshwara-rao.jpg';
import RidhimaTewari from '../../images/faculty/ridhima-tewari.jpg';
import { motion } from 'framer-motion';

export default function DeansAssociateDeans() {
    return (
        <motion.div className="container text-center pb-5 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1 className='mb-2'>Dean and Associate Deans</h1>
            <div className="rounded custom-important-container">
                <div className="row p-2 justify-content-center">
                    <div className="col-md-12">
                        <BootstrapCard
                            image={RamjeeRepaka}
                            name="Prof. Ramjee Repaka"
                            title="Dean, Student Welfare"
                            link="https://iitdh.ac.in/user-profile/ramjee-repaka"
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <BootstrapCard
                            image={SuryaPrakashRamesh}
                            name="Prof. Surya Prakash Ramesh"
                            title="Associate Dean, Socio-cultural activities"
                            link="https://www.iitdh.ac.in/user-profile/surya-prakash-r"
                        />
                    </div>
                    <div className="col-md-3">
                        <BootstrapCard
                            image={SuryaPratapSingh}
                            name="Prof. Surya Pratap Singh"
                            title="Associate Dean - Hostel and Mess"
                            link="https://www.iitdh.ac.in/user-profile/surya-pratap-singh"
                        />
                    </div>
                    <div className="col-md-3">
                        <BootstrapCard
                            image={RajeshwaraRao}
                            name="Prof. Rajeshwara Rao M"
                            title="Associate Dean - Gymkhana, Sports, Clubs and Technology"
                            link="https://www.iitdh.ac.in/user-profile/rajeswara-rao-m"
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <BootstrapCard
                            image={RidhimaTewari}
                            name="Prof. Ridhima Tewari"
                            title="Associate Dean - Wellness & Female Students"
                            link="https://www.iitdh.ac.in/node/1999"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
