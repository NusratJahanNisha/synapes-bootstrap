import React from 'react';


//--------------------------Welcome section of HOME page--------------------- 


const WelcomeSection = () => {
    return (
        <div style={{ padding: "40px", marginTop:"50px" }}>
            <h1 style={{ textAlign: "center" }}>Welcome To Synapes Life Sciences Pvt. Ltd.</h1>
            <div class="card-deck" style={{paddingTop:"60px"}}>
                <div class="card">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/k2PnJRT/values.jpg" alt="" />
                    <div class="card-body">
                        <h3 class="card-title">Our Values</h3>
                        <p class="card-text">Our core values are driven by a desire to improve life, achieve scientific excellence, operate with the highest standards of integrity</p>
                    </div>
                </div>
                <div class="card">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/tcKsv3f/health.jpg" alt="" />
                    <div class="card-body">
                        <h3 class="card-title">Improving Life</h3>
                        <p class="card-text">We embrace our quest to tackle health challenges because we are inspired by the differences we can make in the lives of people around the world.</p>
                    </div>
                </div>
                <div class="card">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/9wbcnC8/ethics.jpg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">We are committed to the highest standards of ethics and integrity. We are responsible to our customers, to Merck employees, to the environments .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;