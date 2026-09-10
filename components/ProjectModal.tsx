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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0062ff]">
                {project.category}
              </span>
              <span className="text-xs text-gray-500">• {project.region}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-200/60 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={t.projects.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Project Banner Image */}
          {project.image && (
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-md border border-gray-200/80 bg-gray-950">
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
                className="text-xs font-medium px-3 py-1 rounded-md bg-blue-50 text-[#0062ff] border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.projects.modal.about}
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Deliverables / Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.projects.modal.technicalHighlights}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0062ff] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <span className="text-xs font-semibold text-gray-500 block">
                {t.projects.modal.regionServed}
              </span>
              <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                {project.region}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 block">
                {t.projects.platformsLabel}
              </span>
              <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                {project.platforms.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500">
            {t.projects.modal.similarQuestion}
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {t.projects.modal.close}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold bg-[#0062ff] hover:bg-[#0052db] text-white rounded-md transition-all shadow-md shadow-blue-500/20"
            >
              {t.projects.modal.requestQuote}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
