"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Code2, User } from "lucide-react";

interface CodePortraitProps {
  imageSrc: string;
  alt: string;
}

const CODE_SNIPPETS = [
  '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><title>Jerónimo Deossa Abad | Software Developer</title>',
  'import { NextRequest, NextResponse } from "next/server"; export async function buildSolution(idea: ComplexIdea) {',
  'const developer = { name: "Jerónimo Deossa Abad", role: "Software Developer", location: "Medellín, Colombia" };',
  'stack: ["TypeScript", "React", "Next.js", "Python", "PHP", "MySQL", "MariaDB", "TailwindCSS", "Git", "Node.js"],',
  'function solveProblem(input: Challenge): ElegantSoftware { return transformIntoDigitalReality(input.analyze()); }',
  'SELECT p.id, p.title, p.architecture FROM projects p WHERE p.developer = "Jeronimo_Deossa" AND p.status = "PROD";',
  'class VirtualAssistant extends GeminiAI { constructor(config: AIConfig) { super(config); this.initVoiceEngine(); } }',
  'export default function VitLineBooking({ flightId, qrToken }: BoardingProps): JSX.Element { return <QRCode />; }',
  'git commit -m "feat(core): optimize fullstack database queries and responsive UI components" && git push origin main',
  'const cleanCode = (logic: Algorithm) => logic.refactor({ readable: true, scalable: true, performance: "optimal" });',
  'while (learning) { exploreNewTechnologies(); buildRealProjects(); collaborateWithTeam("Scrum", "Agile"); }',
  '<section id="portfolio" class="bg-black text-blue-400 font-mono"><canvas id="code-portrait-matrix" /></section>',
];

