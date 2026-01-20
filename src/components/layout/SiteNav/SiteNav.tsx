import { Locale, localeNames } from "@/i18n.config";
import { useTranslations } from "next-intl";
import NavMobile from "./NavMobile/NavMobile";
import { filterNavByLocale, getNavItems } from "./nav.config";
import NavDesktop from "./NavDesktop/NavDesktop";

export type SiteNavProps = {
  locale: Locale;
  availableLocales?: {
    locale: Locale;
    href: string;
  }[];
};

export default function SiteNav({ locale, availableLocales }: SiteNavProps) {
  const t = useTranslations("SiteNav");
  const filteredNavItems = filterNavByLocale(getNavItems(t), locale);
  const homepageHref = locale === localeNames.pt ? "/" : `/${locale}`;

  return (
    <nav className="sticky top-0 z-40 flex w-full flex-col items-center justify-center transition-colors duration-default ease-in-out bg-slate-100 border-b border-slate-200">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <NavDesktop
          homepageHref={homepageHref}
          filteredNavItems={filteredNavItems}
          availableLocales={availableLocales}
        />
        <NavMobile
          homepageHref={homepageHref}
          filteredNavItems={filteredNavItems}
          availableLocales={availableLocales}
        />
      </div>
    </nav>
  );
}
