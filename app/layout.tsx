import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeronimodeossa.dev"),
  title: "Jerónimo Deossa Abad (Deodraus) | Desarrollador de Software & Creador",
  description:
    "Portafolio profesional de Jerónimo Deossa Abad (Deodraus). Técnico Laboral en Desarrollo de Software, Frontend II, Backend II, IA y Creador de Contenido en Medellín, Colombia.",
  keywords: [
    "Jerónimo Deossa Abad",
    "Deodraus",
    "Desarrollador de Software",
    "Frontend Developer",
    "Backend Developer",
    "Medellín",
    "Colombia",
    "Portafolio",
    "VitLine",
    "Next.js",
    "React"
  ],
  authors: [{ name: "Jerónimo Deossa Abad" }],
  openGraph: {
    title: "Jerónimo Deossa Abad (Deodraus) | Portafolio Personal",
    description: "Desarrollador de Software & Creador de Contenido en Medellín, Colombia.",
    images: ["/img/photojeronimo.jpeg"],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#080b0e] text-[#eef4f8] antialiased selection:bg-[#00f5b8]/30 selection:text-[#00f5b8] font-sans">
        {children}
      </body>
    </html>
  );
}
