import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import es from "./es.json";

type Lang = "en" | "es";
type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, es };

const I18nCtx = createContext<{ t: Dict; lang: Lang; setLang: (l: Lang) => void }>({
  t: en, lang: "en", setLang: () => {}
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  const value = useMemo(() => ({ t: dicts[lang], lang, setLang }), [lang]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() { return useContext(I18nCtx); }
