"use client";import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="bg-blue-600/40 backdrop-blur-3xl rounded-2xl border border-blue-500/20 shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <a href="header" onClick={(e) => handleScroll(e, "header")}  className="text-white text-xl font-bold tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
              ANDARİ
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
            <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                عن الشركة
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                الخدمات
              </a>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                الخبرة
              </a>
              {/* <a
                href="#team"
                onClick={(e) => handleScroll(e, "team")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                الفريق
              </a> */}
             <a
                href="#clients"
                onClick={(e) => handleScroll(e, "clients")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                عملائنا
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="text-white hover:text-blue-200 px-3 py-2 text-l font-medium transition-colors duration-200 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
              >
                تواصل معنا
              </a>
          
          
         
             
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a href='https://wa.me/0560656965' target='_blank' className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-lg mx-4 sm:mx-6 lg:mx-8">
            <a
              href="#about"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              عن الشركة
            </a>
          <a
              href="#services"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </a>
            <a
              href="#experience"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الخبرة
            </a>
            {/* <a
              href="#team"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الفريق
            </a> */}
            <a
              href="#clients"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              عملائنا
            </a>
            <a
              href="#contact"
              className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </a>
        
          
          
          
            <div className="pt-2">
              <a  href='https://wa.me/0560656965' target='_blank' className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>تواصل معنا</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;