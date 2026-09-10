"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#07080a] text-gray-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Logo */}
          <div className="relative h-8 w-56">
            <Image
              src="/assets/InterestelarWithoutStudioWhiteVector.png"
              alt="Interestelar Studios"
              fill
              className="object-contain"
            />
          </div>

          {/* Legal / Corporate Info */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-gray-200 font-semibold tracking-wide">
              {t.footer.companyName}
            </p>
            <p className="text-gray-400 font-mono">
              {t.footer.cnpj}
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 inline text-blue-400" />
              {t.footer.location}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center sm:text-left">
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
      </div>
    </footer>
  );
}
