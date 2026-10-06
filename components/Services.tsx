"use client";

import React from "react";
import { Globe, Code2, Server, ShoppingCart, Smartphone, PenTool } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.cards.web.title,
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      tags: t.services.cards.web.tags,
      glowHover: "hover:border-blue-500/40",
    },
    {
      title: t.services.cards.frontend.title,
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      tags: t.services.cards.frontend.tags,
      glowHover: "hover:border-indigo-500/40",
    },
    {
      title: t.services.cards.backend.title,
      icon: <Server className="w-5 h-5 text-purple-400" />,
      tags: t.services.cards.backend.tags,
      glowHover: "hover:border-purple-500/40",
    },
    {
      title: t.services.cards.ecommerce.title,
      icon: <ShoppingCart className="w-5 h-5 text-blue-400" />,
      tags: t.services.cards.ecommerce.tags,
      glowHover: "hover:border-blue-500/40",
    },
    {
      title: t.services.cards.mobile.title,
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      tags: t.services.cards.mobile.tags,
      glowHover: "hover:border-emerald-500/40",
    },
    {
      title: t.services.cards.design.title,
      icon: <PenTool className="w-5 h-5 text-purple-400" />,
      tags: t.services.cards.design.tags,
      glowHover: "hover:border-purple-500/40",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#080910] border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" distance={30} duration={650}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-blue-400 font-semibold tracking-wide">
              <span>SERVIÇOS DE ENGENHARIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              {t.services.title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed font-normal">
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 100}
              distance={35}
              duration={650}
              className="h-full"
            >
              <div
                className={`glass-cinematic-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full min-h-[260px] transition-all duration-300 group hover:-translate-y-1.5 ${service.glowHover}`}
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.1] transition-all shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white whitespace-pre-line leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="pt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-gray-300 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

