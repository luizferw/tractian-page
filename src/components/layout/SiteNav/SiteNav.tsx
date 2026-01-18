import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button/Button";
import { Locale, localeNames } from "@/i18n.config";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import SwitchLanguageButton from "./SwitchLanguageButton";
import MenuIcon from "@/components/icons/MenuIcon";
import SwitchLanguageIcon from "@/components/icons/SwitchLanguageIcon";
import NavMobile from "./NavMobile";

export type SiteNavProps = {
  locale: Locale;
  availableLocales?: {
    locale: Locale;
    href: string;
  }[];
};

export default function SiteNav({ locale, availableLocales }: SiteNavProps) {
  const t = useTranslations("SiteNav");

  const homepageHref = locale === localeNames.pt ? "/" : `/${locale}`;

  return (
    <nav className="sticky top-0 z-40 flex w-full flex-col items-center justify-center transition-colors duration-default ease-in-out bg-slate-100 border-b border-slate-200">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <section className="flex items-center gap-x-4">
            <figure className="fill-blue-600">
              <a aria-label="Tractian Logo" href={homepageHref}>
                <Logo />
              </a>
            </figure>
            <div className="flex h-[72px] items-center">
              <section className="flex h-full items-center pl-4 xl:pl-8">
                <div className="group flex cursor-pointer items-center gap-x-2">
                  <p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                    {t("solutions")}
                  </p>
                  <ChevronDownIcon />
                </div>
              </section>
              <section className="flex h-full items-center pl-4 xl:pl-8">
                <div className="group flex cursor-pointer items-center gap-x-2">
                  <p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                    {t("whoWeServe")}
                  </p>
                  <ChevronDownIcon />
                </div>
              </section>
              <section className="flex h-full items-center pl-4 xl:pl-8">
                <div className="group flex cursor-pointer items-center gap-x-2">
                  <p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                    {t("resources")}
                  </p>
                  <ChevronDownIcon />
                </div>
              </section>
              <section className="flex h-full items-center pl-4 xl:pl-8">
                <div className="group flex cursor-pointer items-center gap-x-2">
                  <p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                    {t("company")}
                  </p>
                  <ChevronDownIcon />
                </div>
              </section>
              <section className="flex h-full items-center pl-4 xl:pl-8">
                <div className="group flex cursor-pointer items-center gap-x-2">
                  <p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                    {t("pricing")}
                  </p>
                  <ChevronDownIcon />
                </div>
              </section>
            </div>
          </section>
          <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            {!!availableLocales?.length && (
              <NextIntlClientProvider>
                <SwitchLanguageButton availableLocales={availableLocales} />
              </NextIntlClientProvider>
            )}
            <a
              className="block text-center text-body-md lg:hidden xl:block font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 "
              href="https://app.tractian.com"
              target="_blank"
            >
              Login
            </a>
            <Button variant={"outline"}>{t("getDemo")}</Button>
          </section>
        </div>
        <div className="w-full overflow-hidden lg:hidden">
          <div className="flex w-full items-center justify-between">
            <figure className="fill-blue-600">
              <a aria-label="Tractian Logo" href={homepageHref}>
                <Logo />
              </a>
            </figure>
            <figure className="flex items-center justify-center">
              <NextIntlClientProvider>
                <NavMobile availableLocales={availableLocales} />
              </NextIntlClientProvider>
            </figure>
          </div>
        </div>
      </div>
    </nav>
  );
}
