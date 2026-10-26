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
  title: "Jerónimo Deossa Abad | Desarrollador de Software",
  description:
    "Portafolio profesional de Jerónimo Deossa Abad. Técnico Laboral en Desarrollo de Software, Frontend II, Backend II e Inteligencia Artificial en Medellín, Colombia.",
  keywords: [
    "Jerónimo Deossa Abad",
    "Desarrollador de Software",
    "Software Developer",
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
    title: "Jerónimo Deossa Abad | Desarrollador de Software",
    description: "Desarrollador de Software en Medellín, Colombia.",
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
      <body className="min-h-screen bg-black text-[#eef4f8] antialiased selection:bg-[#3b82f6]/30 selection:text-[#38bdf8] font-sans">
        {children}
      </body>
    </html>
  );
}
