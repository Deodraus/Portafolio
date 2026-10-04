"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, Sparkles, Terminal } from "lucide-react";

interface NavbarProps {
  currentPersona: "dev" | "creator";
  setPersona: (persona: "dev" | "creator") => void;
}

export default function Navbar({ currentPersona, setPersona }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const isDev = currentPersona === "dev";

  const navLinks = [
    { name: "Inicio", id: "inicio", href: "#inicio" },
    { name: "Sobre Mí", id: "sobre-mi", href: "#sobre-mi" },
    { name: "Proyectos", id: "proyectos", href: "#proyectos" },
    { name: "Habilidades", id: "habilidades", href: "#habilidades" },
    { name: "Hobbies", id: "hobbies", href: "#hobbies" },
    { name: "Contacto", id: "contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080b0e]/90 backdrop-blur-md transition-colors duration-500 border-b border-neon-subtle">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 h-20">
        
        {/* Brand Logo with Neon Glow */}
        <a href="#inicio" className="group flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-neon-glow transition-all duration-300 group-hover:scale-105">
            Portfolio
          </span>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            / {isDev ? "Modo Real (Jerónimo)" : "Modo Creador (Deodraus)"}
          </span>
        </a>

        {/* Desktop Navigation Links matching the reference screenshot */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-neon-accent"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full transition-colors duration-500"
                    style={{ backgroundColor: "var(--neon-accent)", boxShadow: "0 0 10px var(--neon-accent)" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mode switcher: Modo Real (Azul) vs Modo Creador (Rosa) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center rounded-full p-1 bg-[#0c1015] border border-neon-subtle shadow-md">
            <button
              onClick={() => setPersona("dev")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                isDev
                  ? "bg-[#00d2ff] text-slate-950 shadow-[0_0_15px_rgba(0,210,255,0.6)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Modo Real (Azul)</span>
            </button>
            <button
              onClick={() => setPersona("creator")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                !isDev
                  ? "bg-[#ff2a85] text-white shadow-[0_0_15px_rgba(255,42,133,0.6)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Modo Creador (Rosa)</span>
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setPersona(isDev ? "creator" : "dev")}
            className="px-2.5 py-1 rounded-full border border-neon-subtle text-xs text-neon-accent font-bold"
          >
            {isDev ? "💙 Real" : "💖 Creador"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-300 hover:text-neon-accent"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-neon-accent" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-neon-subtle bg-[#080b0e]/95 px-6 pt-2 pb-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-base font-medium ${
                  activeSection === link.id
                    ? "text-neon-accent font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-neon-subtle flex justify-between items-center">
              <span className="text-xs text-slate-400">Cambiar tema:</span>
              <button
                onClick={() => setPersona(isDev ? "creator" : "dev")}
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: isDev ? "#00d2ff" : "#ff2a85",
                  color: isDev ? "#080b0e" : "#ffffff"
                }}
              >
                {isDev ? "Cambiar a Modo Rosa (Deodraus)" : "Cambiar a Modo Azul (Jerónimo)"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
