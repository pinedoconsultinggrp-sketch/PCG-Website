import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import es from "./es.json";

type Lang = "en" | "es";
type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, es };

/** Each language has its own entry point: "/" is English, "/es/" is Spanish. */
export const HOME: Record<Lang, string> = { en: "/", es: "/es/" };
export const LEGAL: Record<Lang, { privacy: string; terms: string }> = {
  en: { privacy: "/privacy", terms: "/terms" },
  es: { privacy: "/es/privacidad", terms: "/es/terminos" },
};

/**
 * The URL decides the language. Each entry point ships its own <html lang>, so the
 * first paint is already correct and a crawler gets a distinct page per language.
 * A stored preference is only a fallback for anything served without a lang.
 */
function detectLang(): Lang {
  const docLang = (document.documentElement.lang || "").toLowerCase();
  if (docLang.startsWith("es")) return "es";
  if (docLang.startsWith("en")) return "en";
  if (location.pathname.startsWith("/es")) return "es";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  return "en";
}

const I18nCtx = createContext<{
  t: Dict;
  lang: Lang;
  base: string;
  legal: { privacy: string; terms: string };
  setLang: (l: Lang) => void;
}>({ t: en, lang: "en", base: "/", legal: LEGAL.en, setLang: () => {} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ t: dicts[lang], lang, base: HOME[lang], legal: LEGAL[lang], setLang }),
    [lang]
  );
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() { return useContext(I18nCtx); }
