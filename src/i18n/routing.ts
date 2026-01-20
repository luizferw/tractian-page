import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale, COOKIE_LOCALE_KEY } from "@/i18n.config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
  localeCookie: {
    name: COOKIE_LOCALE_KEY,
    maxAge: 60 * 60 * 24 * 30 * 6, // 6 months
  },
});
