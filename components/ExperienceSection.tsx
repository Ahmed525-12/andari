import Image from 'next/image'
import React from 'react'
import headerImage from '../public/d9e8e3e27cc240d131b15cdf24eb9a8e0f8878a1.png'
import { Building, Share2 } from 'lucide-react'
export default function ExperienceSection() {
   
        const statsData = [
          {
            id: 1,
            icon: Building,
            number: 3,
            text: "مشاريع مع جهات كبرى",
            iconColor: "text-emerald-400"
          },
          {
            id: 2,
            icon: Share2,
            number: 50,
            text: "مشروعاً لفريق الشركة في القطاع الحكومي والخاص",
            iconColor: "text-emerald-400"
          }
        ]
  return (
<div className="relative w-full  ">
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
      <div className="flex flex-col items-center pt-28" >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#699bd0] mb-3 scroll-mt-20 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]" id='experience' >
            الخبرة والإنجازات         
            </h2>
            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#e4f1ff] mb-3 scroll-mt-20 [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]" >
            نستثمر خبرتنا في تحويل التحديات إلى فرص!        
            </h3>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>

            <div className="py-12">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
    {statsData.map((stat) => {
      const IconComponent = stat.icon;
      return (
        <div
          key={stat.id}
          className="backdrop-blur-md bg-white/20 rounded-2xl p-8 text-center text-white shadow-xl border border-white/30 flex flex-col justify-center items-center min-h-[200px]"
        >
          <div className="mb-4">
            <IconComponent size={48} className={stat.iconColor} />
          </div>
          <div className="text-6xl font-bold mb-4">
            {stat.number}
          </div>
          <div className="text-lg font-medium leading-relaxed">
            {stat.text}
          </div>
        </div>
      );
    })}
  </div>
</div>

            </div>
      </div>
     
  )
}

