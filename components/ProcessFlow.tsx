"use client";

import React, { useState } from "react";
import { Search, PenTool, Terminal, ClipboardCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

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
    <section id="processo" className="min-h-screen flex items-center justify-center py-24 sm:py-32 bg-[#06070c] text-white relative overflow-hidden border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            <ScrollReveal direction="left" distance={30} duration={650}>
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-400 font-semibold tracking-wide">
                  <span>METODOLOGIA ÁGIL & ORBITAL</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.15]">
                  {t.processFlow.title}
                </h2>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mt-4">
                {t.processFlow.description}
              </p>
            </ScrollReveal>

            {/* Active Step Card */}
            <ScrollReveal direction="up" delay={200} distance={25} duration={650}>
              <div className="p-6 sm:p-8 rounded-2xl glass-cinematic-card space-y-4 shadow-2xl border-purple-500/30">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-md shadow-purple-500/20">
                    {t.processFlow.stageLabel} {currentStep.number}
                  </span>
                  <span className="text-sm font-semibold text-blue-300">{currentStep.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{currentStep.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed font-normal">{currentStep.description}</p>
              </div>

              {/* Step Selector Buttons for mobile/accessibility */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${activeStepIndex === idx
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/20"
                        : "bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.08]"
                      }`}
                  >
                    {step.number}. {step.title}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Orbital Circle Diagram */}
          <div className="lg:col-span-6 flex justify-center items-center py-4">
            <ScrollReveal direction="right" distance={35} duration={750}>
              <div className="relative w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">
                {/* Outer Orbit Ring with Glowing Dashed Stroke */}
                <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] animate-pulse-glow" />
                <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-white/15" />

                {/* Center Hub */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0d0e17] border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.25)] flex flex-col items-center justify-center text-center p-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping mb-1 shadow-[0_0_8px_#38bdf8]" />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    {t.processFlow.hubBadge}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white mt-0.5">
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
                        className={`flex flex-col items-center group focus:outline-none transition-all duration-300 ${isActive ? "scale-110" : "hover:scale-105"
                          }`}
                        aria-label={step.title}
                      >
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${isActive
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white ring-4 ring-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                              : "bg-[#0f111a] border border-white/20 hover:border-purple-400/50 text-white"
                            }`}
                        >
                          {step.icon}
                        </div>

                        <span
                          className={`mt-2 text-xs sm:text-sm font-semibold whitespace-nowrap px-2.5 py-1 rounded transition-colors ${isActive
                              ? "bg-white text-gray-950 font-bold shadow-md"
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
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
