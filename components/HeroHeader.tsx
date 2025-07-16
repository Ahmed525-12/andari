import Image from 'next/image'
import React from 'react'
import headerImage from '../public/9fea089ebe4cae0337a936d1916074350640c188.jpg' // Adjust the path to your image

export default function HeroHeader() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={headerImage}
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Arabic Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  mb-4 leading-tight  [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            أندري  للاستشارات
          </h1>
          
          {/* English Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-6 text-blue-200 leading-tight  [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            Andari Consultancy
          </h2>
          
          {/* Arabic Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-stone-200 leading-relaxed  [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
            استشارات متخصصة وخبرات عميقة
          </p>
        </div>
      </div>
    </div>
  )
}