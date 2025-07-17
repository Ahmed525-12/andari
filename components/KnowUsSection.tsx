import React from 'react'
import Image from 'next/image'
import headerImage from '../public/9d9bf1528f4ca693c0e27a7a9a7175bebbe2b3f9.jpg' 
// import video1 from '../public/video1.mp4' 
import CardCarousel, { VideoCard } from '@/components/CardCarousel';


const videoCards: VideoCard[] = [
    {
      id: 1,
      title: "Intro Video",
      videoUrl: "/video1.mp4", // local file in public/videos/
      description: "A local intro video"
    },
    {
      id: 2,
      title: "Intro Video",
      videoUrl: "/video1.mp4",
      description: "A local intro video"
    },
    {
        id: 3,
        title: "Intro Video",
        videoUrl: "/video1.mp4",
        description: "A local intro video"
      },
      {
        id:4,
        title: "Intro Video",
        videoUrl: "/video1.mp4",
        description: "A local intro video"
      },
  ];
export default function KnowUsSection() {
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
    <section className=" relative z-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center  " >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b8acd] mb-3 scroll-mt-20  [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]" >
           تعرف علي أندري أكثر 
            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>
           
            <div className="min-h-screen">
    
      <CardCarousel cards={videoCards} />
    </div>
          
        </section>

    </div>
  )
}
