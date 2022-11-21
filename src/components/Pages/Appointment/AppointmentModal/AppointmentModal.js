import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AppointmentModal = ({ treatment, setTreatment, selectedDate, refetch }) => {

    const {user} = useContext(AuthContext)
    const {name, slots} = treatment;

    const date = format(selectedDate, 'PP');

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name=form.name.value
        const email=form.email.value
        const phone=form.phone.value
        const selectedDate=form.selectedDate.value
        const treatmentSlot=form.treatmentSlot.value

        const treatmentName=treatment.name
        
        const booking = {
            name, email, phone, treatmentName, selectedDate, treatmentSlot
        }

        fetch('http://localhost:5000/bookings',{ 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged){
                setTreatment(null)
                toast.success('Booking Successful')
                refetch()
            }
            else{
                toast.error(data.response)
            }
        })
       
    }
    
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5 my-10'>
                        
                        <input type="text" name='selectedDate' placeholder="Type here" value={date} className="input input-bordered w-full" disabled />
                        <select name="treatmentSlot" className="select select-bordered w-full">
                            
                            {
                                slots.map(slot => <option value={slot} key={[slot]}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' defaultValue={user.displayName} placeholder="Full Name" className="input input-bordered w-full" disabled/>
                        <input type="text" name='email' defaultValue={user.email} placeholder="Email" className="input input-bordered w-full" disabled/>
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" required/>


                        <input type="submit" className="btn btn-accent text-white" />
                    
                    </form>
                
                </div>
            </div>

        </div>
    );
};

export default AppointmentModal;