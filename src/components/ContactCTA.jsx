import React from 'react';
import ContactIcon from '../assets/contact-icon.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ContactCard = () => {
  return (
    <div
      className="bg-blue-500 rounded-lg p-6 flex items-center justify-between bg-cover bg-center shadow-md "
    >
      <div className="flex items-center">
        <div className="bg-white rounded-xl mr-4 shadow">
          <img
            src={ContactIcon} 
            alt="Icon"
            className="w-full h-full text-blue-600"
          />
        </div>
        <div>
          <h2 className="text-lg text-white font-semibold">Want to delve deeper into the program?</h2>
          <p className="text-sm text-white">Share your details to receive expert insights from our program team!</p>
        </div>
      </div>
      <button className="bg-white text-blue-600 rounded px-4 py-2  shadow hover:bg-gray-200 transition duration-200">
        Get in touch <ArrowForwardIosIcon fontSize='small'/>
      </button>
    </div>
  );
};

export default ContactCard;