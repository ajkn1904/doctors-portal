import React from 'react';
import BannerCard from './BannerCard/BannerCard';
import ContactUs from './ContactUs/ContactUs';
import ExceptionalCare from './ExceptionalCare/ExceptionalCare';
import HomeBanner from './HomeBanner';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import OurServices from './OurServices/OurServices';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='p-5'>
            <HomeBanner></HomeBanner>
            <BannerCard></BannerCard>
            <OurServices></OurServices>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;