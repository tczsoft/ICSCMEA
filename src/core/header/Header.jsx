import { Fade as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }
    const navItem = navLinks.find(link => link.to === path);
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Us",
      dropdown: [
        {
          to: "/about",
          label: "About the Conference ",
        },
        {
          to: "/scope",
          label: "Scope of the Conference",
        },
        {
          to: "/editorial",
          label: "Editorial Board",
        },
      ],
    },
    {
      to: " ",
      label: "Author Desk",
      dropdown: [
        {
          to: "/conference-tracks",
          label: "Conference tracks",
        },
        {
          to: "/dates",
          label: "Key Dates",
        },
        {
          to: "/paper-submission",
          label: "New Paper Submission",
        },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;
  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  const isHomePage = location.pathname === '/';
  return (
    <>
      <section className="bg-primary">
        <div className="max-w-[80rem] mx-auto md:px-5 px-3 md:py-0 py-4 bg-gradient-to-r from-[#0D6743] to-[#033D2D]  ">
          <div className="flex items-center justify-between lg:gap-0  gap-5  ">
            <Link to='/'>
              <div className="md:hidden block   ">
                <div className=" font-bold md:hidden block text-white text-2xl">ICSCMEA</div>
              </div>
            </Link>
            <div className={`md:hidden block cursor-pointer ${menuOpen ? "z-50" : ""}`} onClick={() => setMenuOpen(!menuOpen)}   >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}    >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}   >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className={` fixed -top-1 right-0 h-full w-64 z-40 md:bg-transparent bg-[#033D2D] ${scrolled || !isHomePage ? "bg-gradient-to-r from-[#0D6743] to-[#033D2D]" : " "}  ${menuOpen ? "translate-x-0 duration-300" : "translate-x-full duration-300"} md:block md:relative md:w-auto md:translate-x-0`} >
        <header className="max-w-[90rem] mx-auto md:px-5 px-2 h-full py-1 ">
          <div className="flex md:justify-between justify-center items-center ">
            <Link to='/'>
              <div className=" font-bold md:block hidden text-white text-2xl">ICSCMEA</div>
            </Link>
            <nav ref={dropdownRef}>
              <div className={`space-x-1 md:block max-w-[65rem] mx-auto  md:pt-0  pt-20  ${menuOpen ? "flex flex-col space-y-4" : ""}`}>
                {navLinks.map((link) => (
                  <div key={link.to} className=" inline-block group relative"
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}>
                    <Link to={link.to} className={`py-4 flex lg:w-[144px] md:w-[130px] transition-all duration-300 ease-in-out lg:text-base md:text-sm justify-center items-center gap-2 text-white ${isActive(link.to) || hoveredCategory === link.label ? 'md:border-t-0 border-t-[#14AE5C] duration-300 text-[#1B1F3B]' : ''} `}
                      onClick={(e) => { if (link.dropdown) { e.preventDefault(); setHoveredCategory((prev) => (prev === link.label ? null : link.label)); } else { setMenuOpen(false); } }}   >
                      {link.label}
                      {link.dropdown && (<i className={`fi fi-rr-angle-small-down flex items-center  transition-all duration-300 ease-in-out  rounded-full text-white ${isActive(link.to) || hoveredCategory === link.label ? 'bg-[#14AE5C] text-white rotate-180 duration-100' : ' '} `}></i>)}
                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <div className="md:absolute left-0 top-full md:w-[260px] rounded-lg md:bg-[#56AE58] bg-white  transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid md:grid-cols-1 md:p-3 z-10">
                        {link.dropdown.map((dropdownlink) => (
                          <Link key={dropdownlink.to} to={dropdownlink.to} className="block md:px-4 px-4 py-2 md:text-white md:text-start text-center  text-[#1B1F3B]" onClick={() => { setHoveredCategory(null); setMenuOpen(false); }} >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
