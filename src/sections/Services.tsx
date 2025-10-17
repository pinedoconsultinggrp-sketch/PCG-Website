import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function Services() {
  const { t } = useI18n();
  const c = useContent();
  const keys = ["bookkeeping","payroll","cleanup","jobcost","taxes","advisory"] as const;
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.services.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((k)=> (
            <div key={k} className="rounded-2xl border p-5 bg-white">
              <div className="font-medium">{t.services.cards[k].title}</div>
              <p className="text-sm text-gray-600 mt-2">{c.services[k]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
