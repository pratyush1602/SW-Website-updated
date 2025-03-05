import React from 'react';
// import './Hostels.css';
import ImageGrid from '../../components/ImageGrid/ImageGrid.js';
import PeopleList from '../../components/PeopleList/PeopleList.js';
import hostel1 from '../../images/homeimage1.jpg';
import hostelimage2 from '../../images/Hostel_2.jpg';
import hostelimage from '../../images/Hostel_3.jpg';
import hostelimage4 from '../../images/Hostel_5.jpg';
import hostelimage5 from '../../images/Hostel_6.jpg';
import hostelimage6 from '../../images/studentcampuslife.jpg';
import hostelroom from '../../images/Hostel_Room (1).jpg';
import hostelroom1 from '../../images/Hostel_Room (2).jpg';
import { motion } from 'framer-motion';

const images = [
    { src: hostelimage6, alt: 'Hostel Image 6' },
    { src: hostel1, alt: 'Hostel Image 1' },
    { src: hostelimage2, alt: 'Hostel Image 2' },
    { src: hostelimage, alt: 'Hostel Image 3' },
    { src: hostelroom, alt: 'Hostel Room Image 1' },
    { src: hostelimage4, alt: 'Hostel Image 4' },
    { src: hostelimage5, alt: 'Hostel Image 5' },
    { src: hostelroom1, alt: 'Hostel Room Image 2' },
];

const wardens = [
    {
        subTitle: 'Boys Hostel-1',
        subSubTitles: [
            {
                subSubtitle: '',
                people: [
                    { name: 'Sudhir K. Sahoo', designation: '' },
                    { name: 'Subhash Mehto', designation: '' },
                ],
            },
        ],
    },
    {
        subTitle: 'Boys Hostel-2',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Saroj Mondal', designation: '' },
                    { name: 'Rakesh Lingam', designation: '' },
                    { name: 'Sushanta K. Sethi', designation: '' },
                ],
            },
        ],
    },
    {
        subTitle: 'Girls Hostel-1',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Ruma Ghosh', designation: '' },
                    { name: 'Shraddha Srivastava', designation: '' },
                ],
            },
        ],
    },
];



export default function Hostels() {
    return (
        <>
            <motion.div className='pb-5 pt-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className='mb-2'>Hostels</h1>

                <div className='mt-5'>
                    <div className='custom-sub-header fs-2 rounded'>
                        <p>Hostels</p>
                    </div>
                    <div className='custom-content text-start fs-4'>
                        <p>
                            IIT Dharwad being a fully residential institute, all students are mandatorily accommodated in hostels within the campus.
                            Girls have a separate section. Hostels are safe and under round the clock security supervision.
                            There are two hostel blocks (Hostel Block - I and - II) with a total of 550 spacious rooms each accommodating, up to four students, belonging to the same batch.
                        </p>

                         <div>
                            <ImageGrid
                                key={1}
                                images={images.slice(0, 3)} // First set of images
                                width="332px" // Adjustable width
                                height="250px" // Adjustable height
                            />
                        </div>

                        <p>
                            The hostels and mess blocks have access to a very good campus internet network (wired and wireless).
                            Adequate common bathrooms, washrooms, cloth washing machines-drying area and indoor play areas are available in each floor along with three spacious common rooms.
                            These common rooms have television, a study setup and to encourage various social/recreational/group activities such as meetings.
                            Water filter facility is available in the hostels in each wing round the clock.
                            Availability of dedicated bicycle stands, courtyards for outdoor activities, nurse station and medical isolation rooms, security, housekeeping and other hostel staff on 24 hours duty are salient features of these hostels.
                        </p>

                        <div>
                            <ImageGrid
                                key={2}
                                images={images.slice(3, 6)} // First set of images
                                width="332px" // Adjustable width
                                height="250px" // Adjustable height
                            />
                        </div>

                        <p>
                            While basic furniture are provided, students have to arrange for their personal furnishings like beds and bedsheets.
                            IIT Dharwad hostels provide an ideal, social and peaceful environment for studies and all-round personality.
                        </p>
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <div className='rounded custom-important-container pt-5 col-md-4 row'>
                        <div className='col-md-12 d-flex flex-column align-items-center text-center mb-5'>
                            <h2 className='text-decoration-underline'>HOSTEL WARDENS</h2>
                        </div>

                        <div className='d-flex flex-column align-items-center text-center'>
                            <PeopleList
                                mainTitle=""
                                items={wardens}
                            />
                        </div>

                    </div>
                </div>


            </motion.div>
        </>
    )
}
