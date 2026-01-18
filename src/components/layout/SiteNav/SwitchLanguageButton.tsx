"use client";

import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import SwitchLanguageIcon from "@/components/icons/SwitchLanguageIcon";
import { Button } from "@/components/ui/Button/Button";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type SwitchLanguageButtonProps = {
  availableLocales: { locale: string; href: string }[];
};

export default function SwitchLanguageButton({
  availableLocales,
}: SwitchLanguageButtonProps) {
  const locale = useLocale();
  const tLanguages = useTranslations("Languages");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
      {isOpen && (
        <div className="animate-[fadeInDown_333.33ms_both] z-[100] hidden w-full lg:block lg:w-auto">
          <div className="absolute left-0 top-10 z-[1000] flex w-full flex-col items-center rounded-sm border border-slate-300 bg-slate-50 p-2 text-slate-500 transition-opacity duration-default ease-in-out text-body-sm lg:left-3 lg:top-8 lg:w-auto lg:border-2 xl:text-body-md">
            {availableLocales.map((localeItem) => (
              <Button
                key={localeItem.locale}
                variant="ghost"
                data-active={locale === localeItem.locale}
                className="justify-start hover:text-slate-500 flex w-full items-center gap-x-2 rounded-sm !px-3 py-2 text-body-md !hover:bg-slate-100 lg:py-2 lg:text-body-sm data-[active=true]:bg-slate-200 data-[active=true]:hover:bg-slate-200"
              >
                <p
                  onClick={() => router.push(localeItem.href)}
                  className="whitespace-nowrap text-body-sm"
                >
                  {tLanguages(localeItem.locale)}
                </p>
              </Button>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen((v) => !v)}
        variant="ghost"
        aria-label="Switch Language Button"
        size="sm"
        className="group flex w-full items-center justify-between gap-x-2 rounded-sm px-4 !py-1 text-body-sm focus:outline-none lg:bg-transparent lg:bg-opacity-20 lg:px-2 lg:text-slate-50 xl:pl-3 xl:text-body-md"
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
          className="data-[isopen=true]:-rotate-180"
        />
      </Button>
    </div>
  );
}
