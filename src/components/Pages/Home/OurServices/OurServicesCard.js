import React from 'react';

const OurServicesCard = ({data}) => {
    const {name, description, img} = data
    return (
        <div className='card shadow-xl p-6 flex'>
            
            <figure>
                <img src={img} alt="icon" />
            </figure>
            
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default OurServicesCard;