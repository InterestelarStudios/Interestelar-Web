"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectModal, { ProjectDetail } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

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
      url: "https://manhub.app/",
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
    <section id="projetos" className="py-24 bg-[#06070c] border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={30} duration={650}>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-400 font-semibold tracking-wide">
              <span>CASES DE SUCESSO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
              {t.projects.title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {projectsData.map((project, index) => {
            const cardContent = (
              <>
                {/* Device/Project Visual Graphic Frame */}
                <div className="relative w-full h-44 sm:h-48 bg-[#090a14] overflow-hidden rounded-t-2xl border-b border-white/10 flex items-center justify-center select-none">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b12] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors flex items-center justify-between tracking-tight">
                        <span>{project.title}</span>
                        {project.url && (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Metadata: Region and Platforms */}
                  <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                    <div>
                      <span className="text-gray-400 font-medium block">
                        {t.projects.regionLabel}
                      </span>
                      <span className="text-white font-bold text-sm">{project.region}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 font-medium block">
                        {t.projects.platformsLabel}
                      </span>
                      <div className="flex items-center space-x-3 text-gray-200 font-semibold text-xs mt-0.5">
                        {project.platforms.map((plat) => (
                          <span key={plat} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">{plat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={index * 100}
                distance={35}
                duration={650}
                className="h-full flex flex-col"
              >
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-cinematic-card rounded-2xl overflow-hidden flex flex-col justify-between flex-1 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1.5"
                    title={`${project.title} (abrir em nova aba)`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    className="glass-cinematic-card rounded-2xl overflow-hidden flex flex-col justify-between flex-1 hover:border-blue-500/40 transition-all duration-300 group cursor-default hover:-translate-y-1.5"
                  >
                    {cardContent}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="mt-14 flex justify-center">
          <ScrollReveal direction="up" delay={200} distance={20} duration={600}>
            <Link
              href="/portfolio"
              className="btn-reference-primary group inline-flex items-center space-x-3 p-2 pr-7 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#fbbf24] flex items-center justify-center text-[#0b0c10] shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 text-[#0b0c10]" />
              </div>
              <span className="text-white font-semibold">{t.projects.viewAll}</span>
            </Link>
          </ScrollReveal>
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
