import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 mt-16">
      <div className="mx-auto px-4 md:w-2/3">
        <div className="md:flex justify-between items-center">
          <img src={footerLogo} alt="Footer Logo" className="h-24 w-24" />

          <div>
            <button className="bg-blue-500 border text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
              Schedule 1-on-1 Call Now
            </button>
            <br />
            <p className="text-xs text-center">
              Speak with our Learning Advisor
            </p>
          </div>
        </div>
        <hr/>

        <div className="flex flex-col justify-between md:flex-row  mt-8 gap-8">
          {/* Programs Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="mb-4">Programs</h3>
            <ul className="font-bold space-y-2">
              <li className="flex justify-between">Data Science & AI <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Product Management <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Business Analytics <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Digital Transformation <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Business Management <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Project Management <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Strategy & Leadership <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Senior Management <span className="cursor-pointer font-light">+</span></li>
              <li className="flex justify-between">Fintech <span className="cursor-pointer font-light">+</span></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-2 text-xs">
              <li>
                Email us (For Data Science Queries): admissions@accredian.com
              </li>
              <li>
                Email us (For Product Management Queries): pm@accredian.com
              </li>
              <li>
                Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
              </li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>
          

          {/* Why Accredian Section */}
          <div className="mb-6 md:mb-0 md:w-full my-6">
            <h3 className="font-light mb-4">Why Accredian</h3>


            <div>
          <h3 className="font-extralight mb-4">Follow Us</h3>
          <div className="flex space-x-4 cursor-pointer">
            <a href="#!" className=" hover:text-white">
              <FacebookIcon/>
            </a>
            <a href="#!" className=" hover:text-white">
              <LinkedInIcon/>
            </a>
            <a href="#!" className=" hover:text-white">
              <TwitterIcon/>
            </a>
            <a href="#!" className=" hover:text-white">
              <InstagramIcon/>
            </a>
            <a href="#!" className=" hover:text-white">
              <YouTubeIcon/>
            </a>
          </div>
        </div>
          </div>
          </div>
        


        <div className="mb-6 md:mb-0 ">
        <h3 className="mb-4">Accredian</h3>
        <ul className="text-xs">
            <li>
              <a href="#!" className=" hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Career
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Admission Policy
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Referral Policy
              </a>
            </li>

            <li>
              <a href="#!" className=" hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#!" className=" hover:text-white">
                Master FAQs
              </a>
            </li>
        </ul>
        </div>
        </div>

        

        {/* Footer Copyright */}
        <div className="text-center my-16 text-sm">
          <p>
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
