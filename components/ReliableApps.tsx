"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, PenTool, Rocket, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReliableApps() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: t.reliableApps.feature1Title,
      description: t.reliableApps.feature1Desc,
    },
    {
      icon: <PenTool className="w-5 h-5 text-white" />,
      title: t.reliableApps.feature2Title,
      description: t.reliableApps.feature2Desc,
    },
    {
      icon: <Rocket className="w-5 h-5 text-white" />,
      title: t.reliableApps.feature3Title,
      description: t.reliableApps.feature3Desc,
    },
    {
      icon: <Wrench className="w-5 h-5 text-white" />,
      title: t.reliableApps.feature4Title,
      description: t.reliableApps.feature4Desc,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 sm:py-32 lg:py-40 bg-[#0b0d12] text-white border-y border-white/10 relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and 2x2 Grid */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t.reliableApps.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-10 sm:gap-y-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0062ff] group-hover:scale-105 transition-all duration-200 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High Quality Developer Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-[480px] sm:h-[560px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
              <Image
                src="/assets/pexels-mizunokozuki-12899168.jpg"
                alt="Engenharia de Software Interestelar Studios"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-dark border border-white/10 shadow-lg">
                <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase">
                  {t.reliableApps.photoBadgeTitle}
                </p>
                <p className="text-sm font-medium text-white mt-1">
                  {t.reliableApps.photoBadgeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
