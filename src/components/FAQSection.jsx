import React, { useState } from "react";
import AccordionExpandIcon from "../ui/Accordion";
import ContactCard from "./ContactCTA";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Eligibility");

  
  return (
    <div className="md:w-3/4 mx-auto mt-24 flex flex-col gap-16">
      {/* Header */}
      <h5 className="text-2xl text-gray-800 mb-6 text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h5>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-4 md:pr-8 p-1 lg:pr-16">
          {["Eligibility", "How To Use?", "Terms & Conditions"].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-6 cursor-pointer rounded-sm ${
                activeTab === tab
                  ? "text-blue-600 bg-blue-50 shadow-2xl"
                  : "bg-white text-gray-600 border "
              } hover:bg-blue-100 transition-all duration-200`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="flex-1">
          <AccordionExpandIcon />
        </div>
      </div>



      <div>
        <ContactCard/>
      </div>
    </div>
  );
}