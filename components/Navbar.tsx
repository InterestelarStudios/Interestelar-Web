"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isPortfolioPage = pathname === "/portfolio";
  const [activeTab, setActiveTab] = useState<string>(isPortfolioPage ? "projetos" : "home");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isPortfolioPage) {
      setActiveTab("projetos");
    }
  }, [isPortfolioPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isPortfolioPage) return;

      // Determine active section based on scroll position on home page
      const sections = ["contato", "solucoes", "processo", "servicos"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveTab(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveTab("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPortfolioPage]);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "servicos", label: t.navbar.services, href: isPortfolioPage ? "/#servicos" : "#servicos" },
    { id: "solucoes", label: t.navbar.resources, href: isPortfolioPage ? "/#solucoes" : "#solucoes" },
    { id: "processo", label: t.navbar.howWeWork, href: isPortfolioPage ? "/#processo" : "#processo" },
    { id: "projetos", label: t.navbar.projects, href: "/portfolio" },
    { id: "contato", label: t.navbar.contact, href: isPortfolioPage ? "/#contato" : "#contato" },
  ];

  const languageOptions: { code: Language; flagImg: string; label: string }[] = [
    { code: "pt", flagImg: "/assets/br.png", label: "Português" },
    { code: "es", flagImg: "/assets/es.png", label: "Español" },
    { code: "en", flagImg: "/assets/en.png", label: "English" },
  ];

  const currentFlagImg =
    language === "pt"
      ? "/assets/br.png"
      : language === "es"
        ? "/assets/es.png"
        : "/assets/en.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#06070c]/90 backdrop-blur-xl py-3 border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#06070c]/70 backdrop-blur-md py-4 border-b border-white/[0.04]"
        }`}
    >
      {/* Subtle dual spotlight cone origins behind navbar */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-4 w-full max-w-4xl h-16 pointer-events-none flex justify-center space-x-24 opacity-80 overflow-visible">
        <div className="w-56 h-36 bg-purple-600/25 blur-3xl rounded-full" />
        <div className="w-56 h-36 bg-indigo-600/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        {/* Brand Logo with cosmic infinity touch */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-7 w-36 sm:w-44 transition-all duration-200 group-hover:drop-shadow-[0_0_12px_rgba(0,98,255,0.6)]">
            <Image
              src="/assets/InterestelarWithoutStudioWhiteVector.png"
              alt="Interestelar Studios"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with active glow underline */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 flex flex-col items-center group ${isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
              >
                <span>{item.label}</span>
                {/* Active Indicator Underline (Neon Purple & Blue as in reference) */}
                {isActive && (
                  <span className="absolute -bottom-1 w-6 h-[2.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full shadow-[0_0_12px_#818cf8]" />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 w-0 group-hover:w-4 h-[2px] bg-white/40 rounded-full transition-all duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Language Selector & Neon CTA Button */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-medium text-gray-200 hover:text-white transition-all"
              aria-label="Selecionar Idioma"
            >
              <img
                src={currentFlagImg}
                alt={language}
                className="w-4 h-3 object-cover rounded-[2px] border border-white/20 shadow-xs"
              />
              <span className="uppercase text-xs font-semibold tracking-wider">
                {language}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#0c0d15] border border-white/15 rounded-xl shadow-2xl py-1 text-xs text-gray-200 z-50 backdrop-blur-xl animate-in fade-in duration-150">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center space-x-2.5 hover:bg-white/10 transition-colors ${language === opt.code ? "text-purple-400 font-bold bg-white/5" : ""
                      }`}
                  >
                    <img
                      src={opt.flagImg}
                      alt={opt.label}
                      className="w-4 h-3 object-cover rounded-[2px] border border-white/20 shadow-xs"
                    />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Neon Quote Button (Exclusive Neon Purple + Blue in AppBar as requested) */}
          <button
            onClick={onOpenContact}
            className="btn-navbar-neon inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold tracking-tight text-white hover:scale-[1.03] active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>{t.navbar.quoteBtn}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 focus:outline-none rounded-lg bg-white/5 border border-white/10"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b12] border-b border-white/10 px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium tracking-wide py-1.5 transition-colors ${activeTab === item.id ? "text-purple-400 font-bold" : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <span className="text-gray-400 font-medium">Idioma:</span>
              <div className="flex items-center space-x-2">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                    }}
                    className={`px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center space-x-2 ${language === opt.code
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-md shadow-purple-500/20"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                  >
                    <img
                      src={opt.flagImg}
                      alt={opt.label}
                      className="w-4 h-3 object-cover rounded-[2px] border border-white/20 shadow-xs"
                    />
                    <span className="uppercase">{opt.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="btn-navbar-neon w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold py-3 rounded-lg text-white"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{t.navbar.quoteBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

