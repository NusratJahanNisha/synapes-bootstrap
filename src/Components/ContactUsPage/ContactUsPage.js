import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactInfo from './ContactInfo/ContactInfo';
import MessageUs from './MessageUs/MessageUs';


// --------------------------Whole CONTACT US page-------------------


const ContactUsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <MessageUs></MessageUs>
            <Footer></Footer>
        </div>
    );
};

export default ContactUsPage;