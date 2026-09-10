"use client";

import React from "react";
import { Globe, Code2, Server, ShoppingCart, Smartphone, PenTool } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.cards.web.title,
      icon: <Globe className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.web.tags,
    },
    {
      title: t.services.cards.frontend.title,
      icon: <Code2 className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.frontend.tags,
    },
    {
      title: t.services.cards.backend.title,
      icon: <Server className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.backend.tags,
    },
    {
      title: t.services.cards.ecommerce.title,
      icon: <ShoppingCart className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.ecommerce.tags,
    },
    {
      title: t.services.cards.mobile.title,
      icon: <Smartphone className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.mobile.tags,
    },
    {
      title: t.services.cards.design.title,
      icon: <PenTool className="w-5 h-5 text-gray-700" />,
      tags: t.services.cards.design.tags,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f4f5f8] rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px] border border-gray-200/50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062ff] group-hover:text-white transition-all text-gray-700">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-pre-line leading-tight group-hover:text-[#0062ff] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="pt-8 flex flex-wrap gap-x-3 gap-y-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
