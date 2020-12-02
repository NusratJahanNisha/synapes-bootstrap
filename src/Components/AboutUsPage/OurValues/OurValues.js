import React from 'react';


// ---------------------------Our values section of ABOUT US page-------------------


const OurValues = () => {
    
    return (
        <div style={{ marginTop: "50px", padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Our Values</h1>
            <div className="row" style={{ marginTop: "70px", padding: "30px" }}>
                <div className="col-md-6">
                    <p style={{ color: "grey" }}>Strong values define our culture and help us execute the Novartis strategy in line with our mission and vision.</p>
                    <h5> Innovation</h5>
                    <p style={{ color: "grey" }}>By experimenting and delivering solutions</p>
                    <h5> Quality</h5>
                    <p style={{ color: "grey" }}>By taking pride in doing ordinary things extraordinarily well</p>
                    <h5>Performance</h5>
                    <p style={{ color: "grey" }}>By prioritizing and making things happen with urgency</p>
                    <h5>  Courage</h5>
                    <p style={{ color: "grey" }}>By speaking up, giving and receiving feedback</p>
                    <h5>Integrity</h5>
                    <p style={{ color: "grey" }}>By advocating and applying high ethical standards every day</p>
                </div>
                <div className="col-md-6"> <img style={{ width: "100%", height: "100%" }} src="https://i.ibb.co/xMknWC7/our-values.jpg" alt="" /></div>
            </div>
            <h2 style={{ margin: "20px" }}>Synapes Life Sciences Pvt. Ltd. the right solution for you and your business</h2>
        </div>
    );
};

export default OurValues;