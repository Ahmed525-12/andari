import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import FilesCompany from "@/components/FilesCompany";
import HeroHeader from "@/components/HeroHeader";
import KnowUsSection from "@/components/KnowUsSection";
import NavbarHeader from "@/components/NavbarHeader";
// import OurClients from "@/components/OurClients";
import OurServiceSection from "@/components/OurServiceSection";
import TeamSection from "@/components/TeamSection";
import WorkingMethodology from "@/components/WorkingMethodology";



export default function Home() {
  return (
    <main className="">
    <NavbarHeader />
    <HeroHeader />
    <AboutSection />
    <KnowUsSection />
    <OurServiceSection />
    <WorkingMethodology />
    <FilesCompany/>
    <ExperienceSection/>
    <TeamSection />
    {/* <OurClients/> */}
    </main>
  )
}
