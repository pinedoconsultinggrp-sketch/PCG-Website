import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function Pricing() {
  const { t } = useI18n();
  const c = useContent();
  const keys = ["starter", "growth", "pro"] as const;
  return (
    <section id="pricing" className="pcg-band-mist">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="pcg-label">{t.pricing.title}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {keys.map((k) => (
            <div key={k} className="pcg-tier">
              <div className="pcg-tier-name">{c.pricing[k].label}</div>
              <div className="pcg-tier-price mt-2">{c.pricing[k].price}</div>
              <ul className="mt-5 space-y-2">
                {c.pricing[k].features.map((f: string) => (
                  <li key={f} className="pcg-tier-feature">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
