import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

/** Each service has a page per language; the card links to the one for the active language. */
const SERVICE_PATHS = {
  bookkeeping: { en: "/services/bookkeeping", es: "/es/servicios/contabilidad" },
  payroll:     { en: "/services/payroll",     es: "/es/servicios/nomina" },
  cleanup:     { en: "/services/cleanup",     es: "/es/servicios/regularizacion" },
  taxes:       { en: "/taxes/",               es: "/es/impuestos/" },
  advisory:    { en: "/services/advisory",    es: "/es/servicios/asesoria" },
} as const;

const keys = ["bookkeeping", "payroll", "cleanup", "taxes", "advisory"] as const;

export default function Services() {
  const { t, lang } = useI18n();
  const c = useContent();
  return (
    <section id="services" className="pcg-band-plain">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="pcg-label">{t.services.title}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((k) => (
            <a key={k} href={SERVICE_PATHS[k][lang]} className="pcg-card">
              <span className="pcg-card-title block mb-2">{t.services.cards[k].title}</span>
              <span className="pcg-card-body block">{c.services[k]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
