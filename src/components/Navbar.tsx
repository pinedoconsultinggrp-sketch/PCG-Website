import React, { useState } from "react";
import { useI18n, HOME } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Navbar() {
  const { t, lang, base } = useI18n();
  const [open, setOpen] = useState(false);

  const other = lang === "en" ? "es" : "en";
  const otherHref = HOME[other];

  const TAXES = { en: "/taxes/", es: "/es/impuestos/" } as const;

  const links = [
    { href: `${base}#home`, label: t.nav.home },
    { href: `${base}#services`, label: t.nav.services },
    { href: TAXES[lang], label: t.nav.taxes },
    { href: `${base}#pricing`, label: t.nav.pricing },
    { href: `${base}#about`, label: t.nav.about },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="pcg-header sticky top-0 z-40">
      <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <a href={base} className="pcg-brand text-lg" aria-label={BRAND.name}>
          {BRAND.name}
        </a>
        <button
          className="md:hidden pcg-lang"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-7 items-center">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="pcg-navlink">{l.label}</a></li>
          ))}
          <li>
            <a href={otherHref} hrefLang={other} rel="alternate" className="pcg-lang inline-block">
              {t.nav.lang}
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--pcg-line)", background: "var(--pcg-bg)" }}>
          <ul className="px-5 py-3 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="pcg-navlink" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={otherHref} hrefLang={other} rel="alternate" className="pcg-lang inline-block">
                {t.nav.lang}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
