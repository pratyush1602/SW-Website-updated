import React from 'react';
import './footer.css'; // Import the CSS file for custom styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* <div className="row"> */}
                    <div className="footer-col">
                        <ul>
                            <li> INDIAN INSTITUTE OF TECHNOLOGY DHARWAD</li>
                            <li>PERMANENT CAMPUS</li>
                            <li>CHIKKAMALLIGAWAD</li>
                            <li>DHARWAD - 580 007</li>
                            <li>KARNATAKA</li>
                            <li>BHARATA (INDIA)</li>
                        </ul>
                    </div>
                    <div className="footer-col a">
                        {/* <h4>LINKS</h4> */}
                        <ul>
                            <li>                            <p><a href='https://intranet.iitdh.ac.in:444/' style={{ color: "#0969DA" }}>click here</a> to access intranet.</p>
                            </li>
                           
                        </ul>
                    </div>
                    
                   
                {/* </div> */}
            </div>
        </footer>
    );
};

export default Footer;
