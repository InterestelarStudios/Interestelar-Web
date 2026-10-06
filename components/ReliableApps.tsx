"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, PenTool, Rocket, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function ReliableApps() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title: t.reliableApps.feature1Title,
      description: t.reliableApps.feature1Desc,
    },
    {
      icon: <PenTool className="w-5 h-5 text-blue-400" />,
      title: t.reliableApps.feature2Title,
      description: t.reliableApps.feature2Desc,
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: t.reliableApps.feature3Title,
      description: t.reliableApps.feature3Desc,
    },
    {
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      title: t.reliableApps.feature4Title,
      description: t.reliableApps.feature4Desc,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 sm:py-32 bg-[#06070c] text-white border-y border-white/[0.06] relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and 2x2 Grid */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-12">
            <ScrollReveal direction="left" distance={30} duration={650}>
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-blue-400 font-semibold tracking-wide">
                  <span>CONFIABILIDADE & ESCALABILIDADE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.15]">
                  {t.reliableApps.title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-x-10 sm:gap-y-10">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 100}
                  distance={25}
                  duration={600}
                >
                  <div className="space-y-3.5 group">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400/40 group-hover:bg-white/[0.08] transition-all duration-200 shadow-md">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: High Quality Developer Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right" distance={35} duration={750} className="w-full max-w-md">
              <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <Image
                  src="/assets/pexels-mizunokozuki-12899168.jpg"
                  alt="Engenharia de Software Interestelar Studios"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070c]/95 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-cinematic border border-white/15 shadow-2xl">
                  <p className="text-xs text-blue-400 font-bold tracking-wider uppercase">
                    {t.reliableApps.photoBadgeTitle}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-200 mt-1">
                    {t.reliableApps.photoBadgeDesc}
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

