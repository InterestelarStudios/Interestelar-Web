"use client";

import React, { useState } from "react";
import { Search, PenTool, Terminal, ClipboardCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Step {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  position: { top: string; left: string };
}

export default function ProcessFlow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { t } = useLanguage();

  const steps: Step[] = [
    {
      id: "descoberta",
      number: "01",
      title: t.processFlow.steps.step1Title,
      icon: <Search className="w-5 h-5 text-white" />,
      subtitle: t.processFlow.steps.step1Subtitle,
      description: t.processFlow.steps.step1Desc,
      position: { top: "6%", left: "50%" },
    },
    {
      id: "ux-ui",
      number: "02",
      title: t.processFlow.steps.step2Title,
      icon: <PenTool className="w-5 h-5 text-white" />,
      subtitle: t.processFlow.steps.step2Subtitle,
      description: t.processFlow.steps.step2Desc,
      position: { top: "35%", left: "90%" },
    },
    {
      id: "desenvolvimento",
      number: "03",
      title: t.processFlow.steps.step3Title,
      icon: <Terminal className="w-5 h-5 text-white" />,
      subtitle: t.processFlow.steps.step3Subtitle,
      description: t.processFlow.steps.step3Desc,
      position: { top: "85%", left: "75%" },
    },
    {
      id: "testes",
      number: "04",
      title: t.processFlow.steps.step4Title,
      icon: <ClipboardCheck className="w-5 h-5 text-white" />,
      subtitle: t.processFlow.steps.step4Subtitle,
      description: t.processFlow.steps.step4Desc,
      position: { top: "85%", left: "25%" },
    },
    {
      id: "entrega-suporte",
      number: "05",
      title: t.processFlow.steps.step5Title,
      icon: <Headphones className="w-5 h-5 text-white" />,
      subtitle: t.processFlow.steps.step5Subtitle,
      description: t.processFlow.steps.step5Desc,
      position: { top: "35%", left: "10%" },
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section id="processo" className="min-h-screen flex items-center justify-center py-24 sm:py-32 lg:py-40 bg-[#08090d] text-white relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t.processFlow.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t.processFlow.description}
            </p>

            {/* Active Step Card */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#0062ff] text-white shadow-sm">
                  {t.processFlow.stageLabel} {currentStep.number}
                </span>
                <span className="text-sm font-semibold text-blue-400">{currentStep.subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{currentStep.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{currentStep.description}</p>
            </div>

            {/* Step Selector Buttons for mobile/accessibility */}
            <div className="flex flex-wrap gap-2.5 pt-3">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                    activeStepIndex === idx
                      ? "bg-[#0062ff] text-white font-bold shadow-md shadow-blue-500/20"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {step.number}. {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Orbital Circle Diagram */}
          <div className="lg:col-span-6 flex justify-center items-center py-4">
            <div className="relative w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">
              {/* Outer Orbit Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/20" />
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-white/10" />

              {/* Center Hub */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#11131a] border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center p-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0062ff] animate-ping mb-1" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  {t.processFlow.hubBadge}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {t.processFlow.hubBrand}
                </span>
              </div>

              {/* 5 Orbital Nodes */}
              {steps.map((step, index) => {
                const isActive = activeStepIndex === index;
                return (
                  <div
                    key={step.id}
                    style={{
                      top: step.position.top,
                      left: step.position.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute z-20"
                  >
                    <button
                      onClick={() => setActiveStepIndex(index)}
                      className={`flex flex-col items-center group focus:outline-none transition-all duration-300 ${
                        isActive ? "scale-110" : "hover:scale-105"
                      }`}
                      aria-label={step.title}
                    >
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                          isActive
                            ? "bg-[#0062ff] ring-4 ring-blue-500/30 shadow-blue-500/50"
                            : "bg-[#181a24] border border-white/20 hover:border-blue-400"
                        }`}
                      >
                        {step.icon}
                      </div>

                      <span
                        className={`mt-2 text-xs sm:text-sm font-semibold whitespace-nowrap px-2.5 py-1 rounded transition-colors ${
                          isActive
                            ? "bg-white text-gray-900 font-bold shadow-md"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
