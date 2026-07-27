export const locales = ["zh-tw", "en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-tw";

export const localeLabels: Record<Locale, string> = {
  "zh-tw": "繁中",
  en: "EN",
  ja: "日",
};

/** BCP-47 tag for <html lang> / hreflang, distinct from the URL segment. */
export const localeHtmlLang: Record<Locale, string> = {
  "zh-tw": "zh-TW",
  en: "en",
  ja: "ja",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}

/** Swaps the locale segment of the current path, keeping the rest of the path. */
export function localizedPath(locale: Locale, currentPath: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const withoutBase = currentPath.startsWith(base)
    ? currentPath.slice(base.length)
    : currentPath;
  const rest = withoutBase.replace(/^\/(zh-tw|en|ja)(\/|$)/, "/");
  const normalizedRest = rest === "/" ? "/" : rest.replace(/\/$/, "") + "/";
  return withBase(`/${locale}${normalizedRest}`);
}
