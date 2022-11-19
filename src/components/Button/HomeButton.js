import React from 'react';

const HomeButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-green-400 text-white">{children}</button>
    );
};

export default HomeButton;