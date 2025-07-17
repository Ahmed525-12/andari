"use client"; 
import Image from 'next/image'
import dynamic from "next/dynamic";

import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import headerImage from '../public/a41839340065d7f75548c62b4468d77f00a8d0a0.png'
const Swiper = dynamic(
    () => import("swiper/react").then((mod) => mod.Swiper),
    { ssr: false }
  );
  const SwiperSlide = dynamic(
    () => import("swiper/react").then((mod) => mod.SwiperSlide),
    { ssr: false }
  );
  
  import { Pagination, Autoplay } from 'swiper/modules';
  
  type Logo = { src: string; alt: string };
  const logos: Logo[] = [
    { src: "/a41839340065d7f75548c62b4468d77f00a8d0a0.png", alt: "Client A" },
    { src: "/a41839340065d7f75548c62b4468d77f00a8d0a0.png", alt: "Client B" },
    { src: "/a41839340065d7f75548c62b4468d77f00a8d0a0.png", alt: "Client C" },
    { src: "/a41839340065d7f75548c62b4468d77f00a8d0a0.png", alt: "Client D" },
    { src: "/a41839340065d7f75548c62b4468d77f00a8d0a0.png", alt: "Client E" },
  ];
  

export default function OurClients() {
  return (
   <div className="relative w-full ">
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
         <div className="relative z-20   h-full px-4 sm:px-6 lg:px-8">
<div className="py-16">
<Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={4}           // ← show 4 slides at once
      spaceBetween={24}           // gap between slides
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0:   { slidesPerView: 1 }, // 0px+
        640: { slidesPerView: 2 }, // 640px+
        1024:{ slidesPerView: 4 }  // 1024px+
      }}
      className="!py-8"
    >
      {logos.map((logo, idx) => (
        <SwiperSlide key={idx} className="flex justify-center">
          <div className="w-48 h-28 sm:w-56 sm:h-32">
            <Image
              src={logo.src}
              fill
              alt={logo.alt}
              className="object-contain w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</div>

            </div>
            </div>
  )
}