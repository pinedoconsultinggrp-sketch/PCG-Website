import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function Hero() {
  const { t } = useI18n();
  const c = useContent();
  return (
    <section id="home" className="pcg-hero">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-bold max-w-[16ch]">{c.hero.headline}</h1>
        <p className="lede mt-5 text-lg md:text-xl max-w-[46ch]">{c.hero.subhead}</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="pcg-btn">{t.hero.ctaPrimary}</a>
          <a href="#contact" className="pcg-btn-ghost">{t.hero.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}
