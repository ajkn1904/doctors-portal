import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className='p-5'>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>

            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
            <Toaster></Toaster>
        </div>
    );
};

export default Appointment;