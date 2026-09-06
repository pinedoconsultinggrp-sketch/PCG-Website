import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

/** Each service has a page per language; the card links to the one for the active language. */
const SERVICE_PATHS = {
  bookkeeping: { en: "/services/bookkeeping", es: "/es/servicios/contabilidad" },
  payroll:     { en: "/services/payroll",     es: "/es/servicios/nomina" },
  cleanup:     { en: "/services/cleanup",     es: "/es/servicios/regularizacion" },
  taxes:       { en: "/services/taxes",       es: "/es/servicios/impuestos" },
  advisory:    { en: "/services/advisory",    es: "/es/servicios/asesoria" },
} as const;

const keys = ["bookkeeping", "payroll", "cleanup", "taxes", "advisory"] as const;

export default function Services() {
  const { t, lang } = useI18n();
  const c = useContent();
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.services.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((k) => (
            <a
              key={k}
              href={SERVICE_PATHS[k][lang]}
              className="rounded-2xl border p-5 bg-white block transition hover:shadow-md hover:border-gray-300"
            >
              <div className="font-medium">{t.services.cards[k].title}</div>
              <p className="text-sm text-gray-600 mt-2">{c.services[k]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
