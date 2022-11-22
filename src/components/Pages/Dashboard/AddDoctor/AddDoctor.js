import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbb_key


    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddADoctor = (data) => {
        console.log(data)
        const img = data.image[0]
        const formData = new FormData()
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url)

                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }



                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('DPtoken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Doctor added successful')
                    navigate('/dashboard/manageDoctors')
                })
            }
        })

    }

    return (
        <div className='w-96 p-6'>
            <h2 className='text-2xl font-bold p-6'>Add A Doctor</h2>

            <form onSubmit={handleSubmit(handleAddADoctor)}>

                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" className="w-full my-3 input input-bordered"  {...register("name")} />




                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" className="w-full my-3 input input-bordered"  {...register("email", { required: "Email is required" })} />

                {errors.email && <p className='text-error'>{errors.email?.message}</p>}



                <label className="label">
                    <span className="label-text">Specialty</span>
                </label>
                <select {...register("specialty")} className="select select-bordered w-full">

                    {specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                    }

                </select>


                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input type="file" className="w-full my-3 input input-bordered"  {...register("image", {
                    required: 'Photo is required'
                })} />

                {errors.image && <p className='text-error'>{errors.image?.message}</p>}



                <div className="flex flex-col w-full border-opacity-50">

                    <button className="w-full my-3 btn btn-accent text-white" type="submit">Add Doctor</button>

                </div>

            </form>


            <Toaster></Toaster>
        </div>
    );
};

export default AddDoctor;