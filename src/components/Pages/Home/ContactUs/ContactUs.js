import React from 'react';
import bg from '../../../../assets/images/appointment.png'
import HomeButton from '../../../Button/HomeButton';

const ContactUs = () => {
    return (
        <div className='content-center p-16' style={{background: `url(${bg})`}}>
                
                <div className='text-center'> 
                    <p className='font-bold text-xl text-secondary'>Contact Us</p>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>

                <div className='max-w-xs mx-auto mt-10 mb-9 flex flex-col justify-center items-center'>
                    <input type="text" placeholder="Email address" className="input w-full mx-auto my-5 max-w-xs" />
                    <br/>
                    <input type="text" placeholder="Subject" className="input w-full my-5 max-w-xs" />
                    <br/>
                    <textarea className="textarea w-full max-w-xs my-5 mx-auto" placeholder="Your message"></textarea>
                </div>
                
                <div className='flex justify-center'>
                    <HomeButton>Submit</HomeButton>
                </div>
            
        </div>
            
    );
};

export default ContactUs;