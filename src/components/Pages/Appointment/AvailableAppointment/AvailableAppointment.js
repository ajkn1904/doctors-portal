import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AvailableAppointmentCard from './AvailableAppointmentCard';

const AvailableAppointment = ({selectedDate}) => {

    //const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const {data: appointmentOption = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

/*     useEffect(() => {
        fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    }, []) */


    if(isLoading){
        <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <p className='text-secondary font-bold text-center text-2xl'>Available Services on {format(selectedDate, 'PP')}</p>
            <p className='text-center'>Please select a service.</p>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-12 md:gp-9 lg:gap-9 my-8'>
                {
                    appointmentOption.map(option => <AvailableAppointmentCard option={option} key={option._id} setTreatment={setTreatment}></AvailableAppointmentCard>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch}></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;