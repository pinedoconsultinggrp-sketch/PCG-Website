import React from "react";
import { useI18n } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Footer() {
  const { t, base, legal } = useI18n();
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">{BRAND.name}</div>
          <div className="text-gray-600">{BRAND.city}</div>
          <div className="mt-2"><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
          <div className="mt-1"><a href={`tel:${BRAND.phoneHref}`}>{BRAND.phone}</a></div>
        </div>
        <div>
          <div className="font-semibold mb-2">{t.footer.links}</div>
          <ul className="space-y-1">
            <li><a href={`${base}#services`}>{t.nav.services}</a></li>
            <li><a href={`${base}#pricing`}>{t.nav.pricing}</a></li>
            <li><a href={`${base}#about`}>{t.nav.about}</a></li>
            <li><a href={`${base}#contact`}>{t.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">{t.footer.legal}</div>
          <ul className="space-y-1">
            <li><a href={legal.privacy}>{t.footer.privacy}</a></li>
            <li><a href={legal.terms}>{t.footer.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
