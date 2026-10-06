"use client";

import React from "react";
import { Globe2, LayoutGrid, Smartphone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

interface CustomSolutionsProps {
  onOpenContact: () => void;
}

export default function CustomSolutions({ onOpenContact }: CustomSolutionsProps) {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Globe2 className="w-6 h-6 text-blue-400" />,
      title: t.customSolutions.item1Title,
      description: t.customSolutions.item1Desc,
      glow: "group-hover:border-blue-500/40",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-purple-400" />,
      title: t.customSolutions.item2Title,
      description: t.customSolutions.item2Desc,
      glow: "group-hover:border-purple-500/40",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: t.customSolutions.item3Title,
      description: t.customSolutions.item3Desc,
      glow: "group-hover:border-blue-500/40",
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#06070c] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={30} duration={700}>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-400 font-semibold tracking-wide">
                  <span>SOLUÇÕES SOB MEDIDA</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.15]">
                  {t.customSolutions.titleStart}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 block drop-shadow-[0_0_25px_rgba(96,165,250,0.35)]">
                    {t.customSolutions.titleHighlight}
                  </span>{" "}
                  {t.customSolutions.titleEnd}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {t.customSolutions.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="btn-reference-primary group inline-flex items-center space-x-3 p-1.5 sm:p-2 pr-6 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#fbbf24] flex items-center justify-center text-[#0b0c10] shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4 text-[#0b0c10]" />
                    </div>
                    <span className="text-white font-semibold">{t.customSolutions.talkToExpert}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Feature Bento Cards */}
          <div className="lg:col-span-7 space-y-5">
            {items.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="right"
                delay={idx * 150}
                distance={30}
                duration={650}
              >
                <div
                  className={`glass-cinematic-card p-6 sm:p-7 rounded-2xl flex items-start space-x-5 transition-all duration-300 group hover:-translate-y-1 ${item.glow}`}
                >
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform shrink-0 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

