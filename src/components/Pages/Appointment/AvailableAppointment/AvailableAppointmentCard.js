import React from 'react';

const AvailableAppointmentCard = ({option, setTreatment}) => {
    const {name, slots} = option

    const handleTreatment = (data) => {
        setTreatment(data)
    }

    return (
        <div className="card shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>
                    {(slots.length > 0) ? slots[0] : 'Please try another day'}
                </p>
                <p>
                    {slots.length} {(slots.length > 1) ? 'spaces' : 'space'} are available
                </p>
                <div>
                    <label className='btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-green-400 text-white' disabled={slots.length === 0} htmlFor="appointment-modal" onClick={() => handleTreatment(option)}>Book Appointment</label>
                    
                </div>
            
            </div>
        </div>
    );
};

export default AvailableAppointmentCard;