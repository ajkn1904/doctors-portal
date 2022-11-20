import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const testimonialData = [
        {
            id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            location: 'California'
        
        },
        {
            id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Winsona Lerry',
            location: 'New York'
        
        },
        {
            id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Watson Jerry',
            location: 'Washington DC'
        
        },
    ] 

    return (
        <div className='my-20 p-14'>
            <div className='flex justify-between items-center'> 
                <div>            
                <p className='text-xl text-secondary font-bold'>Testimonial</p>
                <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>   
                <img className='h-[192px] w-[192px]' src={quote} alt="" />
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
            { testimonialData.map(data => <TestimonialCard data={data} key={data.id}></TestimonialCard>)
            }
            </div>
        </div>
    );
};

export default Testimonial;