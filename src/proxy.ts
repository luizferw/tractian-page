import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { COOKIE_LOCALE_KEY, localeNames, type Locale } from "@/i18n.config";
import { hasLocale } from "next-intl";

function detectLocaleFromAcceptLanguage(req: NextRequest): Locale {
  const header = req.headers.get("accept-language");
  if (!header) return routing.defaultLocale;

  const first = header.split(",")[0]?.trim().toLowerCase();
  const base = first?.split("-")[0] as Locale | undefined;

  return hasLocale(routing.locales, base) ? base : routing.defaultLocale;
}

function setLocaleCookie(res: NextResponse, locale: Locale) {
  res.cookies.set(COOKIE_LOCALE_KEY, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30 * 6, // 6 months
  });
}

const handleLocaleDetectionAndCookieSetup = (
  res: NextResponse,
  req: NextRequest,
) => {
  const currentCookieLocale = req.cookies.get(COOKIE_LOCALE_KEY);
  
  if (currentCookieLocale) {
    return;
  }
  
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/en") && !pathname.startsWith("/es")) {
    setLocaleCookie(res, routing.defaultLocale);
  }

  if (pathname === "/") {
    const locale = detectLocaleFromAcceptLanguage(req);
    setLocaleCookie(res, locale);
  }

  if (pathname.startsWith("/en")) {
    setLocaleCookie(res, localeNames.en);
  }

  if (pathname.startsWith("/es")) {
    setLocaleCookie(res, localeNames.es);
  }
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const res = intlMiddleware(req) as NextResponse;

  handleLocaleDetectionAndCookieSetup(res, req);

  return res;
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
