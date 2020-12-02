import React from 'react';


// ------------------------------------Experience section of HOME page---------------------


const Experience = () => {

    return (
        <div style={{ padding: "50px" }}>
            <h1 style={{ textAlign: "center", margin: "10px" }}>We have 25 years of experience</h1>
            <h4 style={{ textAlign: "center", color: "grey", margin: "15px" }}>We have rich experience in critical care segment, neurology segment and nephology segment, We are covering all the major hospitals and customers.</h4>
            <div className="row" style={{ padding: "50px" }}>
                <div className="col-md-3"><h1 style={{ fontSize: "70px", textAlign: "center" }}>50+</h1><p style={{ fontSize: "27px", paddingBottom: "40px", textAlign: "center" }}>   Medicines</p></div>
                <div className="col-md-3"><h1 style={{ fontSize: "70px", textAlign: "center" }}>100+</h1><p style={{ fontSize: "27px", paddingBottom: "40px", textAlign: "center" }}>  Expert Technicians</p></div>
                <div className="col-md-3"><h1 style={{ fontSize: "70px", textAlign: "center" }}>853+</h1><p style={{ fontSize: "27px", paddingBottom: "40px", textAlign: "center" }}>Happy Customers</p></div>
                <div className="col-md-3"><h1 style={{ fontSize: "70px", textAlign: "center" }}>1000+</h1><p style={{ fontSize: "27px", paddingBottom: "40px", textAlign: "center" }}>  Cups of Coffee</p></div>
            </div>
        </div>
    );
};

export default Experience;