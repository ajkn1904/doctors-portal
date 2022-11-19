import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'
import background from '../../../../assets/images/appointment.png'
import HomeButton from '../../../Button/HomeButton';

const MakeAppointment = () => {
    return (
        <div className="hero my-20 text-white p-6 sm:p-6 md:p-3 lg:px-2" style={{background: `url(${background})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="max-w-sm rounded-lg shadow-2xl -mt-20 -mb-7 hidden md:block" alt='doctor'/>
                <div>
                    <p className='text-xl text-primary font-bold'>Appointment</p>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                    <HomeButton>Get Started</HomeButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;