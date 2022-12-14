import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="p-10 overflow-hidden" style={{background: `url(${footerBg})`, backgroundSize: 'cover'}}>
            <div className='footer  ml-24'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center mt-16'>
                <Link to='/' className="link link-hover">Terms of use</Link> <> || </> 
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <p>Copyright © 2022 - All right reserved by Anika Jumana Khanam</p>
            </div>
        </footer>
    );
};

export default Footer;