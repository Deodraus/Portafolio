"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import {
  TikTokIcon,
  TwitchIcon,
  KickIcon,
  XIcon,
  InstagramIcon,
  GitHubIcon,
  WhatsAppIcon
} from "@/components/SocialIcons";

interface HeroProps {
  currentPersona: "dev" | "creator";
  setPersona: (persona: "dev" | "creator") => void;
}

export default function Hero({ currentPersona, setPersona }: HeroProps) {
  const isDev = currentPersona === "dev";
  const { personal } = portfolioData;

  const currentName = isDev ? personal.firstName : personal.artisticName;
  const currentAvatar = isDev ? personal.avatarReal : personal.avatarArtistic;
  const currentSocials = isDev ? personal.socials.dev : personal.socials.creator;

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "twitch":
        return <TwitchIcon className="h-5 w-5" />;
      case "kick":
        return <KickIcon className="h-5 w-5" />;
      case "tiktok":
        return <TikTokIcon className="h-5 w-5" />;
      case "instagram":
        return <InstagramIcon className="h-5 w-5" />;
      case "x":
        return <XIcon className="h-4 w-4" />;
      case "github":
        return <GitHubIcon className="h-5 w-5" />;
      case "whatsapp":
        return <WhatsAppIcon className="h-5 w-5" />;
      default:
        return <WhatsAppIcon className="h-5 w-5" />;
    }
  };

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 w-full z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Greeting, Bio, Socials, CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
            
            {/* Top Demo Pills inspired by demostracion.png */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="badge-pill-demo active">
                <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: "var(--neon-accent)" }} />
                <span>Disponible para Proyectos</span>
              </span>
              <span className="badge-pill-demo">
                <span>{isDev ? "Software Developer" : "Content Creator"}</span>
              </span>
              <span className="badge-pill-demo hidden sm:inline-flex">
                <span>Medellín, Colombia</span>
              </span>
            </div>

            {/* Main Greeting with dynamic neon glow */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hola, soy{" "}
              <span className="text-neon-glow inline-block">
                {currentName}
              </span>
            </h1>

            {/* Subtitle / Role in active theme color */}
            <div className="mt-3 text-lg sm:text-2xl font-bold text-neon-accent flex items-center justify-center lg:justify-start gap-2">
              <span>{isDev ? personal.roles.dev : personal.roles.creator}</span>
              
              <button
                onClick={() => setPersona(isDev ? "creator" : "dev")}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-neon-subtle bg-neon-subtle text-slate-200 hover:text-white transition-all shadow-sm"
                title="Alternar entre Modo Real (Azul) y Modo Creador (Rosa)"
              >
                {isDev ? (
                  <>
                    <Sparkles className="h-3 w-3 text-[#ff2a85]" />
                    <span>Ver en Rosa (Deodraus)</span>
                  </>
                ) : (
                  <>
                    <Terminal className="h-3 w-3 text-[#00d2ff]" />
                    <span>Ver en Azul (Jerónimo)</span>
                  </>
                )}
              </button>
            </div>

            {/* Bio text */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {isDev ? personal.summaryDev : personal.summaryCreator}
            </p>

            {/* Dynamic Social Icons Row matching DATOS.md and reference design */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {currentSocials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-neon-subtle bg-[#080b0e] text-neon-accent hover:bg-neon-subtle hover:scale-105 transition-all duration-300 shadow-sm"
                  aria-label={soc.platform}
                  title={soc.platform}
                >
                  {renderSocialIcon(soc.icon)}
                </a>
              ))}
            </div>

            {/* Glowing Pill Button matching reference screenshot */}
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <a
                href="#contacto"
                className="btn-neon-pill inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold shadow-lg"
              >
                <span>Contáctame</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Glowing Circular Avatar (Matches real photo in Blue, anime avatar in Pink) */}
          <div className="flex flex-col items-center justify-center lg:col-span-5">
            <div className="relative group">
              
              {/* External ambient glow aura reacting to theme */}
              <div
                className="absolute -inset-1.5 rounded-full opacity-70 blur-2xl transition-all duration-700 animate-pulse"
                style={{
                  backgroundColor: "var(--neon-accent)"
                }}
              />

              {/* Circular Avatar Container with dynamic neon halo */}
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full border-4 bg-[#080b0e] p-2 avatar-neon-halo overflow-hidden shadow-2xl transition-all duration-500">
                <div className="relative h-full w-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src={currentAvatar}
                    alt={currentName}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Helper toggle badge underneath avatar */}
            <button
              onClick={() => setPersona(isDev ? "creator" : "dev")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-[#080b0e]/90 px-4 py-1.5 text-xs font-bold text-slate-200 hover:text-neon-accent transition-all shadow-md"
            >
              {isDev ? (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-[#ff2a85]" />
                  <span>Cambiar a Avatar Artístico & Paleta Rosa</span>
                </>
              ) : (
                <>
                  <Terminal className="h-3.5 w-3.5 text-[#00d2ff]" />
                  <span>Cambiar a Foto Real & Paleta Azul</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
