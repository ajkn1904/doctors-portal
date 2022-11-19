import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgChair from '../../../assets/images/bg.png'
import HomeButton from '../../Button/HomeButton';

const HomeBanner = () => {
    return (
        <div className="hero pt-16 pb-20 sm:pt-16 sm:pb-20 md:pt-20 md:pb-44 lg:pt-24 lg:pb-52" style={{background:`url(${bgChair})`, backgroundSize: 'cover'}}>
            <div className="hero-content flex-col
            md:flex-row-reverse lg:flex-row-reverse">
                <img className='w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-2xl' src={chair} alt="patient's bed chair"/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                    <HomeButton>Get Started</HomeButton>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;