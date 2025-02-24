// src/DeansAssociateDeans.js
import React from 'react';
import "./DeansAssociateDeans.css";
import BootstrapCard from './BootstrapCard.js';
import ramjee from './images/r1.jpeg';
import Ramesh from './images/DSC_4417 copy - Surya Prakash Ramesh.jpg';
import Surya from './images/IMG_5363 - Surya Pratap Singh.jpeg';
import Rajesh from './images/rajesh.jpg';
import ridhima from './images/Ridhima_Photo - Ridhima Tewari.jpg';
import { motion } from 'framer-motion';

export default function DeansAssociateDeans() {
    return (
        <div className="container mt-5 text-center">
            <h1>Dean and Associate Deans</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <BootstrapCard
                        image={ramjee}
                        name="Prof. Ramjee Repaka"
                        title="Dean, Student Welfare"
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <BootstrapCard
                        image={Ramesh}
                        name="Prof. Surya Prakash Ramesh"
                        title="Associate Dean, Socio-cultural activities"
                        link="https://iitdh.ac.in"
                    />
                </div>
                <div className="col-md-4">
                    <BootstrapCard
                        image={Surya}
                        name="Prof. Surya Pratap Singh"
                        title="Associate Dean - Hostel and Mess"
                    />
                </div>
                <div className="col-md-4">
                    <BootstrapCard
                        image={Rajesh}
                        name="Prof. Rajeshwara Rao M"
                        title="Associate Dean - Gymkhana, Sports, Clubs and Technology"
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <BootstrapCard
                        image={ridhima}
                        name="Dr. Ridhima Tewari"
                        title="Associate Dean - Wellness & Female Students"
                    />
                </div>
            </div>
        </div>
    );
}
