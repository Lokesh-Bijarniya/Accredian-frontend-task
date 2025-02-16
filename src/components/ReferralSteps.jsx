
import React, {useState} from 'react';
import ReferralModal from './ReferralModal';
import NoteIcon from '../assets/Note-icon.svg';
import addIcon from '../assets/add-icon.svg';
import walletIcon from '../assets/wallet-icon.svg';


function ReferralSteps() {
    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="min-h-screen bg-blue-50/50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 md:mb-24">
          How Do I <span className="text-blue-500">Refer?</span>
        </h1>

        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full">
            {/* First section (dashed with arrow) */}
            <div className="absolute left-[16%] right-[50%] top-0">
              {/* Dashed curved line */}
              <div className="absolute w-full h-px border-t-2 border-dashed border-blue-400 
                transform -translate-y-16 rounded-[100%]"></div>
              {/* Arrow */}
              <div className="absolute right-0 transform translate-x-1/2 -translate-y-16">
                <div className="relative w-3 h-3">
                  <div className="absolute w-3 h-0.5 bg-blue-400 transform rotate-45 origin-left"></div>
                  <div className="absolute w-3 h-0.5 bg-blue-400 transform -rotate-45 origin-left"></div>
                </div>
              </div>
            </div>
            
            {/* Second section (solid with arrow) */}
            <div className="absolute left-[50%] right-[16%] top-0">
              {/* Solid curved line */}
              <div className="absolute w-full h-px border-t-2 border-blue-500 
                transform translate-y-16 rounded-[100%]"></div>
              {/* Arrow */}
              <div className="absolute right-0 transform translate-x-1/2 translate-y-16">
                <div className="relative w-3 h-3">
                  <div className="absolute w-3 h-0.5 bg-blue-500 transform rotate-45 origin-left"></div>
                  <div className="absolute w-3 h-0.5 bg-blue-500 transform -rotate-45 origin-left"></div>
                </div>
              </div>
            </div>

            {/* Connection dots */}
            <div className="absolute w-full flex justify-between items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 transform translate-x-[16%]"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 transform -translate-x-[16%]"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {/* Step 1 */}
            <div className="bg-white rounded-full shadow-xl p-8 aspect-square flex items-center justify-center
              transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="mb-4">
                <img src={addIcon} alt="icon" className="h-12 w-12 "  />
                </div>
                <p className="text-gray-800 text-sm">
                  Submit referrals easily via our website's referral section.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-full shadow-lg p-8 aspect-square flex items-center justify-center
              transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="mb-4">
                <img src={NoteIcon} alt="icon" className="h-12 w-12"  />
                </div>
                <p className="text-gray-800 text-sm">
                  Earn rewards once your referral joins an Accredian program.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-full shadow-lg p-8 aspect-square flex items-center justify-center
              transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center max-w-[200px]">
                <div className="mb-4">
                <img src={walletIcon} alt="icon" className="h-12 w-12"  />
                </div>
                <p className="text-gray-800 text-sm">
                  Referrer receive a bonus 30 days after program enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full flex justify-center   mt-20">
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

    </div>
  );
}

export default ReferralSteps;