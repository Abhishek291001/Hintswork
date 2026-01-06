import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Sticky scroll effect
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header w-full px-5 md:px-10 lg:px-12 xl:px-16 z-50 
      transition-all duration-300 top-0 left-0

      ${isSticky 
        ? "fixed bg-white shadow-md py-0" 
        : "absolute py-0"
      }

      /* MOBILE STARTING BACKGROUND ALWAYS WHITE */
      ${!isSticky ? "bg-white lg:bg-transparent" : ""}

      `}
    >
      <nav className="flex justify-between w-full p-2 items-center py-4 relative z-40 ">
        <div className="flex items-center space-x-10">
          <img
            src={logo}
            alt="logo"
            className="h-12 md:h-20 w-auto object-contain"
          />
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium z-10">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setActiveLink("Home")}
            onSetActive={() => setActiveLink("Home")}
            className={`${activeLink === "Home" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Home
          </Link>
          <li>

            <Link
            to="HIW"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("HIW")}
            onSetActive={() => setActiveLink("HIW")}
            className={`${activeLink === "HIW" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            How It Works
          </Link>

          </li>
          <li>
            <Link
            to="Apps"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Apps")}
            onSetActive={() => setActiveLink("Apps")}
            className={`${activeLink === "Apps" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Apps
          </Link>
           
          </li>
          <li>
            <Link
            to="Science"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Science")}
            onSetActive={() => setActiveLink("Science")}
            className={`${activeLink === "Science" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Science
          </Link>
           
          </li>
          <li>
            <Link
            to="Awards"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Awards")}
            onSetActive={() => setActiveLink("Awards")}
            className={`${activeLink === "Awards" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Awards
          </Link>
           
          </li>
          <li>
            <Link
            to="Blog"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Blog")}
            onSetActive={() => setActiveLink("Blog")}
            className={`${activeLink === "Blog" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Blog
          </Link>
            
          </li>
          <li>
            <Link
            to="contactUs"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("contactUs")}
            onSetActive={() => setActiveLink("contactUs")}
            className={`${activeLink === "contactUs" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Contact
          </Link>
           
          </li>
        </ul>

        <button
          className="lg:hidden p-2 rounded focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={38} className="ml-10" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden xl:hidden bg-white px-6 pb-4 shadow-md z-40 w-full relative">
          <ul className="flex flex-col gap-4 text-lg font-medium ">


           <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setActiveLink("Home")}
            onSetActive={() => setActiveLink("Home")}
            className={`${activeLink === "Home" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Home
          </Link>
          <li>

            <Link
            to="HIW"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("HIW")}
            onSetActive={() => setActiveLink("HIW")}
            className={`${activeLink === "HIW" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            How It Works
          </Link>

          </li>
          <li>
            <Link
            to="Apps"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Apps")}
            onSetActive={() => setActiveLink("Apps")}
            className={`${activeLink === "Apps" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Apps
          </Link>
           
          </li>
          <li>
            <Link
            to="Science"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Science")}
            onSetActive={() => setActiveLink("Science")}
            className={`${activeLink === "Science" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Science
          </Link>
           
          </li>
          <li>
            <Link
            to="Awards"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Awards")}
            onSetActive={() => setActiveLink("Awards")}
            className={`${activeLink === "Awards" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Awards
          </Link>
           
          </li>
          <li>
            <Link
            to="Blog"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("Blog")}
            onSetActive={() => setActiveLink("Blog")}
            className={`${activeLink === "Blog" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Blog
          </Link>
            
          </li>
          <li>
            <Link
            to="contactUs"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setActiveLink("contactUs")}
            onSetActive={() => setActiveLink("contactUs")}
            className={`${activeLink === "contactUs" ? "text-red-500" : ""} cursor-pointer hover:text-red-500`}
          >
            Contact
          </Link>
           
          </li>





            {/* <li><a href="#" className="text-red-500">Home</a></li>

            <li>
              <Link to="HIW" smooth duration={800} className="hover:text-red-600 cursor-pointer">
                How It Works
              </Link>
            </li>
            <li><Link to="Apps" className="hover:text-red-600 cursor-pointer">Apps</Link></li>
            <li>
              <Link to="Science" smooth duration={800} className="hover:text-red-600 cursor-pointer">
                Science
              </Link>
            </li>
            <li><Link to="Awards" className="hover:text-red-600 cursor-pointer">Awards</Link></li>
            <li><Link to="Blog" className="hover:text-red-600 cursor-pointer">Blog</Link></li>
            <li>
              <Link to="contactUs" smooth duration={800} className="hover:text-red-600 cursor-pointer">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
