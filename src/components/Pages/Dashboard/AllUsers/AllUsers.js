import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const AllUsers = () => {

    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })

    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('DPtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Admin added successfully')
                refetch()
            }

        })
    }


    return (
        <div className='p-5 sm:p-5 md:p-8 lg:p-14 my-5'>
        <h2 className='text-2xl my-6 font-bold'>All Users: {allUsers.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                { allUsers.map((user, i) => <tr key={user._id} className="hover">
                    <th>{[i+1]}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {(user?.role !== 'Admin') &&
                        <button onClick={() => handleAdmin(user._id)} className='btn btn-primary btn-sm'>Make Admin</button>}
                    </td>
                    <td><button className='btn btn-error btn-sm'>Delete</button></td>
                    </tr>
                    
                )   
                }
                </tbody>
            </table>
        </div>
        <Toaster></Toaster>
        </div>
    );
};

export default AllUsers;