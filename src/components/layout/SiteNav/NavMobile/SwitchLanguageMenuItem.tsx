"use client";

import BrazilianFlagIcon from "@/components/icons/BrazilianFlag";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import SpainFlagIcon from "@/components/icons/SpainFlag";
import SwitchLanguageIcon from "@/components/icons/SwitchLanguageIcon";
import USFlagIcon from "@/components/icons/USFlag";
import { Button } from "@/components/ui/Button/Button";
import { Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type SwitchLanguageMenuItemProps = {
  availableLocales: { locale: Locale; href: string }[];
};

const flagIconMap = {
  pt: BrazilianFlagIcon,
  en: USFlagIcon,
  es: SpainFlagIcon,
};

export default function SwitchLanguageMenuItem({
  availableLocales,
}: SwitchLanguageMenuItemProps) {
  const locale = useLocale() as Locale;
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
          className="group flex w-full items-center !justify-between gap-x-2 rounded-[2px] px-4 !py-1 text-body-sm focus:outline-none lg:bg-transparent lg:bg-opacity-20 lg:px-2 lg:text-slate-50 xl:pl-3 xl:text-body-md hover:bg-transparent"
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
            data-open={isOpen}
            className="!size-4 data-[open=true]:-rotate-180"
          />
        </Button>
        {isOpen && (
          <div className="animate-[fadeIn_1s_both] mt-2 w-full px-4 lg:hidden">
            {availableLocales.map((localeItem) => {
              const FlagIcon = flagIconMap[localeItem.locale];

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
}
