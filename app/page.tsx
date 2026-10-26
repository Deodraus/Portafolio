import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ExperienceEducation from "@/components/ExperienceEducation";
import SkillsSection from "@/components/SkillsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import HobbiesValue from "@/components/HobbiesValue";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-[#eef4f8] theme-real">
      {/* Top Minimalist Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 relative z-10">
        {/* Hero Section based on the attached design in Blue tones */}
        <Hero />

        {/* Section 1: About Me */}
        <AboutMe />

        {/* Section 2: Education & Experience */}
        <ExperienceEducation />

        {/* Section 3: Technical & Soft Skills */}
        <SkillsSection />

        {/* Section 4: Portfolio / Projects Showcase */}
        <ProjectsShowcase />

        {/* Section 5: Hobbies & Professional Value */}
        <HobbiesValue />

        {/* Section 6: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
