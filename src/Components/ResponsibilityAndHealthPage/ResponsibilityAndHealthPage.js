import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import HealthBanner from './HealthBanner/HealthBanner';


// ------------------------Whole RESPONSIBILITY AND HEALTH page---------------------


const ResponsibilityAndHealthPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HealthBanner></HealthBanner>
            <DescriptionSection></DescriptionSection>
            <Footer></Footer>
        </div>
    );
};

export default ResponsibilityAndHealthPage;