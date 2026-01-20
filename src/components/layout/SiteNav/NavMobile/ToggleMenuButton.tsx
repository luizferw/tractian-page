"use client";

import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import { Button } from "@/components/ui/Button/Button";
import { Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { NavItem } from "../nav.config";
import SwitchLanguageMenuItem from "./SwitchLanguageMenuItem";
import MenuItem from "./MenuItem";
import GetDemoButton from "./GetDemoButton";

export default function ToggleMenuButton({
  availableLocales,
  items,
}: {
  availableLocales?: { locale: Locale; href: string }[];
  items: NavItem[];
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
          {items.map(MenuItem)}
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
            <GetDemoButton>{t("getDemo")}</GetDemoButton>
          </div>
        </div>
      </div>
    </>
  );
}
