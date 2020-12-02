import React from 'react';


// -------------------------Contact Info section of CONTACT US page----------------


const ContactInfo = () => {
    return (
        <div style={{ margin: "50px" }}>
            <div className="row">
                <div className="col-md-4 box">
                    <h4 style={{ color: "#4ED0F3" }}>Synapes Life Sciences Pvt. Ltd.</h4>
                    <p><span style={{ color: "#4ED0F3" }}>Street: </span> 10 Aggarwal Chamber</p>
                    <p><span style={{ color: "#4ED0F3" }}>City: </span> Plot No.4, Sector 12, Dwarka</p>
                    <p><span style={{ color: "#4ED0F3" }}> Country: </span>  New Delhi-110078</p>
                </div>
                <div className="col-md-4 box">
                    <h4 style={{ color: "black" }}>24/7 Quick Contact</h4>
                    <p><span style={{ color: "#4ED0F3" }}>Phone: </span> 011-49124675</p>
                    <p><span style={{ color: "#4ED0F3" }}>Email:  </span> synapeslifesc@gmail.com</p>
                    <p><span style={{ color: "#4ED0F3" }}> Website:</span>www.synapeslifesc.in</p>
                </div>
                <div className="col-md-4 box">
                    <h4 style={{ color: "black" }}>Working Hours</h4>
                    <p><span style={{ color: "#4ED0F3" }}>Mon - Fri Day:  </span> 09.00am to 18.00pm</p>
                    <p><span style={{ color: "#4ED0F3" }}>Saturaday: </span> 10.00am to 16.00pm</p>
                    <p><span style={{ color: "#4ED0F3" }}>Sunday: </span>  Closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;