import React from "react";
import { useI18n } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Footer() {
  const { t, base, legal } = useI18n();
  return (
    <footer className="pcg-footer">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-8 md:grid-cols-3">
        <div>
          <div className="pcg-footer-head text-lg">{BRAND.name}</div>
          <div className="mt-1" style={{ color: "var(--pcg-ink-soft)" }}>{BRAND.city}</div>
          <div className="mt-3"><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
          <div className="mt-1"><a href={`tel:${BRAND.phoneHref}`}>{BRAND.phone}</a></div>
        </div>
        <div>
          <div className="pcg-label mb-3">{t.footer.links}</div>
          <ul className="space-y-2">
            <li><a href={`${base}#services`}>{t.nav.services}</a></li>
            <li><a href={base === "/" ? "/taxes/" : "/es/impuestos/"}>{t.nav.taxes}</a></li>
            <li><a href={`${base}#pricing`}>{t.nav.pricing}</a></li>
            <li><a href={`${base}#about`}>{t.nav.about}</a></li>
            <li><a href={`${base}#contact`}>{t.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <div className="pcg-label mb-3">{t.footer.legal}</div>
          <ul className="space-y-2">
            <li><a href={legal.privacy}>{t.footer.privacy}</a></li>
            <li><a href={legal.terms}>{t.footer.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-5"
           style={{ color: "var(--pcg-ink-soft)", borderTop: "1px solid var(--pcg-line)" }}>
        © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
