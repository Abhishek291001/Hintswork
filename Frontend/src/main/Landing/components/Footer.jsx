import React, { useState } from 'react';
// import logo from '../assets/hintsLogo.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa6';

const FooterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-auto">

      <div
        className="md:hidden flex justify-between items-center py-3 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>

      <ul
        className={`${isOpen ? 'block' : 'hidden'
          } md:block space-y-2 mt-2 md:mt-0 text-lg`}
      >
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col text-black">
      <div className="flex justify-center items-center w-full h-[120px] bg-white mb-5">
        <img src={logo} alt="HintsWork Logo" className="h-20" />
      </div>

      <div className="flex flex-col justify-around w-full bg-[#f5f2e1] px-6 py-8 ">
        {/* <div className="grid md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          <FooterSection
            title="Company"
            items={['Home', 'Contact', 'Press', 'Careers', 'Brand Assets']}
          />
          <FooterSection
            title="Product"
            items={[
              'How It Works',
              'Apps',
              'Awards',
              'Pricing',
              'Reviews',
              'Blog',
              'FAQ'
            ]}
          />
          <FooterSection
            title="Science"
            items={[
              'Executive Summary',
              'Studies',
              'Experts',
              'Methods',
              'Responsible Use'
            ]}
          />
          <FooterSection
            title="Legal & Admin"
            items={[
              'Terms of Service',
              'Privacy Policy',
              'Cookie Policy',
              // 'Accessibility Statement',
              // 'Security',
              // 'DPA',
              // 'GDPR/CCPA Notice',
              // 'Medical Disclaimer',
              // 'Admin Login'
            ]}
          />
        </div> */}
        <div>
          <ul className='flex align-middle justify-center gap-1 text-[16px] sm:text-[20px]'>
            <li>
              <Link to='/' >[terms of use] |</Link>
            </li>
            <li>
              <Link to='/' >[privacy policy] |</Link>
            </li>
            <li>
              <Link to='/' >[contact]</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-7 text-xl sm:text-2xl mt-10">
          <Link
            to="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaXTwitter />
          </Link>

          <Link
            to="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </Link>

          <Link
            to="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </Link>

          <Link
            to="https://pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaPinterest />
          </Link>

          <Link
            to="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            to="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </Link>
        </div>


        <div className="w-full border-t border-gray-400 my-6"></div>

        <div className="text-center text-base text-gray-700">
          © 2025 hints work
        </div>
      </div>
    </div>
  );
};

export default Footer;
