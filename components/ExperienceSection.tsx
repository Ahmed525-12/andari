"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import headerImage from "../public/experience.png";
import { Building, Share2 } from "lucide-react";
import CountUp from "react-countup";

export default function ExperienceSection() {
  const statsData = [
    {
      id: 1,
      icon: Building,
      number: 3,
      text: "مشاريع مع جهات كبرى",
      iconColor: "text-emerald-400",
    },
    {
      id: 2,
      icon: Share2,
      number: 50,
      text: "مشروعاً لفريق الشركة في القطاع الحكومي والخاص",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src={headerImage}
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center pt-28"
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#699bd0] mb-3 scroll-mt-20"
            id="experience"
          >
            الخبرة والإنجازات
          </h2>
          <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#e4f1ff] mb-3 scroll-mt-20">
            نستثمر خبرتنا في تحويل التحديات إلى فرص!
          </h3>
          <div className="mt-2 w-25 h-1 rounded-2xl bg-[#1FD2AA]"></div>
        </motion.div>

        {/* Stats Cards */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="backdrop-blur-md bg-white/20 rounded-2xl p-8 text-center text-white shadow-xl border border-white/30 flex flex-col justify-center items-center min-h-[200px]"
                >
                  <div className="mb-4">
                    <IconComponent size={48} className={stat.iconColor} />
                  </div>
                  <div className="text-6xl font-bold mb-4">
                    <CountUp start={0} end={stat.number} />
                  </div>
                  <div className="text-lg font-medium leading-relaxed">
                    {stat.text}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
