import Navbar from "@/components/common/Navbar";
import EducationSection from "@/components/educationsection/EducationSection";
import Experience from "@/components/experience/Experience";
import HeroSection from "@/components/herosection/HeroSection";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <Skills />
      <Experience />
    </>
  );
}
