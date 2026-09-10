"use client";

import React from "react";
import { Globe2, LayoutGrid, Smartphone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CustomSolutionsProps {
  onOpenContact: () => void;
}

export default function CustomSolutions({ onOpenContact }: CustomSolutionsProps) {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Globe2 className="w-6 h-6 text-gray-700" />,
      title: t.customSolutions.item1Title,
      description: t.customSolutions.item1Desc,
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-gray-700" />,
      title: t.customSolutions.item2Title,
      description: t.customSolutions.item2Desc,
    },
    {
      icon: <Smartphone className="w-6 h-6 text-gray-700" />,
      title: t.customSolutions.item3Title,
      description: t.customSolutions.item3Desc,
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2]">
              {t.customSolutions.titleStart}{" "}
              <span className="text-[#0062ff] block">
                {t.customSolutions.titleHighlight}
              </span>{" "}
              {t.customSolutions.titleEnd}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              {t.customSolutions.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center px-7 py-3.5 rounded-md bg-[#0062ff] hover:bg-[#0052db] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.customSolutions.talkToExpert}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Feature Blocks */}
          <div className="lg:col-span-7 space-y-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start space-x-5 p-6 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-blue-50 group-hover:text-[#0062ff] transition-colors shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0062ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
