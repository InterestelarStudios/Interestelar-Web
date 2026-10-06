"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone, Mail, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "mobile",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `${t.contactModal.whatsappInitialMessage} (${formData.projectType}) - ${formData.name ? formData.name + ": " : ""}${formData.message || ""}`
    );
    window.open(`https://wa.me/5592993836144?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0b0c14] rounded-2xl shadow-2xl overflow-hidden border border-white/15 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white/[0.02] border-b border-white/10 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
            aria-label={t.contactModal.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
              {t.contactModal.badge}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {t.contactModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              {t.contactModal.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-purple-400/10 text-purple-400 rounded-full flex items-center justify-center mx-auto border border-purple-400/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t.contactModal.successTitle}
              </h4>
              <p className="text-sm text-gray-300 max-w-sm mx-auto">
                {t.contactModal.successDesc}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contactModal.whatsappTalkNow}</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-xs transition-all border border-white/10"
                >
                  {t.contactModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  {t.contactModal.nameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder={t.contactModal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    {t.contactModal.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder={t.contactModal.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    {t.contactModal.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder={t.contactModal.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  {t.contactModal.projectTypeLabel}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#11131c] border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white"
                >
                  <option value="mobile" className="bg-[#11131c]">{t.contactModal.options.mobile}</option>
                  <option value="web" className="bg-[#11131c]">{t.contactModal.options.web}</option>
                  <option value="ecommerce" className="bg-[#11131c]">{t.contactModal.options.ecommerce}</option>
                  <option value="design" className="bg-[#11131c]">{t.contactModal.options.design}</option>
                  <option value="backend" className="bg-[#11131c]">{t.contactModal.options.backend}</option>
                  <option value="consultoria" className="bg-[#11131c]">{t.contactModal.options.consulting}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  {t.contactModal.messageLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.contactModal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-reference-primary flex-1 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 text-white hover:border-purple-500/50"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{t.contactModal.submitBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contactModal.whatsappDirect}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

