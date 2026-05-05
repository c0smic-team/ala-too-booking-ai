import * as React from "react";
import { DICTS, type Lang, detectLang } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof DICTS)["ru"];
};

const LangContext = React.createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("ru");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setLangState(detectLang());
    setMounted(true);
  }, []);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    if (typeof localStorage !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  React.useEffect(() => {
    if (mounted && typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang, mounted]);

  const value = React.useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
