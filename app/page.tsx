"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ExperienceEducation from "@/components/ExperienceEducation";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsSection from "@/components/SkillsSection";
import HobbiesValue from "@/components/HobbiesValue";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingDecorations from "@/components/FloatingDecorations";

export default function Home() {
  const [currentPersona, setCurrentPersona] = useState<"dev" | "creator">("dev");
  const isDev = currentPersona === "dev";

  return (
    <div
      className={`relative min-h-screen flex flex-col bg-[#080b0e] text-[#eef4f8] transition-colors duration-500 ${
        isDev ? "theme-real" : "theme-creator"
      }`}
    >
      {/* Background Floating Geometric Shapes with active theme color */}
      <FloatingDecorations />

      {/* Sticky Navigation Bar */}
      <Navbar currentPersona={currentPersona} setPersona={setCurrentPersona} />

      {/* Main Content Layout */}
      <main className="flex-1 relative z-10">
        {/* Hero Section matching the reference layout */}
        <Hero currentPersona={currentPersona} setPersona={setCurrentPersona} />

        {/* Section 1: About Me */}
        <AboutMe />

        {/* Section 2: Education & Experience */}
        <ExperienceEducation />

        {/* Section 3: Projects Showcase */}
        <ProjectsShowcase />

        {/* Section 4: Technical & Soft Skills */}
        <SkillsSection />

        {/* Section 5: Hobbies & Value */}
        <HobbiesValue />

        {/* Section 6: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
