import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../../Loading/Loading';

const Dashboard = () => {

    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('DPtoken')}`
                }
            })
            const data = await res.json()
            return data
        } 
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='p-5 sm:p-5 md:p-8 lg:p-14 my-5'>
        <h2 className='text-2xl my-6 font-bold'>My Appointment</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Slot</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                { bookings && 
                bookings?.map((booking, i) => <tr key={booking._id} className="hover">
                    <th>{[i+1]}</th>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.treatmentName}</td>
                    <td>{booking.selectedDate}</td>
                    <td>{booking.treatmentSlot}</td>
                    </tr>
                    
                )   
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Dashboard;