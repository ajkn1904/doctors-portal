import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import HomeButton from '../../../Button/HomeButton';

const ExceptionalCare = () => {
    return (
        <div className="hero min-h-screen mt-5 mb-32">
            <div className="hero-content flex-col lg:flex-row">
            <img className='w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-2xl' src={treatment} alt=''/>
                <div className=' md:ml-28 lg:ml-28'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    
                    <HomeButton>Get Started</HomeButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;