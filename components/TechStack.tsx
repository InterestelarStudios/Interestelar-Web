"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: "Flutter",
    color: "#02569B",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.235L8.74 16.81 12.44 20.51l5.574-5.575-3.7-3.7zM21.684 12.632h-7.37l-3.7 3.7 3.7 3.7 7.37-7.4z" fill="#02569B"/>
        <path d="M14.314 11.235l-3.7 3.7 3.7 3.7 3.7-3.7-3.7-3.7z" fill="#0175C2"/>
      </svg>
    ),
  },
  {
    name: "Kotlin",
    color: "#7F52FF",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M24 24H0V0h24L12 12l12 12z" fill="#7F52FF" />
        <path d="M0 24l12-12L0 0v24z" fill="#C711E1" />
      </svg>
    ),
  },
  {
    name: "Swift",
    color: "#F05138",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M21.84 15.3c-.07-.15-.17-.29-.28-.42-.87-1.02-2.18-1.93-3.23-2.31 1.25.96 2.05 2.12 2.37 3.19.06.2.08.4.07.59-.03.47-.32 1.05-.85 1.54-1.25 1.15-3.22 1.77-5.52 1.77-3.72 0-7.05-1.63-8.87-4.32C4.19 13.37 3.5 11.05 3.5 8.5c0-.6.04-1.2.12-1.78.1-.73.28-1.44.54-2.11C4.1 4.7 4 4.8 3.9 4.9 2.7 6.4 2 8.3 2 10.4c0 3.2 1.4 6.2 3.8 8.1 2.3 1.9 5.4 2.9 8.7 2.9 2.8 0 5.4-.7 7.4-2.1 1.4-1 2.2-2.3 2.2-3.4-.01-.22-.09-.43-.26-.6z"
          fill="#F05138"
        />
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4.6 17.5L8 3.8a.7.7 0 011.3-.1l2.4 4.5L4.6 17.5z" fill="#FFA000" />
        <path d="M12.9 11.6l2.1-4a.7.7 0 011.3 0l4.9 9.8-8.3-5.8z" fill="#F57C00" />
        <path d="M3.5 18.2l7.6 4.3a1.8 1.8 0 001.8 0l7.6-4.3-8.5-5.9-8.5 5.9z" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <div className="w-5 h-5 bg-[#F7DF1E] rounded-sm flex items-center justify-center font-bold text-[10px] text-black tracking-tighter">
        JS
      </div>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C8.5 2 6.5 3.5 6.5 5.8v2.2h5.5v.8H4.6C2.3 8.8 1 10.6 1 13.4c0 2.9 1.4 4.7 3.7 4.7h2.2v-2.3c0-2.4 2-4.3 4.4-4.3h5.4v-.8h-4.8c-.8 0-1.5-.7-1.5-1.5V5.8c0-2.2 2-3.8 5.4-3.8h.1c-1.3 0-2.7 0-3.9 0z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.4 0 5.4-1.5 5.4-3.8V16H12v-.8h7.4c2.3 0 3.6-1.8 3.6-4.6 0-2.9-1.4-4.7-3.7-4.7h-2.2v2.3c0 2.4-2 4.3-4.4 4.3H7.3v.8h4.8c.8 0 1.5.7 1.5 1.5v3.4c0 2.2-2 3.8-5.4 3.8h3.9z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#F24E1E",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f8f9fc] border-y border-gray-200 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {t.techStack.label}
            </span>
          </div>

          {/* Tech Badges List */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all duration-200 cursor-default group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
