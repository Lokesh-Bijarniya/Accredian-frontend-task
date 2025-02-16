import React, { useState } from "react";
import Logo from "../assets/logo.svg"; // Ensure this path is correct
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-4 py-2 lg:px-8 md:w-3/4 md:mx-auto">
      {/* Left Side: Logo and Courses Button */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="h-16 w-24" />
        <Button
          variant="contained"
          color="primary"
          className="hidden lg:flex items-center gap-1"
          endIcon={<KeyboardArrowDownIcon fontSize="small" />}
        >
          Courses
        </Button>
      </div>

      {/* Right Side: Navigation Links */}
      <div className="lg:hidden">
        {/* Hamburger Menu Icon for Small Screens */}
        <IconButton onClick={toggleMenu} color="primary">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex gap-6 items-center">
        <li>
          <Link to="/refer-and-earn" className="text-gray-700 hover:text-blue-500">
            Refer & Earn
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-gray-700 hover:text-blue-500">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
        </li>
        <li>
          <Button
            variant="outlined"
            color="inherit"
            className="hover:text-blue-500"
          >
            <Link to="/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="primary" className="hover:bg-blue-600">
            <Link to="/try-for-free">Try for free</Link>
          </Button>
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 w-64">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/refer-and-earn"
                className="text-gray-700 hover:text-blue-500 block"
                onClick={toggleMenu}
              >
                Refer & Earn
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-500 block"
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-700 hover:text-blue-500 block"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                className="hover:text-blue-500"
                onClick={toggleMenu}
              >
                <Link to="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="hover:bg-blue-600"
                onClick={toggleMenu}
              >
                <Link to="/try-for-free">Try for free</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}