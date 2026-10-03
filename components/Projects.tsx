"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import ProjectModal, { ProjectDetail } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsProps {
  onOpenContact: () => void;
}

export default function Projects({ onOpenContact }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const { t } = useLanguage();

  const projectsData: ProjectDetail[] = [
    {
      id: "instrutor-em-casa",
      title: t.projects.items.instrutor.title,
      category: t.projects.items.instrutor.category,
      image: "/assets/instrutor-em-casa.jpg",
      url: "https://instrutoremcasa.com.br/",
      tags: ["Flutter", "Firebase", "Javascript"],
      description: t.projects.items.instrutor.description,
      longDescription: t.projects.items.instrutor.longDescription,
      region: t.projects.items.instrutor.region,
      platforms: t.projects.items.instrutor.platforms,
      highlights: t.projects.items.instrutor.highlights,
      themeColor: "#2563EB",
    },
    {
      id: "safe-driver",
      title: t.projects.items.safeDriver.title,
      category: t.projects.items.safeDriver.category,
      image: "/assets/safe-driver.jpg",
      tags: ["Flutter", "Firebase", "Kotlin"],
      description: t.projects.items.safeDriver.description,
      longDescription: t.projects.items.safeDriver.longDescription,
      region: t.projects.items.safeDriver.region,
      platforms: t.projects.items.safeDriver.platforms,
      highlights: t.projects.items.safeDriver.highlights,
      themeColor: "#0D9488",
    },
    {
      id: "man-hub",
      title: t.projects.items.manHub.title,
      category: t.projects.items.manHub.category,
      image: "/assets/man-hub.jpg",
      tags: ["Flutter", "Firebase", "Javascript"],
      description: t.projects.items.manHub.description,
      longDescription: t.projects.items.manHub.longDescription,
      region: t.projects.items.manHub.region,
      platforms: t.projects.items.manHub.platforms,
      highlights: t.projects.items.manHub.highlights,
      themeColor: "#4F46E5",
    },
    {
      id: "pcxd",
      title: t.projects.items.pcxd.title,
      category: t.projects.items.pcxd.category,
      image: "/assets/pcxd.jpg",
      tags: ["Flutter", "Firebase"],
      description: t.projects.items.pcxd.description,
      longDescription: t.projects.items.pcxd.longDescription,
      region: t.projects.items.pcxd.region,
      platforms: t.projects.items.pcxd.platforms,
      highlights: t.projects.items.pcxd.highlights,
      themeColor: "#8B5CF6",
    },
    {
      id: "dr-gil",
      title: t.projects.items.drGil.title,
      category: t.projects.items.drGil.category,
      image: "/assets/dr-gil.jpg",
      url: "https://www.drguillermogilcalvo.com/",
      tags: ["Next.JS"],
      description: t.projects.items.drGil.description,
      longDescription: t.projects.items.drGil.longDescription,
      region: t.projects.items.drGil.region,
      platforms: t.projects.items.drGil.platforms,
      highlights: t.projects.items.drGil.highlights,
      themeColor: "#0284C7",
    },
    {
      id: "figgo",
      title: t.projects.items.figgo.title,
      category: t.projects.items.figgo.category,
      image: "/assets/figgo_web.png",
      url: "https://figgo-website.vercel.app/",
      tags: ["Next.Js"],
      description: t.projects.items.figgo.description,
      longDescription: t.projects.items.figgo.longDescription,
      region: t.projects.items.figgo.region,
      platforms: t.projects.items.figgo.platforms,
      highlights: t.projects.items.figgo.highlights,
      themeColor: "#E17055",
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 5 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const cardContent = (
              <>
                {/* Device/Project Visual Graphic Frame */}
                <div className="relative w-full h-36 sm:h-40 bg-slate-900 overflow-hidden rounded-t-2xl border-b border-gray-100 flex items-center justify-center select-none">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-md bg-blue-100/70 text-[#0062ff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0062ff] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        {project.url && (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0062ff] transition-colors shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Metadata: Region and Platforms */}
                  <div className="pt-4 border-t border-gray-200/60 space-y-3 text-xs">
                    <div>
                      <span className="text-gray-400 font-medium block">
                        {t.projects.regionLabel}
                      </span>
                      <span className="text-gray-900 font-bold text-sm">{project.region}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 font-medium block">
                        {t.projects.platformsLabel}
                      </span>
                      <div className="flex items-center space-x-3 text-gray-800 font-semibold text-xs mt-0.5">
                        {project.platforms.map((plat) => (
                          <span key={plat}>{plat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );

            return project.url ? (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f8f9fb] rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group cursor-pointer"
                title={`${project.title} (abrir em nova aba)`}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={project.id}
                className="bg-[#f8f9fb] rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 group cursor-default"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
