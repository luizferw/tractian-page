export const locales = ['en', 'pt', 'es'] as const;
export const localeNames: Record<string, Locale> = {
  en: "en",
  pt: "pt",
  es: "es",
};

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = localeNames.pt;

export const COOKIE_LOCALE_KEY = 'NEXT_LOCALE' as const;

