import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function Pricing() {
  const { t } = useI18n();
  const c = useContent();
  const keys = ["starter","growth","pro"] as const;
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.pricing.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {keys.map((k) => (
            <div key={k} className="rounded-2xl border p-6">
              <div className="text-lg font-medium">{c.pricing[k].label}</div>
              <div className="text-3xl font-bold mt-2">{c.pricing[k].price}</div>
              <ul className="mt-4 space-y-1 text-gray-600 text-sm">
                {c.pricing[k].features.map((f: string) => <li key={f}>• {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
