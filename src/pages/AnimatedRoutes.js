import React from 'react'
import { useLocation, Routes, Route, Router } from 'react-router-dom';
import Sidebar from "../components/Sidebar.js";
import StudentDivisionOrgano from './StudentDivisionOrgano.js';
import DeansAssociateDeans from "./DeansAssociateDeans.js";
import Home from "./Home.js";

import AdministrativeOffice from "./AdministrativeOffice.js";
import Hostels from "./Hostels.js";
import MessAndCanteen from "./MessAndCanteen.js";
import Gymkhana from "./Gymkhana.js";
import GoToTop from "./GoToTop.js";
import StudentCampusLife from "./StudentCampusLife.js";
import WellnessSection from "./WellnessSection.js";
import {gsap} from 'gsap';
import { Power3 } from 'gsap';

import Others from "./Others.js";
import { AnimatePresence } from 'framer-motion';

import StudentActivities from '../components/StudentActivities.js';
import Rti from '../components/Rti.js';

import  Counselling from "./Counselling.js";


export default function AnimatedRoutes() {
    const location = useLocation();

  let t1=new gsap.timeline();
  let ease=Power3.easeOut();
    return (
        <div>
            <GoToTop />

            <Sidebar>
                {/* <AnimatePresence> */}
                    <Routes location={location} key={location.pathname}>
                        <Route path="/"  element={<Home />} />
                        <Route path="/dean_associate_deans" element={<DeansAssociateDeans />} />
                        <Route path="/sw_division_organogram" element={<StudentDivisionOrgano />} />

                        <Route path="/administrative_office" element={<AdministrativeOffice />} />
                        <Route path="/hostels" element={<Hostels />} />
                        <Route path="/mess_canteen" element={<MessAndCanteen />} />
                        <Route path="/gymkhana" element={<Gymkhana />} />
                        <Route path="/student_life" element={<StudentCampusLife />} />
                        <Route path="/wellness" timeline={t1} ease={ease} element={<WellnessSection />} />


                        <Route path="/others" element={<Others />} />
                        <Route path="/student-activities" element={<StudentActivities />} />
                        <Route path="/rti" element={<Rti/>}/>
                        <Route path="/counselling" element={<Counselling/>}/>
                    </Routes>
                {/* </AnimatePresence> */}
            </Sidebar>

        </div>
    )
}
