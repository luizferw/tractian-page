"use client";

import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { NavItem } from "../nav.config";
import { useTranslations } from "next-intl";
import MenuSubItems from "./MenuSubItems";

interface MenuItemProps extends NavItem {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuItem({
  isOpen,
  onToggle,
  ...navItem
}: MenuItemProps) {
  const t = useTranslations("SiteNav");

  return (
    <section
      className="flex h-full items-center pl-4 xl:pl-8"
      onClick={onToggle}
    >
      <div className="group flex cursor-pointer items-center gap-x-2">
        <p
          data-open={isOpen}
          className="select-none font-medium text-slate-500 data-[open=true]:text-blue-600 hover:text-blue-600 group-hover:text-blue-600 "
        >
          {t(navItem.labelMessageKey)}
        </p>
        <ChevronDownIcon
          data-open={isOpen}
          className="data-[open=true]:-rotate-180"
        />
      </div>
      {isOpen && <MenuSubItems {...navItem} />}
    </section>
  );
}
