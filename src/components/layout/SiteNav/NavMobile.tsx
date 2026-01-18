"use client";

import BrazilianFlagIcon from "@/components/icons/BrazilianFlag";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import SpainFlagIcon from "@/components/icons/SpainFlag";
import SwitchLanguageIcon from "@/components/icons/SwitchLanguageIcon";
import USFlagIcon from "@/components/icons/USFlag";
import { Button } from "@/components/ui/Button/Button";
import { Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MenuItem = (label: string) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={label} className="w-full">
      <button
        aria-label="Open Navbar Button"
        className="flex w-full items-center !justify-between px-4 py-3 hover:brightness-125"
        onClick={() => setIsOpen((v) => !v)}
      >
        <p className="text-slate-500 text-body-md">{label}</p>
        <ChevronDownIcon
          data-isopen={isOpen}
          className="!size-4 data-[isopen=true]:-rotate-180"
        />
      </button>
    </div>
  );
};

const SwitchLanguageMenuItem = ({
  availableLocales,
}: {
  availableLocales: { locale: Locale; href: string }[];
}) => {
  const locale = useLocale();
  const tLanguages = useTranslations("Languages");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
        <Button
          onClick={() => setIsOpen((v) => !v)}
          variant={"ghost"}
          aria-label="Switch Language Button"
          className="group flex w-full items-center !justify-between gap-x-2 rounded-sm px-4 py-1 text-body-sm focus:outline-none lg:bg-transparent lg:bg-opacity-20 lg:px-2 lg:text-slate-50 xl:pl-3 xl:text-body-md hover:bg-transparent"
        >
          <div className="flex items-center gap-x-4">
            <figure>
              <SwitchLanguageIcon />
            </figure>
            <p className="font-medium text-slate-500 transition-all duration-150 text-body-sm group-hover:text-blue-600 lg:hidden">
              {tLanguages(locale)}
            </p>
          </div>
          <ChevronDownIcon
            data-isopen={isOpen}
            className="!size-4 data-[isopen=true]:-rotate-180"
          />
        </Button>
        {isOpen && (
          <div className="animate-[fadeIn_1s_both] mt-2 w-full px-4 lg:hidden">
            {availableLocales.map((localeItem) => {
              const FlagIcon = {
                pt: BrazilianFlagIcon,
                en: USFlagIcon,
                es: SpainFlagIcon,
              }[localeItem.locale];

              return (
                <Button
                  variant={"ghost"}
                  key={localeItem.locale}
                  data-active={locale === localeItem.locale}
                  className="data-[active=true]:bg-slate-200 flex w-full !justify-start items-center gap-x-4 !p-2 text-body-md lg:text-body-sm !hover:bg-slate-100"
                  aria-label="Select Language Button"
                  onClick={() => router.push(localeItem.href)}
                >
                  <figure>
                    <FlagIcon />
                  </figure>
                  <p className="text-slate-500 text-body-sm">
                    {tLanguages(localeItem.locale)}
                  </p>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default function NavMobile({
  availableLocales,
}: {
  availableLocales?: { locale: Locale; href: string }[];
}) {
  const t = useTranslations("SiteNav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="flex h-10 !w-10 items-center justify-center !p-0"
        variant={"ghost"}
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
      <div
        className="absolute top-[56px] z-[9999] bg-white transition-all duration-150"
        style={{
          height: "calc(-56px + 100dvh)",
          width: isOpen ? "100%" : 0,
          left: isOpen ? 0 : "100%",
          overflow: "hidden auto",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="pt-4">
          {[
            t("solutions"),
            t("whoWeServe"),
            t("resources"),
            t("company"),
            t("pricing"),
          ].map(MenuItem)}
          {availableLocales && (
            <SwitchLanguageMenuItem availableLocales={availableLocales} />
          )}
          <div className="flex items-center justify-between gap-4 px-4 py-6">
            <div className="w-full">
              <a
                className="block w-full min-w-full max-w-fit rounded-[2px] w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center text-blue-600 outline outline-1 outline-blue-600 hover:outline-2 active:outline-4 disabled:outline-slate-300 disabled:text-slate-300 text-body-md px-4 py-2"
                href="https://app.tractian.com"
                target="_blank"
              >
                Login
              </a>
            </div>
            <Button variant={"primary"} type="button">
              {t("getDemo")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
