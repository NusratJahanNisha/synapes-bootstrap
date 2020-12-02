import React from 'react';


// --------------------Mission vision section of ABOUT US page------------------------


const MissionAndVision = () => {
    return (
        <div style={{ marginTop: "50px", padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Our Mission And Vision</h1>
            <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-md-6">                                <img style={{ width: "100%" }} src="https://i.ibb.co/cT2Mvz0/mission-Vision.jpg" alt="" /></div>
                <div className="col-md-6">
                    <h3>Our mission is to discover new ways to improve and extend people's lives!</h3>
                    <p style={{ color: "grey" }}>We use science-based innovation to address some of society's most challenging healthcare issues. We discover and develop breakthrough treatments and find new ways to deliver them to as many people as possible. We also aim to provide a shareholder return that rewards those who invest their money, time and ideas in our company. <br /> Our vision is to be a trusted leader in changing the practice of medicine. </p>
                </div>
            </div>

        </div>
    );
};

export default MissionAndVision;