"use client";

import React from "react";
import Image from "next/image";
import { FileText, PenTool, Users } from "lucide-react";
import { motion } from "framer-motion";
import WorkingMethodologyImage from "../public/453edccb24dfe89dfd11a09fbdbc6b3f62bda2fd.jpg";

interface MethodologyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WorkingMethodology() {
  const methodologyItems: MethodologyItem[] = [
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "بناء الجسور",
      description:
        "نعمل الجد بالتأكيد على الربط بين الواقع والمستهدفات. إن تكتيل الشركة تقديم خطة عملية منية على الواقع فقط، بل نعمل على تنفيذ وتضمين الخطة التطبيقية",
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-500" />,
      title: "فلسفة التخطيط",
      description: "بالتخطيط نصل الواقع بالمعلومات",
    },
    {
      icon: <PenTool className="w-8 h-8 text-teal-500" />,
      title: "ترسم الخرائط",
      description:
        "نقدم الشركة خدماتها في رسم الاستراتيجيات وبناء العمليات الحالية بطريقة منهجية نقوم بتقيم الواقع الحالي والمساعدة في تطوير، بالإضافة إلى رسم الخطة المناسبة للوصول إلى المستهدفات",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image with optional fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-6 mt-6"
        >
          <Image
            src={WorkingMethodologyImage}
            alt="Hero Image"
            className="object-cover object-center w-full h-[500px] lg:h-[600px] rounded-3xl"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-6">
          <div className="space-y-12" dir="rtl">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4b8acd] mb-3 scroll-mt-20"
                id="services"
              >
                منهجية العمل
              </h2>
              <div className="mt-2 w-25 h-1 rounded-2xl bg-[#1FD2AA]"></div>
            </motion.div>

            {/* Methodology Items */}
            <div className="space-y-10">
              {methodologyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex items-start gap-6 group rounded-lg p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-stone-800">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
