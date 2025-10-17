import React from "react";
import { useI18n } from "../i18n/useI18n";
import { BRAND } from "../config/branding";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">{BRAND.name}</div>
          <div className="text-gray-600">{BRAND.city}</div>
          <div className="mt-2"><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
          <div className="mt-1"><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></div>
        </div>
        <div>
          <div className="font-semibold mb-2">Links</div>
          <ul className="space-y-1">
            <li><a href="/#services">Services</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
