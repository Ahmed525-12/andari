import Image from "next/image";
import React from "react";
import headerImage from "../public/hero.jpg";

export default function HeroHeader() {
  return (
    <div
      className="relative w-full h-[45dvh] md:min-h-screen overflow-hidden"
      id="header"
    >
      {/* Background Image */}
      <Image
        src={headerImage}
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      {/* Transparent Black Overlay */}
      {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Arabic Title */}
          <h1 className="text-5xl  md:text-7xl leading-tight  ">
            أندري للاستشارات
          </h1>

          {/* English Title */}
          <h2 className="text-4xl  md:text-7xl mb-2 leading-tight  ">
            Andari Consultancy
          </h2>

          {/* Arabic Subtitle */}
          <p className="text-base md:text-3xl  font-light text-black leading-relaxed  ">
            استشارات متخصصة وخبرات عميقة
          </p>
        </div>
      </div>
    </div>
  );
}
