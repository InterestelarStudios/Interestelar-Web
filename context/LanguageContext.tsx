"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationSchema } from "@/lib/translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function detectUserLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  // 1. Check existing saved preference
  try {
    const saved = localStorage.getItem("interestelar_lang");
    if (saved === "pt" || saved === "en" || saved === "es") {
      return saved;
    }
  } catch (e) {
    // Ignore localStorage access issues
  }

  // 2. Check browser navigator languages
  const navLanguages: string[] = [];
  if (navigator.languages && navigator.languages.length > 0) {
    navLanguages.push(...navigator.languages);
  }
  if (navigator.language) {
    navLanguages.push(navigator.language);
  }

  for (const lang of navLanguages) {
    const lower = lang.toLowerCase();
    if (lower.startsWith("pt")) {
      return "pt";
    }
    if (lower.startsWith("es")) {
      return "es";
    }
  }

  // 3. Optional TimeZone heuristic check for PT / ES regions
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    // Brazil / Portugal timezones
    if (
      timeZone.includes("sao_paulo") ||
      timeZone.includes("lisbon") ||
      timeZone.includes("manaus") ||
      timeZone.includes("fortaleza") ||
      timeZone.includes("recife") ||
      timeZone.includes("belem") ||
      timeZone.includes("rio_branco") ||
      timeZone.includes("porto_velho") ||
      timeZone.includes("cuiaba") ||
      timeZone.includes("campo_grande")
    ) {
      return "pt";
    }
    // Spain and Hispanic America timezones
    if (
      timeZone.includes("madrid") ||
      timeZone.includes("buenos_aires") ||
      timeZone.includes("bogota") ||
      timeZone.includes("mexico") ||
      timeZone.includes("santiago") ||
      timeZone.includes("lima") ||
      timeZone.includes("caracas") ||
      timeZone.includes("montevideo") ||
      timeZone.includes("asuncion") ||
      timeZone.includes("la_paz") ||
      timeZone.includes("havana") ||
      timeZone.includes("panama") ||
      timeZone.includes("costa_rica") ||
      timeZone.includes("guatemala")
    ) {
      return "es";
    }
  } catch (e) {
    // Ignore timezone detection errors
  }

  // 4. Default for all other regions
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detected = detectUserLanguage();
    setLanguageState(detected);
    setMounted(true);
    if (typeof document !== "undefined") {
      document.documentElement.lang = detected === "pt" ? "pt-BR" : detected === "es" ? "es-ES" : "en";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("interestelar_lang", lang);
    } catch (e) {
      // Ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "es" ? "es-ES" : "en";
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
