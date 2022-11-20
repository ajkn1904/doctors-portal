import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import OurServicesCard from './OurServicesCard';

const OurServices = () => {

    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride 
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity 
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening 
        },
    ]

    return (
        <div className='my-36 text-center'>

            <h3 className='text-secondary font-bold text-xl'>OUR SERVICES</h3>
            <h1 className='text-4xl mb-16'>Services We Provide</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            { services.map(data => <OurServicesCard data={data} key={data.id}></OurServicesCard>)
            }
            </div>
        </div>
    );
};

export default OurServices;