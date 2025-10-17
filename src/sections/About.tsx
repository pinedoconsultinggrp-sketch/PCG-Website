import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function About() {
  const { t } = useI18n();
  const c = useContent();
  return (
    <section id="about" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.about.title}</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">{c.about}</p>
      </div>
    </section>
  )
}
