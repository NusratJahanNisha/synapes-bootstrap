import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import AboutSection from './AboutSection/AboutSection';
import CarouselSection from './CarouselSection/CarouselSection';
import Experience from './Experience/Experience';
import FeedbackSection from './FeedbackSection/FeedbackSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';


// -----------------------------Whole HOME page---------------------------------


const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CarouselSection></CarouselSection>
            <WelcomeSection></WelcomeSection>
            <AboutSection></AboutSection>
            <Experience></Experience>
            <FeedbackSection></FeedbackSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;