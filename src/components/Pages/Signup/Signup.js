import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import useToken from '../../../hooks/UseToken';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const { createUser, userUpdate, loading } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    },[token, navigate])


    if (loading) {
        return <Loading></Loading>
    }




    const storeUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }


    const handleProfile = (data) => {

        const userInfo = {
            displayName: data.name
        }


        userUpdate(userInfo)
            .then(() => {
                storeUser(data.name, data.email)
            })
            .catch(error => {
                setSignUpError(error.message);
            })
    }


    const handleSignUp = (data) => {

        if (data.password !== data.confirmPassword) {
            setSignUpError('Your password did not match.')
            return setSignUpError;
        }

        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Sign Up Successful')
                handleProfile(data)

            })
            .catch(error => {
                setSignUpError(error.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center my-20'>
            <div className='card shadow-xl  w-96 p-7'>
                <h1 className='text-xl font-bold text-center my-10'>Sign Up</h1>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" className="w-full my-3 input input-bordered"  {...register("name")} />




                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="w-full my-3 input input-bordered"  {...register("email", { required: "Email is required" })} />

                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}



                    <label>
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="w-full my-3 input input-bordered"  {...register("password",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be at least 6 character long' },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: 'Password must contain at least an uppercase, a special character and a number.'
                            }
                        })} />

                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}



                    <label>
                        <span className="label-text">Re-type Password</span>
                    </label>
                    <input type="password" className="w-full my-3 input input-bordered"  {...register("confirmPassword",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be at least 6 character long' }
                        })} />

                    {errors.confirmPassword && <p className='text-error'>{errors.confirmPassword?.message}</p>}



                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                    <small className='text-red-600'>{signUpError}</small>



                    <div className="flex flex-col w-full border-opacity-50">

                        <button className="w-full my-3 btn btn-accent text-white" type="submit">Sign Up</button>
                        <small>Already have an account? <Link to="/login" className='text-secondary'>Login now</Link></small>

                        <div className="divider">OR</div>

                        <button className="w-full my-3 btn btn-outline" type="submit">CONTINUE WITH GOOGLE</button>

                    </div>

                </form>

            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Signup;