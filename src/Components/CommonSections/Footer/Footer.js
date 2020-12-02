import React from 'react';
import './Footer.css';


// -------------------------Footer section of ALL pages----------------------


const Footer = () => {
    return (
        <div className="footer" style={{ padding: "40px", marginTop: "50px" }}>
            <div className="row">
                <div className="col-md-4" style={{ padding: "40px" }}>                            <h1 style={{ color: "white" }}>About</h1>
                    <p style={{ color: "lightGrey" }}>Synapes Life Sciences Pvt. Ltd. is rated as the fastest growing pharmaceutical organization. The vision that it has believed in "to Save Lives Through Life Saving Drugs" has earned it tremendous goodwill of being a respected and reputed. In addition, professional ethics govern policies regarding Finance and Accounting, Human Resource, Sales and Marketing, Production .</p></div>
                <div className="col-md-4" style={{ padding: "40px" }}>
                    <h1 style={{ color: "white" }}>Contact Details</h1>
                    <h6 style={{ color: "white" }}> 310 Aggarwal Chamber, Plot No.4, Sector 12, Dwarka, New Delhi-110078</h6>
                    <h6 style={{ color: "white" }}>Call Us Now  </h6>
                    <h6 style={{ color: "lightGrey" }}>011-49124675</h6>
                    <h6 style={{ color: "white" }}>Send Mail Us</h6>
                    <h6 style={{ color: "lightGrey" }}>synapeslifesc@gmail.com</h6>
                </div>
                <div className="col-md-4" style={{ padding: "40px" }}>
                    <h1 style={{ color: "white" }}> Usefull Links</h1>
                    <h6 style={{ color: "lightGrey" }}> > Home</h6>
                    <h6 style={{ color: "lightGrey" }}> > About</h6>
                    <h6 style={{ color: "lightGrey" }}> > Products</h6>
                    <h6 style={{ color: "lightGrey" }}> > Enquiry</h6>
                    <h6 style={{ color: "lightGrey" }}> > Contact us</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;