export default function CodePortrait({ imageSrc, alt }: CodePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const width = 560;
      const height = 680;
      canvas.width = width;
      canvas.height = height;

      // Offscreen canvas to sample and process portrait pixels
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      // Crop focus on head, glasses, face, and upper collar
      const srcW = img.width;
      const srcH = img.height;
      const cropX = srcW * 0.14;
      const cropY = srcH * 0.02;
      const cropW = srcW * 0.72;
      const cropH = srcH * 0.76;

      offCtx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, width, height);
      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Step 1: Identify background wall via border-connected flood fill
      // The wall in photojeronimo.jpeg is bright and low-saturation gray/white
      const isBg = new Uint8Array(width * height);
      const queue = new Int32Array(width * height);
      let qHead = 0;
      let qTail = 0;

      const isWallCandidate = (idx: number, x: number, y: number) => {
        const nx = (x - width * 0.5) / (width * 0.28);
        const ny = (y - height * 0.43) / (height * 0.29);
        // Protect core face interior (glasses glare, eyes, nose bridge)
        if (nx * nx + ny * ny < 0.85) return false;

        const p = idx * 4;
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const warmth = r - b;
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const sat = maxC - minC;

        // Wall & wall shadow are relatively bright and neutral (not warm skin, not dark hair/shirt)
        return lum > 128 && warmth < 33 && sat < 36;
      };

      // Seed flood fill along top, left, and right borders
      for (let x = 0; x < width; x++) {
        const topIdx = x;
        if (isWallCandidate(topIdx, x, 0)) {
          isBg[topIdx] = 1;
          queue[qTail++] = topIdx;
        }
      }
      for (let y = 0; y < height; y++) {
        const leftIdx = y * width;
        if (!isBg[leftIdx] && isWallCandidate(leftIdx, 0, y)) {
          isBg[leftIdx] = 1;
          queue[qTail++] = leftIdx;
        }
        const rightIdx = y * width + (width - 1);
        if (!isBg[rightIdx] && isWallCandidate(rightIdx, width - 1, y)) {
          isBg[rightIdx] = 1;
          queue[qTail++] = rightIdx;
        }
      }

      while (qHead < qTail) {
        const curr = queue[qHead++];
        const cx = curr % width;
        const cy = (curr / width) | 0;

        const neighbors = [
          curr - 1,
          curr + 1,
          curr - width,
          curr + width,
        ];

        for (let i = 0; i < 4; i++) {
          const nb = neighbors[i];
          if (nb < 0 || nb >= width * height || isBg[nb]) continue;
          const nx = nb % width;
          const ny = (nb / width) | 0;
          if (Math.abs(nx - cx) + Math.abs(ny - cy) !== 1) continue;

          if (isWallCandidate(nb, nx, ny)) {
            isBg[nb] = 1;
            queue[qTail++] = nb;
          }
        }
      }

      // Step 2: Build sculptural luminance map (matching the chiaroscuro reference portrait)
      const lumMap = new Float32Array(width * height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          if (isBg[idx]) {
            lumMap[idx] = 0;
            continue;
          }

          const p = idx * 4;
          const r = data[p];
          const g = data[p + 1];
          const b = data[p + 2];

          // Base perceptual brightness
          let lum = (0.35 * r + 0.45 * g + 0.2 * b) / 255;

          // S-curve contrast enhancement to make glasses, eyes, eyebrows, nose & lips pop
          lum = (lum - 0.22) / 0.62;
          lum = Math.max(0, Math.min(1, lum));
          lum = Math.pow(lum, 1.15);

          // Give subtle texture visibility to dark hair curls & glasses rims
          const rawLum = (r + g + b) / (3 * 255);
          if (rawLum < 0.28 && y < height * 0.68) {
            lum = Math.max(lum, rawLum * 0.55);
          }

          // Elliptical vignette so the head/portrait floats out of pitch-black space
          // just like the reference image
          const ex = (x - width * 0.5) / (width * 0.42);
          const ey = (y - height * 0.43) / (height * 0.43);
          const distSq = ex * ex + ey * ey;
          let vignette = 1 - Math.pow(Math.max(0, distSq), 1.35);
          vignette = Math.max(0, Math.min(1, vignette));

          // Dramatic side-lighting gradient (subtle left-side chiaroscuro shadow like the reference)
          const sideLight = 0.45 + 0.55 * Math.min(1, Math.max(0, (x / width - 0.12) / 0.65));

          // Smooth bottom fade below chin/collar
          let bottomFade = 1;
          if (y > height * 0.66) {
            bottomFade = Math.max(0, 1 - (y - height * 0.66) / (height * 0.24));
            bottomFade = Math.pow(bottomFade, 1.4);
          }

          lumMap[idx] = lum * vignette * sideLight * bottomFade;
        }
      }

      // Step 3: Render pure black canvas background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Step 4: Draw subtle continuous base portrait shading so facial features (eyes, glasses) are super crisp
      const shadeData = ctx.createImageData(width, height);
      const sPixels = shadeData.data;
      for (let i = 0; i < width * height; i++) {
        const v = lumMap[i];
        const sp = i * 4;
        if (v > 0.02) {
          const intensity = Math.floor(Math.pow(v, 1.3) * 75);
          sPixels[sp] = intensity;
          sPixels[sp + 1] = Math.min(255, Math.floor(intensity * 1.08));
          sPixels[sp + 2] = Math.min(255, Math.floor(intensity * 1.22));
          sPixels[sp + 3] = 255;
        } else {
          sPixels[sp + 3] = 255;
        }
      }
      ctx.putImageData(shadeData, 0, 0);

      // Step 5: Render dense micro-code typography across the portrait silhouette
      const fontSize = 6.5;
      const lineHeight = 6.5;
      const charWidth = 3.9;
      ctx.font = `700 ${fontSize}px monospace`;
      ctx.textBaseline = "top";

      const fullCodeStream = CODE_SNIPPETS.join("  //  ");
      const streamLen = fullCodeStream.length;
      let charCursor = 0;

      for (let y = 0; y < height; y += lineHeight) {
        const py = Math.min(height - 1, Math.floor(y + lineHeight * 0.5));
        for (let x = 0; x < width; x += charWidth) {
          const px = Math.min(width - 1, Math.floor(x + charWidth * 0.5));
          const val = lumMap[py * width + px];

          if (val > 0.035) {
            const ch = fullCodeStream[charCursor % streamLen];
            charCursor++;

            if (ch !== " ") {
              // Brighten characters in highlights, subtle ice-blue tint in midtones
              const alpha = Math.min(1, Math.pow(val, 0.82) * 1.28);
              const bright = Math.min(255, Math.floor(175 + val * 80));
              const blueBoost = Math.min(255, bright + 18);
              ctx.fillStyle = `rgba(${bright}, ${ Math.min(255, bright + 8) }, ${blueBoost}, ${alpha.toFixed(3)})`;
              ctx.fillText(ch, x, y);
            }
          } else {
            charCursor++;
          }
        }
      }

      setIsLoaded(true);
    };
  }, [imageSrc]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Main Portrait Container */}
      <div className="relative w-[300px] h-[365px] sm:w-[400px] sm:h-[485px] lg:w-[470px] lg:h-[570px] flex items-center justify-center overflow-hidden">
        {/* Code Matrix Portrait Canvas (Default - Matches Reference Screenshot) */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-contain transition-opacity duration-500 ${
            showOriginal ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label={alt}
        />

        {/* Optional Clean Real Photo View with Dark Vignette */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
            showOriginal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#3b82f6]/60 shadow-[0_0_50px_rgba(59,130,246,0.35)]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 320px, 420px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>

        {/* Loading skeleton while canvas initializes */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-52 rounded-full bg-[#3b82f6]/5 animate-pulse" />
          </div>
        )}
      </div>

      {/* Subtle Switch to let visitor toggle between Code Portrait and Real Photo */}
      <button
        onClick={() => setShowOriginal(!showOriginal)}
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#3b82f6]/30 bg-black/80 px-3.5 py-1 text-[11px] font-mono text-slate-400 hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all cursor-pointer"
        title={showOriginal ? "Ver retrato tipográfico en código" : "Ver fotografía original"}
      >
        {showOriginal ? (
          <>
            <Code2 className="h-3.5 w-3.5 text-[#38bdf8]" />
            <span>Ver Retrato en Código</span>
          </>
        ) : (
          <>
            <User className="h-3.5 w-3.5 text-[#3b82f6]" />
            <span>Ver Fotografía Original</span>
          </>
        )}
      </button>
    </div>
  );
}
