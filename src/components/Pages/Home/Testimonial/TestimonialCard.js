import React from 'react';

const TestimonialCard = ({ data }) => {
    const { name, img, text, location } = data
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className='flex items-center gap-4 mt-9'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='people' />
                        </div>
                    </div>
                    <div>
                        <h4 className="card-title">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;