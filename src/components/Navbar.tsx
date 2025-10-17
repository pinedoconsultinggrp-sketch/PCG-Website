import React, { useState } from "react";
import { useI18n } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg" aria-label={BRAND.name}>
          {BRAND.name}
        </a>
        <button
          className="md:hidden p-2 border rounded"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="/#home" className="hover:opacity-80">{t.nav.home}</a></li>
          <li><a href="/#services" className="hover:opacity-80">{t.nav.services}</a></li>
          <li><a href="/#pricing" className="hover:opacity-80">{t.nav.pricing}</a></li>
          <li><a href="/#about" className="hover:opacity-80">{t.nav.about}</a></li>
          <li><a href="/#contact" className="hover:opacity-80">{t.nav.contact}</a></li>
          <li>
            <button
              className="rounded px-3 py-1 border hover:bg-gray-50"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              aria-label="Change language"
            >
              {t.nav.lang}
            </button>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-4 py-2 space-y-2">
            <li><a href="/#home" onClick={() => setOpen(false)}>{t.nav.home}</a></li>
            <li><a href="/#services" onClick={() => setOpen(false)}>{t.nav.services}</a></li>
            <li><a href="/#pricing" onClick={() => setOpen(false)}>{t.nav.pricing}</a></li>
            <li><a href="/#about" onClick={() => setOpen(false)}>{t.nav.about}</a></li>
            <li><a href="/#contact" onClick={() => setOpen(false)}>{t.nav.contact}</a></li>
            <li>
              <button
                className="rounded px-3 py-1 border"
                onClick={() => { setLang(lang === "en" ? "es" : "en"); setOpen(false); }}
              >
                {t.nav.lang}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
