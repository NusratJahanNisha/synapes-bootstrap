import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import CareerBanner from './CareerBanner/CareerBanner';
import EmployeeBenefits from './EmployeeBenefits/EmployeeBenefits';
import Why from './Why/Why';
import WorkingAtSynapes from './WorkingAtSynapes/WorkingAtSynapes';


// ------------------------------Whole Career Page-------------------------


const CareerPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CareerBanner></CareerBanner>
            <Why></Why>
            <EmployeeBenefits></EmployeeBenefits>
            <WorkingAtSynapes></WorkingAtSynapes>
            <Footer></Footer>
        </div>
    );
};

export default CareerPage;