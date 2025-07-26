"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

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

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const vh = window.innerHeight;
      const isMediumUp = window.innerWidth >= 768; // Tailwind's 'md' breakpoint
      const newHeight = isMediumUp ? vh : 0.45 * window.innerHeight;
      setHeaderHeight(newHeight);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > headerHeight);
    };

    // Initial calculation and scroll check
    calculateHeaderHeight();
    handleScroll();

    // Resize & scroll listeners
    window.addEventListener("resize", calculateHeaderHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`transition-colors duration-300 backdrop-blur-3xl rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          scrolled ? "bg-blue-700/75" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <a
              href="header"
              onClick={(e) => handleScroll(e, "header")}
              className="text-white text-2xl font-medium tracking-wide"
            >
              أندري
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                عن الشركة
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                الخدمات
              </a>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                الخبرة
              </a>
              {/* <a
                href="#team"
                onClick={(e) => handleScroll(e, "team")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                الفريق
              </a> */}
              <a
                href="#clients"
                onClick={(e) => handleScroll(e, "clients")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                عملائنا
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="text-white  px-3 py-2 text-l font-medium transition-colors duration-200 "
              >
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/966560656965"
              target="_blank"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <svg
                className="size-[20px]"
                viewBox="0 0 30.667 30.667"
                fill="currentColor"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <Menu /> : <X />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700/10 backdrop-blur-xl rounded-2xl ">
            <a
              href="#about"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              عن الشركة
            </a>
            <a
              href="#services"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </a>
            <a
              href="#experience"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الخبرة
            </a>
            {/* <a
              href="#team"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              الفريق
            </a> */}
            <a
              href="#clients"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              عملائنا
            </a>
            <a
              href="#contact"
              className=" text-white hover:text-blue-200 hover:bg-blue-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </a>

            <div className="pt-2">
              <a
                href="https://wa.me/966560656965"
                target="_blank"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg
                  className="size-[20px]"
                  viewBox="0 0 30.667 30.667"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
                    </g>{" "}
                  </g>
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
