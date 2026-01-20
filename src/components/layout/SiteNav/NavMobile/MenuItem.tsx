"use client";

import { useTranslations } from "next-intl";
import { NavItem } from "../nav.config";
import { useState } from "react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import MenuSubItems from "./MenuSubItems";

export default function MenuItem(navItem: NavItem) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("SiteNav");

  return (
    <div key={navItem.labelMessageKey} className="w-full">
      <button
        aria-label="Open Navbar Button"
        className="cursor-pointer flex w-full items-center !justify-between px-4 py-3 hover:brightness-125"
        onClick={() => setIsOpen((v) => !v)}
      >
        <p className="text-slate-500 text-body-md">
          {t(navItem.labelMessageKey)}
        </p>
        <ChevronDownIcon
          data-open={isOpen}
          className="!size-4 data-[open=true]:-rotate-180"
        />
      </button>
      {isOpen && <MenuSubItems {...navItem} />}
    </div>
  );
}
