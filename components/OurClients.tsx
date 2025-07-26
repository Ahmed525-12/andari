"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import headerImage from "../public/a41839340065d7f75548c62b4468d77f00a8d0a0.png";
import ClientsCarousel from "./ClientsCarousel";

export default function OurClients() {
  return (
    <>
      {/* Top Banner with Heading */}
      <div className="relative w-full overflow-hidden flex flex-col h-[200px] md:h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center w-full justify-center py-6"
        >
          <h2
            id="clients"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b8acd] mb-3 scroll-mt-40"
          >
            عملاء سعدنا بخدمتهم
          </h2>
          <div className="mt-2 w-24 h-1 rounded-2xl bg-[#1FD2AA]" />
        </motion.div>

        <Image
          src={headerImage}
          alt="Hero"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full overflow-hidden flex flex-col py-10"
      >
        <ClientsCarousel />
      </motion.div>
    </>
  );
}
