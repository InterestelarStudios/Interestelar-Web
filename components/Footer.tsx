"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#05060a] text-gray-400 pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Main Footer Grid: 3 Rich Columns */}
        <ScrollReveal direction="up" distance={20} duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            {/* Column 1 (span 5): Brand, Inspirational Text & Legal Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative h-8 w-56">
                <Image
                  src="/assets/InterestelarWithoutStudioWhiteVector.png"
                  alt="Interestelar Studios"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Inspirational Text */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                {t.footer.tagline}
              </p>

              {/* Legal & Corporate Badges */}
              <div className="space-y-2 pt-2 text-xs text-gray-400 border-t border-white/[0.06]">
                <div className="flex items-center space-x-2 text-gray-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{t.footer.companyName}</span>
                </div>
                <p className="font-mono text-gray-400 pl-6">
                  {t.footer.cnpj}
                </p>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{t.footer.location}</span>
                </div>
              </div>
            </div>

            {/* Column 2 (span 3): Quick Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
                <span>{t.footer.navTitle}</span>
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>Home</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/#servicos" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{t.navbar.services}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/#solucoes" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{t.navbar.resources}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/#processo" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{t.navbar.howWeWork}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{t.navbar.projects}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 (span 4): International Phone & Emails */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#38bdf8]" />
                <span>{t.footer.contactTitle}</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Telefone Brasil */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/30 transition-colors">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide flex items-center space-x-1.5">
                    <span>🇧🇷</span>
                    <span>{t.footer.phoneBrLabel}</span>
                  </div>
                  <a
                    href="https://wa.me/5592993836144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 font-mono font-medium text-xs sm:text-sm transition-colors mt-1 inline-flex items-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span>+55 92 99383-6144</span>
                  </a>
                </div>

                {/* Telefone União Europeia */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-colors">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide flex items-center space-x-1.5">
                    <span>🇪🇺</span>
                    <span>{t.footer.phoneEuLabel}</span>
                  </div>
                  <a
                    href="tel:+34634611272"
                    className="text-white hover:text-blue-400 font-mono font-medium text-xs sm:text-sm transition-colors mt-1 inline-flex items-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>+34 634 61 12 72</span>
                  </a>
                </div>

                {/* E-mails de Atendimento */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">
                      {t.footer.emailCustomerLabel}:
                    </span>
                    <a
                      href="mailto:customer@interestelar.studio"
                      className="text-white hover:text-purple-400 font-mono text-xs sm:text-sm transition-colors inline-flex items-center space-x-1.5 mt-0.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      <span>customer@interestelar.studio</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-white/[0.05]">
                    <span className="text-[11px] text-gray-400 font-medium block">
                      {t.footer.emailSupportLabel}:
                    </span>
                    <a
                      href="mailto:support@interestelar.studio"
                      className="text-white hover:text-blue-400 font-mono text-xs sm:text-sm transition-colors inline-flex items-center space-x-1.5 mt-0.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>support@interestelar.studio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar: Divider, Copyright & Social Links */}
        <ScrollReveal direction="up" delay={150} distance={15} duration={600}>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-xs text-gray-400 text-center sm:text-left">
              © {currentYear} Interestelar Studios. {t.footer.rightsReserved}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-5 text-gray-400">
              <a
                href="https://www.instagram.com/interestelarstd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 hover:scale-110 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="http://wa.me/5592993836144"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-emerald-400 hover:scale-110 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Interestelar-Studios/100071792916058/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 hover:scale-110 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Interestelarstd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 hover:scale-110 transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/100073674/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
