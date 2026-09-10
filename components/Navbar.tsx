"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.navbar.services, href: "#servicos" },
    { label: t.navbar.projects, href: "#projetos" },
    { label: t.navbar.howWeWork, href: "#processo" },
    { label: t.navbar.resources, href: "#solucoes" },
    { label: t.navbar.contact, href: "#contato" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-[#0b0c10] py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="relative h-6 w-36 sm:w-44 sm:h-7 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/assets/InterestelarWithoutStudioWhiteVector.png"
              alt="Interestelar Studios"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] tracking-wider uppercase font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Selector & CTA */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-md hover:bg-white/10 text-xs font-semibold text-white transition-colors"
              aria-label="Selecionar Idioma"
            >
              <img
                src={currentFlagImg}
                alt={language}
                className="w-5 h-3.5 object-cover rounded-[3px] border border-white/20 shadow-xs"
              />
              <span className="uppercase text-xs text-gray-300 font-bold">
                {language}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#161820] border border-white/15 rounded-lg shadow-xl py-1 text-xs text-gray-200 z-50 animate-in fade-in duration-150">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center space-x-2.5 hover:bg-white/10 transition-colors ${
                      language === opt.code ? "text-blue-400 font-bold bg-white/5" : ""
                    }`}
                  >
                    <img
                      src={opt.flagImg}
                      alt={opt.label}
                      className="w-5 h-3.5 object-cover rounded-[3px] border border-white/20 shadow-xs"
                    />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenContact}
            className="text-xs font-semibold uppercase tracking-wider bg-[#0062ff] hover:bg-[#0052db] text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95"
          >
            {t.navbar.quoteBtn}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101217] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-gray-200 hover:text-blue-400 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <span className="text-gray-400">Idioma:</span>
              <div className="flex items-center space-x-2">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                    }}
                    className={`px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center space-x-2 ${
                      language === opt.code
                        ? "bg-[#0062ff] text-white font-bold"
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
              className="w-full text-center text-xs uppercase tracking-wider font-semibold bg-[#0062ff] text-white py-2.5 rounded-md"
            >
              {t.navbar.quoteBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
