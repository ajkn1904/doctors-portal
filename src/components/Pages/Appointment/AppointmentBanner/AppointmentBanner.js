import React from 'react';
import chair from '../../../../assets/images/chair.png'
import bgChair from '../../../../assets/images/bg.png'

import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    


    return (
        <div className="hero pt-16 pb-20 sm:pt-16 sm:pb-20 md:pt-20 md:pb-44 lg:pt-24 lg:pb-52" style={{background:`url(${bgChair})`, backgroundSize: 'cover'}}>
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