import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../../Loading/Loading';

const Login = () => {

    const { register, formState: {errors},handleSubmit } = useForm()

    const {userSignIn, loading} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathName || '/'


    if(loading){
        return <Loading></Loading>
    }


    const handleLogin = (data) => {
        setLoginError('')            
        userSignIn(data.email, data.password)
        .then((result) =>  {
            const user = result.user;
            navigate(from, {replace:true})
            console.log(user)
        })
        .catch((error) => {
            setLoginError(error.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='card shadow-xl  w-96 p-7'>
                <h1 className='text-xl font-bold text-center my-10'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="w-full my-3 input input-bordered"  {...register("email", {required: "Email is required"})} />
                    
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}

                    <label>
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="w-full my-3 input input-bordered"  {...register("password", 
                    {
                        required: "Password is required",
                        minLength:{value: 6, message: 'Password must be at least 6 character long'} 
                    })} />
                   
                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    <small className='text-red-600'>{loginError}</small>
                    


                    <div className="flex flex-col w-full border-opacity-50">
                        
                        <button className="w-full my-3 btn btn-accent text-white" type="submit">Login</button>
                        <small>New to Doctors Portal? <Link to="/signup" className='text-secondary'>Create new account</Link></small>
                        
                        <div className="divider">OR</div>
                        
                        <button className="w-full my-3 btn btn-outline" type="submit">CONTINUE WITH GOOGLE</button>
                    
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;