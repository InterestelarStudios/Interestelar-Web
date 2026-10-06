"use client";

import React from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  image?: string;
  url?: string;
  tags: string[];
  description: string;
  longDescription: string;
  region: string;
  platforms: string[];
  highlights: string[];
  themeColor: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  const { t } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0b0c14] rounded-2xl shadow-2xl overflow-hidden border border-white/15 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-purple-400">
                {project.category}
              </span>
              <span className="text-xs text-gray-400">• {project.region}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
            aria-label={t.projects.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Project Banner Image */}
          {project.image && (
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg border border-white/10 bg-[#080910]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-md bg-white/[0.05] text-blue-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t.projects.modal.about}
            </h4>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              {project.longDescription}
            </p>
          </div>

          {/* Deliverables / Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {t.projects.modal.technicalHighlights}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="text-xs font-medium text-gray-400 block">
                {t.projects.modal.regionServed}
              </span>
              <span className="text-sm font-bold text-white mt-0.5 block">
                {project.region}
              </span>
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 block">
                {t.projects.platformsLabel}
              </span>
              <span className="text-sm font-bold text-white mt-0.5 block">
                {project.platforms.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            {t.projects.modal.similarQuestion}
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
            >
              {t.projects.modal.close}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="btn-reference-primary w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-white"
            >
              {t.projects.modal.requestQuote}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

