import React from "react";
import AboutSection from "@/components/AboutSection";
import AndariFooter from "@/components/AndariFooter";
import ExperienceSection from "@/components/ExperienceSection";
import HeroHeader from "@/components/HeroHeader";
import NavbarHeader from "@/components/NavbarHeader";
import OurClients from "@/components/OurClients";
import OurServiceSection from "@/components/OurServiceSection";
import WorkingMethodology from "@/components/WorkingMethodology";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="">
      {/* Navbar stays fixed or animates on load */}
      <NavbarHeader />

      {/* Hero Section Animation on Scroll */}
      {/* <AnimationTemplate className="" amount={0.3}  once={false}> */}
      <HeroHeader />
      {/* </AnimationTemplate> */}

      {/* About Section */}
      {/* <AnimationTemplate className="" amount={0.2}> */}
      <AboutSection />
      {/* </AnimationTemplate> */}

      {/* Services Section */}
      {/* <AnimationTemplate className="" amount={0.2}> */}
      <OurServiceSection />
      {/* </AnimationTemplate> */}

      {/* Methodology Section */}
      {/* <AnimationTemplate className="" amount={0.2}> */}
      <WorkingMethodology />
      {/* </AnimationTemplate> */}

      {/* Experience Section */}
      {/* <AnimationTemplate className="" amount={0.2}> */}
      <ExperienceSection />
      {/* </AnimationTemplate> */}

      {/* Clients Carousel */}
      {/* <AnimationTemplate className="" amount={0.2}> */}
      <OurClients />
      {/* </AnimationTemplate> */}

      {/* Footer */}
      {/* <AnimationTemplate className="" amount={0.2} once={false}> */}
      <AndariFooter />
      {/* </AnimationTemplate> */}
    </main>
  );
}
