"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);

      const encoded = encodeURIComponent(
        `Hola Jerónimo, soy ${formName || "alguien que vio tu portafolio"}. ${formMessage}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/573002055624?text=${encoded}`, "_blank");
        setIsSent(false);
        setFormName("");
        setFormMessage("");
      }, 1200);
    }, 900);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative z-10 border-t border-neon-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3.5 py-1 text-xs font-mono text-neon-accent mb-3">
            <MessageSquare className="h-3.5 w-3.5" />
            Hablemos
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ¿Tienes una idea o proyecto? <span className="text-neon-glow">¡Escríbeme!</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Estoy listo para unirme a un equipo de trabajo, crear páginas web o colaborar en cosas creativas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels */}
          <div className="lg:col-span-5 rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 sm:p-8 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-neon-accent" />
              Mis Canales Directos
            </h3>

            <div className="space-y-4">
              
              {/* WhatsApp direct card */}
              <a
                href={personal.phoneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-neon-subtle bg-[#080b0e] p-4 hover:border-neon-hover transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-subtle text-neon-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">WhatsApp / Teléfono</div>
                    <div className="text-sm font-bold text-white group-hover:text-neon-accent transition-colors">
                      {personal.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-neon-accent flex items-center gap-1">
                  Abrir <ArrowRight className="h-3 w-3" />
                </span>
              </a>

              {/* Email direct card */}
              <div className="rounded-2xl border border-neon-subtle bg-[#080b0e] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon-subtle text-neon-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-400">Correo Electrónico</div>
                    <div className="text-sm font-bold text-white truncate">
                      {personal.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 flex shrink-0 items-center gap-1.5 rounded-lg border border-neon-subtle bg-[#0c1015] px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-neon-accent hover:border-neon-hover transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-neon-accent" />
                      <span className="text-neon-accent font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location card */}
              <div className="rounded-2xl border border-neon-subtle bg-[#080b0e] p-4 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon-subtle text-neon-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Dónde vivo</div>
                  <div className="text-sm font-bold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-neon-subtle bg-neon-subtle p-3.5 text-center">
              <span className="text-xs font-bold text-neon-accent flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: "var(--neon-accent)" }} />
                Respondo rápido por WhatsApp y correo
              </span>
            </div>
          </div>

          {/* Quick interactive message form */}
          <div className="lg:col-span-7 rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 sm:p-8 backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">
              Mándame un mensaje directo
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Escribe lo que necesitas y te responderé en breve.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  ¿Cómo te llamas o de qué empresa eres?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Daniel / Empresa ABC"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full rounded-xl border border-neon-subtle bg-[#080b0e] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--neon-border)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  ¿En qué te puedo ayudar?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Cuéntame sobre la vacante, tu idea de página web o el proyecto que quieres hacer..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full rounded-xl border border-neon-subtle bg-[#080b0e] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1"
                  style={{ borderColor: "var(--neon-border)" }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className="btn-neon-pill flex-1 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold shadow-lg disabled:opacity-80 cursor-pointer"
                >
                  {isSending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Preparando mensaje seguro...</span>
                    </span>
                  ) : isSent ? (
                    <span className="flex items-center gap-2 text-black">
                      <Check className="h-4 w-4 stroke-[3]" />
                      <span>¡Listo! Redirigiendo a WhatsApp...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Enviar por WhatsApp</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}?subject=Contacto desde Portafolio&body=${encodeURIComponent(
                    formMessage
                  )}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-neon-subtle bg-[#080b0e] px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-neon-accent hover:border-neon-hover transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar por Correo</span>
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
