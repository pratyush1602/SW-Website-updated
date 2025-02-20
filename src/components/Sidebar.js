import React, { useState } from 'react';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import logo from '../pages/images/logo-iit.jpg'
import Footer from './footer';



const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="container">
                {/* SIDEBAR */}
                <div className="sidebar" >
                    {/* <div className='sidebar-wrap'> */}
                        <div className='logo'>
                        <NavLink to="/" className="logo-in">
                        <img src={logo} alt='logo' style={{ height: "50px", width: "50px", borderRadius: "50%", margin: "5px", cursor: "pointer" }}></img>
                        </NavLink>

                        </div>

                        <div style={{ color: "white" }} className='web-links'>
                            <ul style={{ listStyleType: "none", display: "flex", fontSize: "10px"}}>
                                {/* <li className='link-li'> */}
                                    {/* <NavLink to="/" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}> */}
                                        {/* <div > <p >Home</p> </div> */}
                                        {/* <LiaGreaterThanSolid /> */}
                                    {/* </NavLink> */}
                                {/* </li> */}
                                <li className='link-li'>
                                    <NavLink to="/dean_associate_deans" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Dean and Associate Deans</p></div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/administrative_office" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Administrative Office</p> </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/student_life" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Students Campus Life</p> </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/hostels" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Hostels</p> </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/mess_canteen" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Mess & Canteen</p> </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/gymkhana" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Gymhkana</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Club, Sports, NSS/NCC)</p> */}
                                        </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/wellness" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p  >Health</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Health & Counselling Centre)</p> */}
                                        </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/counselling" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p  >Counselling</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Health & Counselling Centre)</p> */}
                                        </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="https://www.iitdh.ac.in/details" style={{ display: "flex", justifyContent: "space-between", color: "white", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Alumni Association</p> </div>
                                        {/* <LiaGreaterThanSolid /> */}
                                    </NavLink>
                                </li>
                                {/* <li className='link-li-li'> */}
                                {/* <NavLink to="/others" style={{ display: "flex", justifyContent: "space-between", color: "white", alignItems: "center" }}> */}
                                {/* <div className='link-li-p'> <p >Others</p> </div> */}
                                {/* <LiaGreaterThanSolid /> */}
                                {/* </NavLink> */}
                                {/* </li> */}

                            </ul>
                        </div>
                    {/* </div> */}
                </div>
                <div className="oldsidebar" style={{ display: isOpen ? "block" : "" }}>


                        <div style={{ color: "white" }} className='web-links'>
                            <ul style={{ listStyleType: "none" }}>
                                <li className='link-li'>
                                    <NavLink to="/" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Home</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/dean_associate_deans" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Dean and Associate Deans</p></div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/administrative_office" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Administrative Office</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/student_life" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Students Campus Life</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/hostels" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Hostels</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/mess_canteen" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Mess & Canteen</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/gymkhana" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Gymhkana</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Club, Sports, NSS/NCC)</p> */}
                                        </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="/wellness" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p  >Health</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Health & Counselling Centre)</p> */}
                                        </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>

                                <li className='link-li'>
                                    <NavLink to="/counselling" style={{ display: "flex", color: "white", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className='link-li-p'> <p  >Counselling</p>
                                            {/* <p style={{ fontSize: "1.1rem" }}>(Health & Counselling Centre)</p> */}
                                        </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                <li className='link-li'>
                                    <NavLink to="https://www.iitdh.ac.in/details" style={{ display: "flex", justifyContent: "space-between", color: "white", alignItems: "center" }}>
                                        <div className='link-li-p'> <p >Alumni Association</p> </div>
                                        <LiaGreaterThanSolid />
                                    </NavLink>
                                </li>
                                {/* <li className='link-li-li'> */}
                                {/* <NavLink to="/others" style={{ display: "flex", justifyContent: "space-between", color: "white", alignItems: "center" }}> */}
                                {/* <div className='link-li-p'> <p >Others</p> </div> */}
                                {/* <LiaGreaterThanSolid /> */}
                                {/* </NavLink> */}
                                {/* </li> */}

                            </ul>
                        </div>

                </div>

                <div className='side-data'>

                    {/* TOPBAR */}
                    <div className="topbar">
                        <div className="top_section">
                            <div className='top-info'>
                                <div className='info1'>


                                    <img src={logo} alt='logo' style={{ borderRadius: "50%", objectFit: "cover", marginRight: "20px", cursor: "pointer" }}></img>


                                    <h1 className='logo-1' style={{ color: "white", letterSpacing: "2.5px", fontWeight: "600", textAlign: "center" }}>IIT </h1>
                                    <h1 className='logo-1' style={{ color: "white", letterSpacing: "2.5px", fontWeight: "600", textAlign: "center" }}>DHARWAD  </h1>

                                </div>
                                <div className='info2'>
                                    <h1 className='logo-1' style={{ color: "white", letterSpacing: "2.5px", fontWeight: "600", textAlign: "center" }}>STUDENT</h1>
                                    <h1 className='logo-1' style={{ color: "white", letterSpacing: "2.5px", fontWeight: "600", textAlign: "center" }}>WELFARE</h1>
                                    <h1 className='logo-1' style={{ color: "white", letterSpacing: "2.5px", fontWeight: "600", textAlign: "center" }}>DIVISION</h1>
                                </div>
                            </div>
                            <div className="bars" onClick={toggle}>
                                {isOpen ? <RxCross2 style={{ fontWeight: "600" }} /> : <FaBars />}
                            </div>
                        </div>
                    </div>

                    {/* ALL PAGES */}
                    <div className='main-data'>
                        <main>{children}</main>

                    </div>

                    {/* <div className='footer-bar'>
                        style={{ height: "30px" }}
                        <div className='footbar-1'> <p>You are in Internet Website.</p></div>
                        <div className='footbar-1'> <p>For IIT Dharwad faculty and students</p></div>
                        <div className='footbar-1'>
                            <p><a href='https://intranet.iitdh.ac.in:444/' style={{ color: "#0969DA" }}>click here</a> to access intranet.</p>
                            <div><Count/></div>
                        </div>


                        , marginRight: "25%"
                    </div> */}
                    {/* <div className='footer-bar'> */}
                    {/* </div> */}
                </div>
            </div>
                        <Footer/>
        </>
    );
};

export default Sidebar;
