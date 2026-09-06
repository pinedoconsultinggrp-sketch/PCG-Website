import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function Contact() {
  const { t, lang } = useI18n();

  // Rock-solid Spanish detection (handles "es", "es-MX", "es-ES")
  const isSpanishByLang = String(lang || "").toLowerCase().startsWith("es");
  // Fallback: detect by translated title text (e.g., "Contacto")
  const isSpanishByText = String(t?.contact?.title || "")
    .toLowerCase()
    .includes("contacto");

  const isSpanish = isSpanishByLang || isSpanishByText;
  const formName = isSpanish ? "contact-es" : "contact";
  const successUrl = isSpanish ? "/gracias" : "/thank-you";

  const field = "border p-3 rounded-2xl w-full";

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.contact.title}</h2>

        <form
          name={formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action={successUrl}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <input type="hidden" name="form-name" value={formName} />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div>
            <label htmlFor="contact-name" className="sr-only">{t.contact.name}</label>
            <input id="contact-name" name="name" required autoComplete="name"
                   placeholder={t.contact.name} className={field} />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">{t.contact.email}</label>
            <input id="contact-email" name="email" required type="email" autoComplete="email"
                   placeholder={t.contact.email} className={field} />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-phone" className="sr-only">{t.contact.phone}</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel"
                   placeholder={t.contact.phone} className={field} />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-business" className="sr-only">{t.contact.business}</label>
            <input id="contact-business" name="business" autoComplete="organization"
                   placeholder={t.contact.business} className={field} />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="sr-only">{t.contact.message}</label>
            <textarea id="contact-message" name="message" rows={5}
                      placeholder={t.contact.message} className={field} />
          </div>

          <button type="submit" className="rounded-2xl px-5 py-3 text-white md:col-span-2"
                  style={{ backgroundColor: "#0EA5A7" }}>
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
