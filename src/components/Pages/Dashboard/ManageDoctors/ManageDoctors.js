import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import ActionModal from '../../../Shared/ActionModal/ActionModal';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', 
                {
                    headers:{
                        authorization: `bearer ${localStorage.getItem('DPtoken')}`
                    }
                })
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    })



    const handleDeleteDoctor = (doctor) => {
        //console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('DPtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
            toast.success(`Doctor ${doctor.name} deleted successfully`)
            refetch()
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    const closeModal = () => {
        setDeleteDoctor(null)
    }

    return (
        <div className='p-5 sm:p-5 md:p-8 lg:p-14 my-5'>

            <h2 className='text-2xl font-bold p-6'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {doctors && doctors?.map((doctor, i) => <tr key={doctor._id} className="hover">
                            <th>{[i + 1]}</th>
                            <td className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src={doctor.image} alt=""/>
                                </div>
                            </td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                               <label  htmlFor="confirmation-modal" onClick={() => setDeleteDoctor(doctor)} className='btn btn-error btn-sm'>Delete</label>
                            </td>

                        </tr>

                        )
                        }
                    </tbody>
                </table>
            </div>
            <Toaster></Toaster>

            {
                deleteDoctor && <ActionModal 
                title={`Are you sure you want to delete doctor ${deleteDoctor.name}?`} 
                message={'If you proceed this action cannot be undone'} 
                proceedModal = {handleDeleteDoctor}
                proceedBtnName = "Delete"
                modalData = {deleteDoctor}
                closeModal= {closeModal}></ActionModal>
            }
        </div>
    );
};

export default ManageDoctors;