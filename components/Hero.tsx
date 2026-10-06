import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-16 bg-[#06070c] overflow-hidden flex flex-col justify-between">
      {/* 1. Background Video in Loop with Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* HTML5 WebM Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        >
          <source src="/assets/ints_back.webm" type="video/webm" />
        </video>

        {/* Progressive Gradient Blur Layers: Top is strongly blurred (14px) for maximum readability, bottom has lighter blur (3px) */}
        <div className="absolute inset-0 video-blur-layer-base pointer-events-none" />
        <div className="absolute inset-0 video-blur-layer-gradient pointer-events-none" />

        {/* Cinematic Vignette & Ambient Overlays to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06070c]/80 via-transparent to-[#06070c]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#06070c_85%)] opacity-70" />

        {/* Dual Overhead Spotlights (Purple & Indigo Beams from reference) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[550px] pointer-events-none flex justify-center opacity-70">
          <div className="absolute -top-12 -left-10 sm:left-12 w-80 sm:w-96 h-[500px] spotlight-beam-left transform -rotate-12 origin-top" />
          <div className="absolute -top-12 -right-10 sm:right-12 w-80 sm:w-96 h-[500px] spotlight-beam-right transform rotate-12 origin-top" />
        </div>
      </div>

      {/* 2. Main Center Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex-1 flex flex-col items-center justify-center pt-6 pb-4">
        
        {/* Brand / Kicker Badge ("Let's ops;" style in reference) */}
        <ScrollReveal direction="down" delay={100}>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md mb-6 hover:border-purple-500/40 transition-colors shadow-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
              Interestelar
            </span>
            <span className="text-xs sm:text-sm font-bold text-purple-400 drop-shadow-[0_0_8px_#a855f7]">
              ;
            </span>
            <span className="text-gray-500 text-xs">|</span>
            <span className="text-xs text-gray-300 font-medium">
              {t.hero.tagline}
            </span>
          </div>
        </ScrollReveal>

        {/* Big Impact Headline (Upper Case Display) */}
        <ScrollReveal direction="up" delay={200} distance={36}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {t.hero.titleStart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white drop-shadow-[0_0_35px_rgba(96,165,250,0.5)]">
              {t.hero.titleHighlight}
            </span>{" "}
            <br className="hidden sm:inline" />
            {t.hero.titleEnd}
          </h1>
        </ScrollReveal>

        {/* Sub-headline Kicker (Translucent Uppercase font from reference) */}
        <ScrollReveal direction="up" delay={300}>
          <h2 className="mt-3 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-gray-400/90 max-w-2xl mx-auto drop-shadow-md">
            Software House & Produtos Digitais de Alto Impacto
          </h2>
        </ScrollReveal>

        {/* Descriptive Text */}
        <ScrollReveal direction="up" delay={400}>
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-gray-200/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
            {t.hero.description}
          </p>
        </ScrollReveal>

        {/* Action CTAs Matching User's Reference Image */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 z-20">
            <button
              onClick={onOpenContact}
              className="btn-reference-primary group inline-flex items-center space-x-3 p-1.5 sm:p-2 pr-5 sm:pr-6 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#fbbf24] flex items-center justify-center text-[#0b0c10] shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4 text-[#0b0c10]" />
              </div>
              <span className="text-white font-semibold">{t.hero.startNow}</span>
            </button>

            <a
              href="#projetos"
              className="btn-reference-secondary inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.portfolio}
            </a>
          </div>
        </ScrollReveal>

        {/* 3. Metrics Strip Floating Glass */}
        <ScrollReveal direction="up" delay={600}>
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 px-6 sm:px-8 py-3.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md max-w-xl mx-auto shadow-2xl">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{t.hero.metric1Val}</div>
              <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-medium">{t.hero.metric1Label}</div>
            </div>
            <div className="border-x border-white/10 px-2 sm:px-4">
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{t.hero.metric2Val}</div>
              <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-medium">{t.hero.metric2Label}</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{t.hero.metric3Val}</div>
              <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-medium">{t.hero.metric3Label}</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

