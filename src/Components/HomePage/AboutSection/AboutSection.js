import React from 'react';


// ----------------------------About us section of HOME page---------------------


const AboutSection = () => {

    return (
        <div style={{ margin: "40px" }}>
            <div class="card mb-3" >
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <div class="card-body" style={{ padding: "60px" }}>
                            <h1 class="card-title">About Synapes Life Sciences</h1>
                            <p class="card-text">We seek to develop medicines and products that can produce positive real-world outcomes for patients and healthcare providers. The benefits can range from improving the cost-¬effectiveness of high-quality care to pro¬longing lives. We are developing services and technol¬o¬gies to augment the benefits of our core products, often in collaboration with healthcare providers and technology companies. We are committed to creating a culture of integrity and we believe that, as a global leader in healthcare, we have a responsibility to serve as a role model in how we conduct our business. We focus our corporate responsibility work on two areas that underscore our mission, expanding access to healthcare and doing business responsibly. We care for our associates, contribute to our local communities, and strive to operate with high integrity and transparency. </p>
                        </div>
                    </div>
                    <div class="col-md-6" style={{ padding: "20px", paddingTop: "70px" }}>
                        <img style={{ width: "100%" }} src="https://i.ibb.co/7Wz8gz0/home-4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;