"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import CodePortrait from "@/components/CodePortrait";
import { Volume2, VolumeX } from "lucide-react";
import {
  InstagramIcon,
  GitHubIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/SocialIcons";

export default function Hero() {
  const { personal } = portfolioData;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [displayedRole, setDisplayedRole] = useState(personal.role);

  // Subtle typewriter effect for the role title
  useEffect(() => {
    const roles = [
      "Desarrollador de Software",
      "Frontend & Backend Developer",
      "Desarrollador Full Stack",
    ];
    let roleIdx = 0;
    let charIdx = roles[0].length;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentFullRole = roles[roleIdx];

      if (!isDeleting) {
        if (charIdx < currentFullRole.length) {
          charIdx++;
          setDisplayedRole(currentFullRole.slice(0, charIdx));
          timeoutId = setTimeout(tick, 75);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 3200);
        }
      } else {
        if (charIdx > 0) {
          charIdx--;
          setDisplayedRole(currentFullRole.slice(0, charIdx));
          timeoutId = setTimeout(tick, 40);
        } else {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeoutId = setTimeout(tick, 300);
        }
      }
    };

    timeoutId = setTimeout(() => {
      isDeleting = true;
      tick();
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, []);

  // Voice narration toggle for the speaker button matching reference screenshot
  const handleToggleSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `Hola, soy ${personal.fullName}, ${personal.role}. ${personal.summary}`
    );
    utterance.lang = "es-CO";
    utterance.rate = 1.02;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="h-4 w-4" />;
      case "github":
        return <GitHubIcon className="h-4 w-4" />;
      case "whatsapp":
        return <WhatsAppIcon className="h-4 w-4" />;
      case "x":
        return <XIcon className="h-3.5 w-3.5" />;
      default:
        return <GitHubIcon className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-96px)] flex items-center bg-black py-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Exact layout from reference image */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Two-Line Heading: White greeting + Primary Blue First Name + Sky Cyan Last Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.12] text-white">
              <span className="block">
                Hola, soy{" "}
                <span className="text-[#3b82f6] drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                  {personal.firstName}
                </span>
              </span>
              <span className="block mt-1 text-[#38bdf8] drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                {personal.lastName}
              </span>
            </h1>

            {/* Subtitle / Role with Vertical Bar Cursor */}
            <div className="mt-3 flex items-center text-xl sm:text-3xl font-extrabold text-[#3b82f6] min-h-[2.5rem]">
              <span>{displayedRole}</span>
              <span
                className="ml-4 inline-block h-7 sm:h-8 w-[2px] bg-[#3b82f6] animate-cursor-blink"
                aria-hidden="true"
              />
            </div>

            {/* Bio Paragraph matching the compact quote paragraph in the reference */}
            <p className="mt-5 max-w-xl text-xs sm:text-[13.5px] leading-[1.68] text-gray-200 font-normal">
              {personal.heroQuote}
            </p>

            {/* Action Buttons Row + Speaker Icon matching reference */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="btn-blue-solid px-8 py-3 text-sm sm:text-[15px] min-w-[140px] text-center"
              >
                Contrátame
              </a>

              <a
                href="#educacion"
                className="btn-blue-outline px-8 py-3 text-sm sm:text-[15px] min-w-[140px] text-center"
              >
                MI CV
              </a>

              <button
                onClick={handleToggleSpeech}
                type="button"
                aria-label={
                  isSpeaking
                    ? "Detener lectura de voz"
                    : "Escuchar presentación por voz"
                }
                title={
                  isSpeaking
                    ? "Silenciar presentación"
                    : "Escuchar presentación de Jerónimo"
                }
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  isSpeaking
                    ? "text-[#38bdf8] bg-[#3b82f6]/15"
                    : "text-white hover:text-[#38bdf8]"
                }`}
              >
                {isSpeaking ? (
                  <Volume2 className="h-5 w-5 animate-pulse" />
                ) : (
                  <VolumeX className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Bottom-Left Circular Outlined Social Icons */}
            <div className="mt-16 sm:mt-24 lg:mt-28 flex items-center gap-4">
              {personal.socials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b82f6] bg-black text-[#3b82f6] hover:border-[#38bdf8] hover:bg-[#3b82f6] hover:text-black hover:shadow-[0_0_18px_rgba(59,130,246,0.65)] transition-all duration-300"
                  aria-label={soc.platform}
                  title={soc.platform}
                >
                  {renderSocialIcon(soc.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Typographic Code Portrait emerging from Pure Black */}
          <div className="flex items-center justify-center lg:col-span-5">
            <CodePortrait
              imageSrc={personal.avatarReal}
              alt={personal.fullName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
