import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interestelar Studios | Criamos Tecnologias que Tornam Sua Visão Realidade",
  description:
    "Transformamos suas ideias em aplicativos e sistemas inovadores. Especialistas em desenvolvimento multiplataforma, web, mobile e design de produtos em Manaus (Brasil) e para o mundo.",
  keywords: [
    "desenvolvimento de software",
    "aplicativos mobile",
    "flutter",
    "react native",
    "next.js",
    "manaus software",
    "interestelar studios",
    "desenvolvimento web",
    "design ui ux",
  ],
  authors: [{ name: "Interestelar Studios" }],
  openGraph: {
    title: "Interestelar Studios | Software House Especializada",
    description:
      "Criamos tecnologias que tornam sua visão realidade. Sistemas personalizados, mobile, web e alta confiabilidade.",
    url: "https://interestelarstudios.com",
    siteName: "Interestelar Studios",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/assets/fav.png",
    shortcut: "/assets/fav.png",
    apple: "/assets/fav.png",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/assets/fav.png" type="image/png" />
      </head>
      <body className="antialiased bg-[#0b0c10] text-gray-900 selection:bg-blue-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
