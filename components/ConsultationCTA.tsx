"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ConsultationCTAProps {
  onOpenContact: () => void;
}

export default function ConsultationCTA({ onOpenContact }: ConsultationCTAProps) {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2]">
              {t.consultationCTA.title}
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t.consultationCTA.description}
            </p>

            {/* Value bullets */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#0062ff] shrink-0" />
                <span>{t.consultationCTA.bullet1}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#0062ff] shrink-0" />
                <span>{t.consultationCTA.bullet2}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#0062ff] shrink-0" />
                <span>{t.consultationCTA.bullet3}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center px-8 py-4 rounded-md bg-[#0062ff] hover:bg-[#0052db] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.consultationCTA.btn}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo of Team */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <Image
                src="/assets/pexels-airamdphoto-20044382.jpg"
                alt="Reunião de alinhamento com equipe de produto"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
                <p className="text-xs font-bold text-gray-900">
                  {t.consultationCTA.cardBadgeTitle}
                </p>
                <p className="text-xs text-gray-500">
                  {t.consultationCTA.cardBadgeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
