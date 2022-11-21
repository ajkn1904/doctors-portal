import React from 'react';
import chair from '../../../../assets/images/chair.png'
import bgChair from '../../../../assets/images/bg.png'

import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


    return (
        <div className="hero py-16 sm:py-16 md:py-20 lg:py-24" style={{background:`url(${bgChair})`, backgroundSize: 'cover'}}>
            <div className="hero-content flex-col
            md:flex-row-reverse lg:flex-row-reverse">
                <img className='w-full sm:w-full md:w-1/2 lg:w-1/2 rounded-lg shadow-2xl' src={chair} alt="patient's bed chair"/>
                <div className={'card bg-white shadow-xl p-6 mt-16 sm:mt-16 md:mr-20 lg:mr-32'}>
                 
                    <DayPicker
                        mode = 'single'
                        selected = {selectedDate}
                        onSelect = {setSelectedDate}
                        >
                    </DayPicker>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;