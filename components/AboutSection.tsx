"use client";

import React from "react";
import { FaEye, FaChartLine, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const valueItems = [
  { icon: <FaEye size={32} className="text-[#1FD2AA]" />, label: "الشفافية" },
  {
    icon: <FaChartLine size={32} className="text-[#1FD2AA]" />,
    label: "التطوير",
  },
  {
    icon: <FaShieldAlt size={32} className="text-[#1FD2AA]" />,
    label: "الاعتمادية",
  },
  { icon: <FaTrophy size={32} className="text-[#1FD2AA]" />, label: "الإنجاز" },
];

const infoCards = [
  {
    title: " أنَدري",
    text: `وبأيدي مجموعة من الخبراء نفذوا أكثر من 50 مشروعا في مختلف القطاعات أسسنا شركة استشارية وانطلقنا لنساهم في تحقيق الرؤية من خلال سد الفجوة
بين الواقع الحالي والرؤى العظيمة بالتخطيط؛ فالخريطة التي تقود مسيرتك مهمة بقدر الوجهة المستهدفة`,
  },
  {
    title: "الرؤية",
    text: `نسعى لنصبح ضمن أفضل 10 شركات في مجال التخطيط االستراتيجي في المملكة العربية السعودية، من خالل تقديم خدمات نوعية في بناء االستراتيجيات
ورسم الخطط، مع التزامنا بقيم تأسسنا عليها وننطلق منها


التطوير | الشفافية | الاعتمادية | الإنجاز
`,
  },
];

export default function AboutSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <section className="pt-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0057B7] mb-3 scroll-mt-20"
              id="about"
            >
              عن الشركة
            </h2>
            <div className="mt-2 w-25 h-1 rounded-2xl bg-[#1FD2AA]"></div>
          </motion.div>
        </section>

        <div className="pt-3 pb-12 flex justify-center items-center">
          <section className="p-4 max-w-7xl w-full">
            <div className="md:py-4 flex justify-center">
              <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                  {/* Right: Info Cards */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 w-full max-w-md lg:max-w-none"
                  >
                    {infoCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-gray-100 rounded-2xl p-16"
                      >
                        <h4 className="text-xl font-bold text-blue-800 mb-3">
                          {card.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-md">
                          {card.text}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Left: Core Values */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-md lg:max-w-none bg-gray-100 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-blue-800 text-right mb-6">
                      القيم الأساسية
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2  mt-9">
                      {valueItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15, duration: 0.5 }}
                          className="flex aspect-video flex-col items-center justify-center bg-white rounded-lg"
                        >
                          {item.icon}
                          <span className="mt-2 font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-center mt-3 flex items-center justify-center text-blue-700 text-lg font-bold"
                    >
                      هكذا نحن وهكذا نرى أنفسنا
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
