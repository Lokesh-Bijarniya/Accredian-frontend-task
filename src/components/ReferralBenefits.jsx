import React from "react";
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ChevronRight } from "lucide-react";
import degreeIcon from "../assets/degree-icon.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import ReferralModal from "./ReferralModal";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const ReferralBenefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const programs = [
    "ALL PROGRAMS",
    "Product Management",
    "Strategy & Leadership",
    "Business Management",
    "Fintech",
    "Senior Management",
    "Data Science",
    "Digital Transformation",
    "Business Analytics",
  ];
  const tableData = [
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen py-6 px-4 mt-6 md:mb-44  mx-auto md:w-3/4">
      {/* Header */}
      <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h1>

      <div className="md:px-6 mt-12 w-full flex items-center gap-1 text-gray-500 justify-end">
        Enrolled <ToggleOnIcon className="text-blue-500"/>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 bg-white rounded-xl mt-6">
          <div className="divide-y divide-gray-200 rounded-xl">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                  index === 0
                    ? "bg-blue-500 font-semibold text-white"
                    : "text-gray-800 hover:bg-gray-100"
                } cursor-pointer`}
              >
                {program}
                <ChevronRight
                  className={index === 0 ? "text-white" : "text-gray-400"}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Table Section */}
        <div className="flex-1 bg-white shadow-xl rounded-lg md:p-6">
          <TableContainer component={Paper} className="shadow-md">
            <Table>
              <TableHead className="bg-blue-300">
                <TableRow>
                  <TableCell className="font-semibold text-blue-800">
                    Program
                  </TableCell>
                  <TableCell className="font-semibold text-blue-800">
                    Referrer Bonus
                  </TableCell>
                  <TableCell className="font-semibold text-blue-800">
                    Referee Bonus
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="flex  items-center gap-2 text-gray-800">
                      <div className="flex gap-2"><img src={degreeIcon} alt="icon" className="w-6 h-6" />{row.program}</div>
                    </TableCell>
                    <TableCell className="text-gray-800">
                      {row.referrerBonus}
                    </TableCell>
                    <TableCell className="text-gray-800">
                      {row.refereeBonus}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="flex justify-end mt-4">
            <button className="text-gray-400 rounded-sm cursor-pointer border px-2 py-1">Show More
              <KeyboardArrowDownIcon className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-blue-500 px-6 py-2 text-white rounded-sm cursor-pointer"
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
};

export default ReferralBenefits;