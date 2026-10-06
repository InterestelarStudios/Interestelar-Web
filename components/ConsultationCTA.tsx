"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

interface ConsultationCTAProps {
  onOpenContact: () => void;
}

export default function ConsultationCTA({ onOpenContact }: ConsultationCTAProps) {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 bg-[#06070c] border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={30} duration={650}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-400 font-semibold tracking-wide">
                <span>AGENDAMENTO & CONSULTORIA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.15] mt-3">
                {t.consultationCTA.title}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mt-4">
                {t.consultationCTA.description}
              </p>
            </ScrollReveal>

            {/* Value bullets */}
            <ScrollReveal direction="up" delay={200} distance={20} duration={600}>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{t.consultationCTA.bullet1}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{t.consultationCTA.bullet2}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{t.consultationCTA.bullet3}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} distance={20} duration={600}>
              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="btn-reference-primary group inline-flex items-center space-x-3 p-2 pr-7 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#fbbf24] flex items-center justify-center text-[#0b0c10] shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Calendar className="w-4 h-4 text-[#0b0c10]" />
                  </div>
                  <span className="text-white font-semibold">{t.consultationCTA.btn}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Photo of Team */}
          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal direction="right" distance={35} duration={750} className="w-full max-w-lg">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <Image
                  src="/assets/pexels-airamdphoto-20044382.jpg"
                  alt="Reunião de alinhamento com equipe de produto"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 p-4 glass-cinematic rounded-2xl border border-white/15 shadow-xl">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {t.consultationCTA.cardBadgeTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200 mt-0.5">
                    {t.consultationCTA.cardBadgeDesc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

