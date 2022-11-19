import React from 'react';

const BannerCardData =({item}) => {
    return (
        <div className={`card md:card-side lg:card-side shadow-xl ${item.bgClass} text-white p-6 flex`}>
            
            <figure>
                <img src={item.icon} alt="icon" />
            </figure>
            
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.text}</p>
            </div>

        </div>
    );
};

export default BannerCardData;