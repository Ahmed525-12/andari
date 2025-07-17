"use client";
import React from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const AndariFooter = () => {
      const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
      ) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        
      };
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-20">
          <h2 id='contact' className="text-3xl md:text-4xl font-light mb-6 leading-relaxed  text-[#4b8acd] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]" dir="rtl">
            لا تتردد بالتواصل، لكننا جزءًا من نجاح قصتك !
          </h2>
          <div className="w-20 h-0.5 bg-[#1FD2AA] mx-auto mb-8"></div>
          <a  href='https://wa.me/0568026357' target='_blank' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            تواصل معنا
          </a>
        </div>

        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-16">
          {/* Left Column - Company Info */}
          <div className="text-center space-y-4 sm:space-y-8">
            <div>
              <h3  className="text-sm sm:text-xl md:text-2xl  mb-2 sm:mb-3 font-bold text-gray-300" dir="rtl">
                أَنْدَرِي للاستشارات
              </h3>
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
                ANDARI
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-3 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={20} className="sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={20} className="sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={20} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="text-center">
            <nav className="space-y-2 sm:space-y-4">
              <a onClick={(e) => handleScroll(e, "about")} href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg" dir="rtl">
                عن الشركة
              </a>
              <a onClick={(e) => handleScroll(e, "services")}    href="#services" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg" dir="rtl">
                الخدمات
              </a>
              <a onClick={(e) => handleScroll(e, "experience")} href="#experience" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg" dir="rtl">
                الخبرة
              </a>
              <a onClick={(e) => handleScroll(e, "team")} href="#team" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg" dir="rtl">
                الفريق
              </a>
            </nav>
          </div>

          {/* Right Column - Contact Information */}
          <div className="text-center">
            <h4 className="text-sm sm:text-xl font-medium mb-3 sm:mb-6 text-white" dir="rtl">
              معلومات التواصل
            </h4>
            <div className="space-y-3 sm:space-y-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 rtl:space-x-reverse gap-2">
                <span className="text-gray-300 text-sm sm:text-lg">0560656965</span>
                <Phone size={18} className="sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 rtl:space-x-reverse gap-2">
                <span className="text-gray-300 text-sm sm:text-lg ">Bd@andari.sa</span>
                <Mail size={18} className="sm:w-6 sm:h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-base" dir="rtl">
            © 2025 جميع الحقوق محفوظة - أندري للاستشارات
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AndariFooter;