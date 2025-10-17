import raw from "./content.json";
import { useI18n } from "./i18n/useI18n";
type Content = typeof raw;
export function useContent() {
  const { lang } = useI18n();
  const c = (raw as Content)[lang];
  return c;
}
