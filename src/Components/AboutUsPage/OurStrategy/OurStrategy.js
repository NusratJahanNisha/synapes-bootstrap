import React from 'react';


// --------------------------Our strategy section of ABOUT US page-------------------

const OurStrategy = () => {
    
    return (
        <div style={{ marginTop: "50px", padding: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Our Strategy</h1>
            <div className="row" style={{ marginTop: "80px" }}>
                <div className="col-md-6">
                    <h5>Our mission is to discover new ways to improve and extend people's lives!</h5>
                    <p style={{ color: "grey" }}>We believe synapes is well prepared for a world with a growing, aging population and continuously evolving healthcare needs. We have a clear mission, focused strategy and strong culture, all of which we expect will support the creation of value over the long term for our company, our shareholders and society. Our strategy is to use science-based innovation to deliver better patient outcomes. We aim to lead in growing areas of healthcare.</p>
                    <h5> Better patient outcomes</h5>
                    <p style={{ color: "grey" }}>We seek to develop medicines and products that can produce positive real-world outcomes for patients and healthcare providers. The benefits can range from improving the cost-¬effectiveness of high-quality care to pro¬longing lives. We are developing services and technol¬o¬gies to augment the benefits of our core products, often in collaboration with healthcare providers and technology companies.</p>
                    <h5> Lead in growing areas of healthcare</h5>
                    <p style={{ color: "grey" }}>We aim to develop innovative products in growing areas of healthcare where we can make a real difference. We focus on patented medicines, critical care and neurological – segments where we have the innovation power and global scale necessary to compete effectively.</p>
                </div>
                <div className="col-md-6" style={{ padding: "20px" }}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/wWX7j11/our-strategy.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurStrategy;