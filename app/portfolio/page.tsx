"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  Layers,
  Code2,
  Globe,
  Smartphone,
  Server,
  PenTool,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectModal, { ProjectDetail } from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { t } = useLanguage();

  const openContact = () => setContactModalOpen(true);
  const closeContact = () => setContactModalOpen(false);

  // Complete Projects List (Matching the main section and expanded)
  const projectsData: ProjectDetail[] = useMemo(() => [
    {
      id: "instrutor-em-casa",
      title: t.projects.items.instrutor.title,
      category: t.projects.items.instrutor.category,
      image: "/assets/instrutor-em-casa.jpg",
      url: "https://instrutoremcasa.com.br/",
      tags: ["Flutter", "Firebase", "Javascript", "Mobile"],
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
      tags: ["Flutter", "Firebase", "Kotlin", "Mobile"],
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
      tags: ["Flutter", "Firebase", "Javascript", "Mobile"],
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
      tags: ["Flutter", "Firebase", "Mobile"],
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
      tags: ["Next.JS", "Web", "Cloud"],
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
      tags: ["Next.Js", "Web", "Design"],
      description: t.projects.items.figgo.description,
      longDescription: t.projects.items.figgo.longDescription,
      region: t.projects.items.figgo.region,
      platforms: t.projects.items.figgo.platforms,
      highlights: t.projects.items.figgo.highlights,
      themeColor: "#E17055",
    },
  ], [t]);

  // Engineering Services data
  const servicesList = useMemo(() => [
    {
      title: t.services.cards.mobile.title,
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      tags: t.services.cards.mobile.tags,
      description: "Aplicativos móveis de alto desempenho com Flutter, Kotlin e Swift para iOS e Android com arquitetura escalável e design moderno.",
      glow: "hover:border-purple-500/40",
    },
    {
      title: t.services.cards.web.title,
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      tags: t.services.cards.web.tags,
      description: "Plataformas web responsivas, portais e sistemas corporativos construídos para velocidade, SEO e confiabilidade contínua.",
      glow: "hover:border-blue-500/40",
    },
    {
      title: t.services.cards.frontend.title,
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      tags: t.services.cards.frontend.tags,
      description: "Interfaces ricas, SPAs e PWAs desenvolvidas com Next.js, React e TypeScript garantindo experiências fluidas de alta conversão.",
      glow: "hover:border-cyan-500/40",
    },
    {
      title: t.services.cards.backend.title,
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      tags: t.services.cards.backend.tags,
      description: "Microsserviços resilientes, APIs RESTful / GraphQL e bancos de dados em nuvem com alta disponibilidade e segurança criptográfica.",
      glow: "hover:border-indigo-500/40",
    },
    {
      title: t.services.cards.design.title,
      icon: <PenTool className="w-5 h-5 text-purple-400" />,
      tags: t.services.cards.design.tags,
      description: "Design de produto ponta a ponta: wireframing, prototipação em Figma, design systems coesos e testes de usabilidade aprofundados.",
      glow: "hover:border-purple-500/40",
    },
    {
      title: t.services.cards.ecommerce.title,
      icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
      tags: t.services.cards.ecommerce.tags,
      description: "Soluções de comércio digital integradas com gateways de pagamento, controle de estoque em tempo real e automação logística.",
      glow: "hover:border-emerald-500/40",
    },
  ], [t]);

  // Filter logic
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    if (activeFilter === "mobile") {
      return projectsData.filter((p) =>
        p.tags.some((t) => ["Flutter", "Kotlin", "Mobile"].includes(t))
      );
    }
    if (activeFilter === "web") {
      return projectsData.filter((p) =>
        p.tags.some((t) => ["Next.JS", "Next.Js", "Web"].includes(t))
      );
    }
    if (activeFilter === "fullstack") {
      return projectsData.filter((p) =>
        p.tags.some((t) => ["Firebase", "Javascript", "Cloud"].includes(t))
      );
    }
    return projectsData;
  }, [activeFilter, projectsData]);

  return (
    <main className="min-h-screen bg-[#06070c] text-gray-100 selection:bg-purple-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenContact={openContact} />

      {/* 1. Portfolio Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-white/[0.08]">
        {/* Dynamic atmospheric spotlight glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home Link */}
          <ScrollReveal direction="down" distance={15} duration={500}>
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400/30"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{t.portfolioPage.backHome}</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Main Title & Subtitle */}
          <div className="max-w-4xl space-y-6">
            <ScrollReveal direction="up" delay={100} distance={25} duration={650}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold text-purple-400 tracking-wider uppercase shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.portfolioPage.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} distance={30} duration={700}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.12]">
                {t.portfolioPage.titleStart}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                  {t.portfolioPage.titleHighlight}
                </span>{" "}
                {t.portfolioPage.titleEnd}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} distance={25} duration={700}>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-normal">
                {t.portfolioPage.subtitle}
              </p>
            </ScrollReveal>

            {/* Quick Stats Pill Strip */}
            <ScrollReveal direction="up" delay={400} distance={25} duration={700}>
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="font-bold text-white">6+</span>
                  <span className="text-gray-400">{t.portfolioPage.statsProjects}</span>
                </div>
                <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                  <span className="font-bold text-white">100%</span>
                  <span className="text-gray-400">{t.portfolioPage.statsSatisfaction}</span>
                </div>
                <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                  <span className="font-bold text-white">Cross-Platform</span>
                  <span className="text-gray-400">{t.portfolioPage.statsTech}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Projects Showcase Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <ScrollReveal direction="left" distance={25} duration={600}>
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  PORTFÓLIO EM DESTAQUE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
                  Casos de Sucesso & Aplicações
                </h2>
              </div>
            </ScrollReveal>

            {/* Filter Pills */}
            <ScrollReveal direction="right" distance={25} duration={600}>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: t.portfolioPage.filterAll },
                  { id: "mobile", label: t.portfolioPage.filterMobile },
                  { id: "web", label: t.portfolioPage.filterWeb },
                  { id: "fullstack", label: t.portfolioPage.filterFullstack },
                ].map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/40 scale-105"
                          : "bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Projects Grid (Reusing the Exact Widgets) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const cardContent = (
                <>
                  {/* Device/Project Visual Graphic Frame */}
                  <div className="relative w-full h-48 sm:h-52 bg-[#090a14] overflow-hidden rounded-t-2xl border-b border-white/10 flex items-center justify-center select-none">
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
                        <div className="flex items-center space-x-2 text-gray-200 font-semibold text-xs mt-0.5">
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
                  delay={index * 80}
                  distance={30}
                  duration={600}
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
        </div>
      </section>

      {/* 3. Comprehensive Engineering Services Section */}
      <section id="servicos" className="py-24 bg-[#080910] border-t border-white/[0.06] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" distance={30} duration={650}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-400 font-semibold tracking-wide">
                <span>{t.portfolioPage.servicesSectionBadge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                {t.portfolioPage.servicesSectionTitle}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed font-normal">
                {t.portfolioPage.servicesSectionSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 100}
                distance={35}
                duration={650}
                className="h-full"
              >
                <div
                  className={`glass-cinematic-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full min-h-[300px] transition-all duration-300 group hover:-translate-y-1.5 ${service.glow}`}
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.1] transition-all shadow-md">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white whitespace-pre-line leading-tight group-hover:text-purple-400 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-6 flex flex-wrap gap-2 border-t border-white/[0.06]">
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

      {/* 4. Bottom Consultation & Proposal CTA */}
      <section className="py-24 bg-[#06070c] border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/15 to-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up" distance={30} duration={650}>
            <div className="glass-cinematic-card p-10 sm:p-14 rounded-3xl border border-white/15 space-y-6 shadow-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-blue-400 font-semibold tracking-wide">
                <span>INICIE SEU PRODUTO CONOSCO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                {t.portfolioPage.ctaTitle}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                {t.portfolioPage.ctaDesc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openContact}
                  className="btn-reference-primary group inline-flex items-center space-x-3 p-2 pr-7 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#fbbf24] flex items-center justify-center text-[#0b0c10] shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Calendar className="w-4 h-4 text-[#0b0c10]" />
                  </div>
                  <span className="text-white font-semibold">{t.portfolioPage.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  href="/"
                  className="btn-reference-secondary inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.portfolioPage.backHome}</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <a
        href="http://wa.me/5592993836144"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={openContact}
      />

      {/* Lead Generation & Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={closeContact} />
    </main>
  );
}
