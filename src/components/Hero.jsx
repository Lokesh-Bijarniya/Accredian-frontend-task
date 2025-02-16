import React from 'react';
import Mobile from '../assets/mobile.svg';
import { useState } from 'react';
import ReferralModal from './ReferralModal';

export default function EarnCard() {
  const [activeTab, setActiveTab] = useState('Refer');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ['Refer', 'Benefits', 'FAQs', 'Support'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:w-2/3">

<div className="flex justify-center  items-center  pb-4">
      <div className="flex bg-blue-50 justify-between rounded-full w-full md:w-2/3 px-4 py-1 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full focus:outline-none transition 
            ${
              activeTab === tab
                ? 'text-blue-600 mt-1'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="block mx-auto w-1 h-1 bg-blue-600 rounded-full "></span>
            )}
          </button>
        ))}
      </div>
    </div>



    
      <div className="bg-blue-50 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 overflow-hidden"> 
        <div className="flex-1 p-8 space-y-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Let's Learn
            </h2> 
            <span className="text-4xl md:text-5xl font-bold text-blue-500">
              & Earn
            </span>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl md:text-3xl font-bold">
              Get a chance to win
              <br />
              up-to <span className="text-4xl text-blue-500">₹15,000</span>
            </p>
          </div>

          {/* Fixed button className (removed stray backtick) */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-sm text-lg 
            hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            >
            Refer Now
          </button>
        </div>

        <ReferralModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />

<div className="flex-1 w-full h-full hidden md:flex">
  <div className="rounded-xl h-64 md:h-full w-full flex items-center justify-center text-gray-400">
    <img src={Mobile} alt="Img" className="h-full object-cover" />
  </div>
</div>

      </div>
    </div>
  );
}