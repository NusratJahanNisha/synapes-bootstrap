import React from 'react';


// ------------------Description section of RESPONSIBILITY AND HEALTH page-------------------------


const DescriptionSection = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Working At Synapes</h1>
            <div className="row" style={{ padding: "50px" }}>
                <div className="col-md-6">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/0Qr9mH8/health.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <p style={{ color: "grey" }}>
                        At Synapes, we believe every individual deserves the opportunity to live the healthiest life possible. That’s why we strive to strengthen health systems, increase access to our medicines and foster socially responsible entrepreneurship to help find sustainable solutions for patients in need around the world. We also realize the power of individuals to drive meaningful change in today’s global health landscape. It's these singular voices that inspire us to make the best use of our people, our products and our funding to address complex public health challenges. Here you will find the stories of our partners, patients, caregivers, colleagues, and others who inspire us with their efforts to change lives and make the world a healthier place.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DescriptionSection;