"use client";

import React from "react";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

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

  const date = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white md:pt-12 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            id="contact"
            className="text-xl md:text-4xl font-light mb-6 leading-relaxed text-white"
            dir="rtl"
          >
            لا تتردد بالتواصل، لكننا جزءًا من نجاح قصتك !
          </h2>
          <div className="w-2/4 h-0.5 bg-white rounded-2xl mx-auto mb-8"></div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8 md:gap-8 mb-16">
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center space-y-4 sm:space-y-8"
          >
            <div>
              <h3
                className="text-sm sm:text-xl md:text-2xl mb-2 sm:mb-3 font-bold text-gray-300"
                dir="rtl"
              >
                أَنْدَرِي للاستشارات
              </h3>
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
                ANDARI
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
              >
                <Facebook size={20} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
              >
                <Twitter size={20} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2 my-4 sm:space-y-4 flex max-w-full justify-between items-start flex-wrap gap-4 md:flex-row"
          >
            <a
              onClick={(e) => handleScroll(e, "about")}
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg"
              dir="rtl"
            >
              عن الشركة
            </a>
            <a
              onClick={(e) => handleScroll(e, "services")}
              href="#services"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg"
              dir="rtl"
            >
              الخدمات
            </a>
            <a
              onClick={(e) => handleScroll(e, "experience")}
              href="#experience"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg"
              dir="rtl"
            >
              الخبرة
            </a>
            <a
              onClick={(e) => handleScroll(e, "team")}
              href="#team"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-lg"
              dir="rtl"
            >
              الفريق
            </a>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center w-full"
          >
            <h4
              className="text-sm sm:text-xl font-medium mb-3 sm:mb-6 text-white"
              dir="rtl"
            >
              معلومات التواصل
            </h4>
            <div className="space-y-4 sm:space-y-6 text-center">
              <a
                href="tel:+966560656965"
                className="flex items-center justify-center gap-2 sm:gap-4 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone size={18} className="sm:w-6 ml-3 sm:h-6 text-white" />
                <span className="text-sm sm:text-lg">0560656965</span>
              </a>
              <a
                href="mailto:Bd@andari.sa"
                className="flex items-center justify-center gap-2 sm:gap-4 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} className="sm:w-6 sm:h-6 text-white" />
                <span className="text-sm sm:text-lg">Bd@andari.sa</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400 text-base" dir="rtl">
            © {date} جميع الحقوق محفوظة - أندري للاستشارات
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default AndariFooter;
