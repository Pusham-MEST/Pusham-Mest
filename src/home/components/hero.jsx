import React from 'react';
import { Link } from 'react-router-dom';
import { hero } from '../../assets';

const Hero = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Welcome to Our Power Outage Alert Platform</h1>
                <p className="text-base sm:text-lg lg:text-xl mb-5">Stay updated with the latest outage alerts.</p>
                <Link to="/SignUpAlerts">
                    <button className="btn btn-primary px-6 py-3 bg-blue-500 rounded">Sign Up for Alerts</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
