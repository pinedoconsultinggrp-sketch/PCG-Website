import React, { useState } from "react";
import { useI18n, HOME } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Navbar() {
  const { t, lang, base } = useI18n();
  const [open, setOpen] = useState(false);

  const other = lang === "en" ? "es" : "en";
  const otherHref = HOME[other];

  const links = [
    { href: `${base}#home`, label: t.nav.home },
    { href: `${base}#services`, label: t.nav.services },
    { href: `${base}#pricing`, label: t.nav.pricing },
    { href: `${base}#about`, label: t.nav.about },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href={base} className="font-semibold text-lg" aria-label={BRAND.name}>
          {BRAND.name}
        </a>
        <button
          className="md:hidden p-2 border rounded"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:opacity-80">{l.label}</a></li>
          ))}
          <li>
            <a
              href={otherHref}
              hrefLang={other}
              rel="alternate"
              className="rounded px-3 py-1 border hover:bg-gray-50 inline-block"
            >
              {t.nav.lang}
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-4 py-2 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={otherHref} hrefLang={other} rel="alternate"
                 className="rounded px-3 py-1 border inline-block">
                {t.nav.lang}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
