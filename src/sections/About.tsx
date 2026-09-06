import React from "react";
import { useI18n } from "../i18n/useI18n";
import { useContent } from "../content";

export default function About() {
  const { t } = useI18n();
  const c = useContent();
  return (
    <section id="about" className="pcg-band-plain">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="pcg-label">{t.about.title}</p>
        <p className="pcg-prose mt-5 max-w-[62ch]">{c.about}</p>
      </div>
    </section>
  );
}
