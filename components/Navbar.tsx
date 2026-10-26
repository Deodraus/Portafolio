"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navLinks = [
    { name: "Inicio", id: "inicio", href: "#inicio" },
    { name: "Sobre Mí", id: "sobre-mi", href: "#sobre-mi" },
    { name: "Educación", id: "educacion", href: "#educacion" },
    { name: "Habilidades", id: "habilidades", href: "#habilidades" },
    { name: "Portafolio", id: "portafolio", href: "#portafolio" },
    { name: "Hobbies", id: "hobbies", href: "#hobbies" },
    { name: "Contacto", id: "contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12 h-24">
        {/* Emblem Monogram Logo (JDA) inspired by the RSR emblem in the reference design */}
        <a
          href="#inicio"
          onClick={() => setActiveSection("inicio")}
          className="group relative flex items-center justify-center focus:outline-none"
          aria-label="Jerónimo Deossa Abad - Inicio"
        >
          <svg
            viewBox="0 0 120 90"
            className="h-16 w-20 sm:h-[72px] sm:w-24 transition-transform duration-300 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="jdaTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="45%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="jdaStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="jdaGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Blue Emblem Aura */}
            <circle cx="60" cy="45" r="40" fill="url(#jdaGlow)" />

            {/* Geometric Starburst / Cross Lines matching the reference logo */}
            <line x1="20" y1="12" x2="100" y2="78" stroke="url(#jdaStrokeGrad)" strokeWidth="1.4" strokeOpacity="0.7" />
            <line x1="100" y1="12" x2="20" y2="78" stroke="url(#jdaStrokeGrad)" strokeWidth="1.4" strokeOpacity="0.7" />
            <line x1="60" y1="5" x2="60" y2="85" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="12" y1="45" x2="108" y2="45" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />

            {/* Outer Broken Cyber Ring */}
            <circle
              cx="60"
              cy="45"
              r="28"
              stroke="url(#jdaStrokeGrad)"
              strokeWidth="1.8"
              strokeDasharray="36 10 20 10"
            />
            <polygon
              points="60,13 90,30 90,60 60,77 30,60 30,30"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeOpacity="0.45"
              fill="rgba(3, 7, 18, 0.55)"
            />

            {/* 3D Extruded Shadow Layer */}
            <text
              x="62"
              y="55"
              textAnchor="middle"
              fill="#0f172a"
              stroke="#1e3a8a"
              strokeWidth="3"
              fontFamily="system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              letterSpacing="1"
            >
              JDA
            </text>

            {/* Main Metallic Blue/Cyan Monogram Letters */}
            <text
              x="60"
              y="53"
              textAnchor="middle"
              fill="url(#jdaTextGrad)"
              stroke="#e0f2fe"
              strokeWidth="0.6"
              fontFamily="system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              letterSpacing="1"
            >
              JDA
            </text>
          </svg>
        </a>

        {/* Desktop Navigation Links matching the reference screenshot */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#3b82f6] font-semibold"
                    : "text-white hover:text-[#38bdf8]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-white hover:text-[#38bdf8] transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#3b82f6]" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#3b82f6]/20 bg-black/95 px-6 pt-2 pb-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-base transition-colors ${
                  activeSection === link.id
                    ? "text-[#3b82f6] font-bold"
                    : "text-white hover:text-[#38bdf8]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
