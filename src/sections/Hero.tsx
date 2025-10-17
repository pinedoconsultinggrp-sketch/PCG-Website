import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";
import { BRAND } from "../config/branding";

export default function Hero() {
  const { t } = useI18n();
  const c = useContent();
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{c.hero.headline}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">{c.hero.subhead}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="rounded-2xl px-5 py-3 text-white text-center" style={{ backgroundColor: BRAND.primaryHex }}>{t.hero.ctaPrimary}</a>
          <a href="#contact" className="rounded-2xl px-5 py-3 border text-center">{t.hero.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}
