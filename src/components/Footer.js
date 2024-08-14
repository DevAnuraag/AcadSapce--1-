import React from 'react';
import ask from '../assets/ask.png';
import logo from '../assets/AcadSpaceLogo.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import insta from '../assets/insta.png';
import linked from '../assets/linked.png';
import footer1 from '../assets/footer-1.png';
import { Link, useNavigate } from 'react-router-dom';
import send from '../assets/Send.png';

const Footer = () => {

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/book');
  };

  return (
    <>

      <footer className=" bg-gradient-to-b from-[#1D1050] to-[#1D1050] via-[#1D1050] select-none w-full">

        <div className='bg-gradient-to-r from-[#2D1E6B] via-[#A3A3A3]/20 to-[#2D1E6B] flex items-start justify-around mx-auto px-8 md:space-x-16 gap-y-8 py-8 border-t-[1px] border-b-[1px] border-white'>

          <div className='w-full '>
            <img src={logo} alt="logo" className="object-cover object-center w-48 h-20" />
            <div className='text-sm text-[#ACACAC] font-space-grotesk'>
              Get all your Career Questions Answered with AcadSpace AI, Answers tailored to your needs, curated by top 1% professional’s across the Country.
            </div>
          </div>


          <div className='flex-col px-12 mx-8 space-y-4 shrink-0 w-fit'>
            <div className='font-semibold text-white font-space-mono'>Useful Links</div>
            <div className='flex-col flex-wrap w-full space-y-2 text-sm md:flex gap-x-4 font-space-grotesk'>
              <div onClick={() => navigate('/book')} className='text-[#ACACAC] cursor-pointer'>Registration</div>
              <div onClick={() => navigate('/')} className='text-[#ACACAC] cursor-pointer'>Home Page</div>
              <div><Link to="/#testinomials" className='text-[#ACACAC] cursor-pointer'>What People Say</Link></div>
              <div onClick={() => navigate('/book')} className='text-[#ACACAC] cursor-pointer'>Get Answers</div>
              <div onClick={() => navigate('/discover')} className='text-[#ACACAC] cursor-pointer'>Discover More</div>
              <div onClick={() => navigate('/contactUs')} className='text-[#ACACAC] cursor-pointer'>Contact Us</div>
            </div>
          </div>

          <div className='flex-col w-full px-8 space-y-4'>
            <div className='font-semibold text-white font-space-mono'>Contact Us</div>
            <div className='flex-col space-y-2 text-sm font-space-grotesk'>
              <div className='text-[#ACACAC] cursor-pointer'>
                <a href="mailto:support@acadspace.org" className='text-[#ACACAC] cursor-pointer'>
                  Email: support@acadspace.org
                </a></div>
              <div className='text-[#ACACAC] cursor-pointer'>
                <a href="tel:+919967788463" className='text-[#ACACAC] cursor-pointer'>
                  Phone: +91 9967788463
                </a></div>
            </div>
            <div className='font-semibold text-white font-space-mono'>Social Media</div>
            <div className='flex space-x-2'>
              <a href="https://www.facebook.com/acadspaceai" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" className="w-8 h-8" />
              </a>
              {/* <a href="https://twitter.com/acadspaceai" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter" className="w-8 h-8" />
                </a> */}
              <a href="https://www.instagram.com/acadspaceai/" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/company/acadspace/" target="_blank" rel="noopener noreferrer">
                <img src={linked} alt="linkedin" className="w-8 h-8" />
              </a>
            </div>

          </div>

          <div className='flex-col w-full space-y-4'>
            <div className='font-semibold text-white font-space-mono'>Subscribe Us</div>
            <div className='flex-col space-y-2 font-space-grotesk'>
              <div className='text-[#ACACAC] cursor-pointer'>Subscribe to Our Newsletter and Stay Updated with latest News, Trends, Events.</div>
            </div>
            <div className='flex space-x-3'>
              <input className='border border-[#FFFFFF] h-12 text-white rounded-3xl px-4 bg-transparent w-full'
                placeholder='Enter email here...'></input>
              <div className='bg-[#E8F815] px-8 py-3 rounded-xl cursor-pointer flex justify-center items-center'>
                <div className='text-black font-goldman'>Send</div>
              </div>
            </div>
          </div>

        </div>

        <div className='p-5 text-xs font-semibold text-center text-[#F2F2F2] font-space-grotesk bg-gradient-to-b from-[#1D1050] to-[#1D1050] via-[#1D1050]'>
          CopyRight <img src={footer1} alt="footer" className="inline h-3" /> 2024 Acadspace.org All Rights Received
        </div>

      </footer>

    </>
  );
};

export default Footer;
