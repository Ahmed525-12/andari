"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type PartnerCarouselProps = {
  className?: string;
};

const Images = ["/i1.png", "/i2.png", "/i3.png", "/i4.png", "/i5.png"];
const clientImages = [...Images, ...Images, ...Images];

function ClientsCarousel({ className }: PartnerCarouselProps) {
  return (
    <Carousel
      carouselOptions={{
        loop: true,
        dragFree: false,
        align: "start",
        direction: "ltr",
        autoplay: true,
      }}
      className={cn("w-[85%] md:w-[90%] mx-auto", className)}
    >
      <CarouselMainContainer className="items-center md:w-full">
        {clientImages.map((logo, index) => (
          <SliderMainItem
            key={index}
            className="flex min-w-0 shrink-0 grow-0 basis-1/2 items-center justify-center md:basis-1/3 lg:basis-1/5"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative h-full w-[150px]"
            >
              <Image
                src={logo}
                width={150}
                height={150}
                alt={"client logo " + index}
                className="h-auto w-full max-w-full"
              />
            </motion.div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
      <CarouselNext className="border-0" />
      <CarouselPrevious className="border-0" />
    </Carousel>
  );
}

export default ClientsCarousel;
