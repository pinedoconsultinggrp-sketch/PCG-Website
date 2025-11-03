import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.contact.title}</h2>

        <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thank-you"
  className="mt-6 grid gap-4 md:grid-cols-2"
>
  {/* Required by Netlify to identify the form */}
  <input type="hidden" name="form-name" value="contact" />

  {/* Honeypot field (invisible to humans, blocks spam bots) */}
  <p className="hidden">
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>

  <input
    name="name"
    required
    placeholder={t.contact.name}
    className="border p-3 rounded-2xl"
  />
  <input
    name="email"
    required
    type="email"
    placeholder={t.contact.email}
    className="border p-3 rounded-2xl"
  />
  <input
    name="phone"
    placeholder={t.contact.phone}
    className="border p-3 rounded-2xl md:col-span-2"
  />
  <input
    name="business"
    placeholder={t.contact.business}
    className="border p-3 rounded-2xl md:col-span-2"
  />
  <textarea
    name="message"
    placeholder={t.contact.message}
    className="border p-3 rounded-2xl md:col-span-2"
    rows={5}
  />
  <button
    type="submit"
    className="rounded-2xl px-5 py-3 text-white md:col-span-2"
    style={{ backgroundColor: "#0EA5A7" }}
  >
    {t.contact.send}
  </button>
</form>

      </div>
    </section>
  );
}

