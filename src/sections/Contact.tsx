import React from "react";
import { useI18n } from "../i18n/useI18n";

export default function Contact() {
  const { t, lang } = useI18n();

  const isSpanishByLang = String(lang || "").toLowerCase().startsWith("es");
  const isSpanishByText = String(t?.contact?.title || "").toLowerCase().includes("contacto");
  const isSpanish = isSpanishByLang || isSpanishByText;

  const formName = isSpanish ? "contact-es" : "contact";
  const successUrl = isSpanish ? "/gracias" : "/thank-you";

  return (
    <section id="contact" className="pcg-band-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="pcg-label">{t.contact.title}</p>

        <form
          name={formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action={successUrl}
          className="mt-6 grid gap-4 md:grid-cols-2 max-w-3xl"
        >
          <input type="hidden" name="form-name" value={formName} />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div>
            <label htmlFor="contact-name" className="sr-only">{t.contact.name}</label>
            <input id="contact-name" name="name" required autoComplete="name"
                   placeholder={t.contact.name} className="pcg-field" />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">{t.contact.email}</label>
            <input id="contact-email" name="email" required type="email" autoComplete="email"
                   placeholder={t.contact.email} className="pcg-field" />
          </div>

          <div>
            <label htmlFor="contact-phone" className="sr-only">{t.contact.phone}</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel"
                   placeholder={t.contact.phone} className="pcg-field" />
          </div>

          <div>
            <label htmlFor="contact-business" className="sr-only">{t.contact.business}</label>
            <input id="contact-business" name="business" autoComplete="organization"
                   placeholder={t.contact.business} className="pcg-field" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="sr-only">{t.contact.message}</label>
            <textarea id="contact-message" name="message" rows={5}
                      placeholder={t.contact.message} className="pcg-field" />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="pcg-btn">{t.contact.send}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
