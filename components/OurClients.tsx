"use client";
import Image from "next/image";
import React from "react";
import headerImage from "../public/a41839340065d7f75548c62b4468d77f00a8d0a0.png";

const clientImages = [
  "/i1.png",
  "/i2.png",
  "/i3.png",
  "/i4.png",
  "/i5.png"
];

export default function OurClients() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col py-60">
      <Image
        src={headerImage}
        alt="Hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center py-6">
        <h2
          id="clients"
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b8acd] mb-3 scroll-mt-40 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]" 
        >
          عملاء سعدنا بخدمتهم
        </h2>
        <div className="mt-2 w-24 h-1 bg-[#1FD2AA]" />
      </div>

      <div className="relative z-20 flex items-center justify-center flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {clientImages.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
              >
                <div className="relative w-full h-full bg-white rounded-lg shadow-lg p-2">
                  <Image
                    src={src}
                    alt={`Client ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}