import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import phone from '../../../../assets/icons/phone.svg'
import marker from '../../../../assets/icons/marker.svg'
import BannerCardData from './BannerCardData';

const BannerCard = () => {

    const cardInfo = [
        {
            id: 1,
            icon: clock,
            name: 'Opening Hours',
            text: 'Open 9.00 am to 8.00 pm everyday',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            icon: marker,
            name: 'Visit our location',
            text: 'Brooklyn, NY 10036, United States',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            icon: phone,
            name: 'Contact us now',
            text: '+000 123 456789',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            { cardInfo.map(item => <BannerCardData item={item} key={item.id}></BannerCardData>)
            }
        </div>
    );
};

export default BannerCard;