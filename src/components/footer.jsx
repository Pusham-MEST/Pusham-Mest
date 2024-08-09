import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add actual login check logic here
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/alertPage'); // Change to the actual alert page path
    } else {
      setShowModal(true); // Show modal when not logged in
    }
  };

  const handleSignUp = () => {
    setShowModal(false);
    navigate('/signUp'); // Navigate to the sign-up page
  };

  const handleLogin = () => {
    setShowModal(false);
    navigate('/login'); // Navigate to the login page
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      {/* Footer Content */}
      <footer className="footer text-base-content p-10 bg-[#1271B4]">
        {/* Footer Links */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Bills & Payments</a>
          <a className="link link-hover">Service Requests</a>
          <a className="link link-hover">Claims</a>
          <a className="link link-hover">Online Payments</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">News</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a
            href="https://www.eneocameroon.cm/index.php/fr/guide-du-client-eneo/guide-du-client-eneo-sommaire#gsc.tab=0"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover">
            Cookie policy
          </a>
        </nav>
        <div className="flex justify-end py-10">
          <button
            className="bg-[#96BF17] hover:bg-black text-white font-bold py-2 px-4 rounded-full flex flex-col items-center"
            onClick={handleButtonClick}>
            <span>Add Area</span>
          </button>
        </div>
      </footer>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={handleCloseModal}>
              &times;
            </button>
            <h3 className="text-xl mb-4">Please choose an option</h3>
            <div className="flex justify-between">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
                onClick={handleSignUp}>
                Sign Up
              </button>
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded-lg ml-2"
                onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bottom Content */}
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center w-[100px]">
          <img src={logo} alt="" />
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* Social Media Icons */}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
