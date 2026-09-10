"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 bg-[#0b0c10] overflow-hidden flex items-center">
      {/* Background ambient lighting and star glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Space Particles Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {t.hero.titleStart}{" "}
              <span className="text-[#0062ff] inline-block font-extrabold drop-shadow-[0_0_24px_rgba(0,98,255,0.45)]">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleEnd}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#0062ff] hover:bg-[#0052db] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.startNow}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-white/30 hover:border-white/70 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.hero.portfolio}
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white">{t.hero.metric1Val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.hero.metric1Label}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{t.hero.metric2Val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.hero.metric2Label}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{t.hero.metric3Val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.hero.metric3Label}</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D / Mockup Visual (art1.png significantly enlarged) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none h-[440px] sm:h-[540px] lg:h-[640px] xl:h-[700px] flex items-center justify-center">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-blue-500/15 rounded-full filter blur-3xl transform scale-95 pointer-events-none" />

              <div className="relative w-full h-full animate-float flex items-center justify-center">
                <Image
                  src="/assets/art1.png"
                  alt="Interestelar Studios Mobile App Preview"
                  fill
                  priority
                  className="object-contain object-center lg:object-right drop-shadow-[0_20px_50px_rgba(0,98,255,0.35)] scale-105 sm:scale-110 lg:scale-120"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
