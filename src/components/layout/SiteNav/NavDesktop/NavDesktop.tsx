import { useTranslations } from "next-intl";
import { NavItem } from "../nav.config";
import SwitchLanguageButton from "./SwitchLanguageButton";
import Logo from "@/components/icons/Logo";
import GetDemoButton from "./GetDemoButton";
import MenuSection from "./MenuSection";

export type NavDesktopProps = {
  homepageHref: string;
  filteredNavItems: NavItem[];
  availableLocales?: {
    locale: string;
    href: string;
  }[];
};

export default function NavDesktop({
  homepageHref,
  filteredNavItems,
  availableLocales,
}: NavDesktopProps) {
  const t = useTranslations("SiteNav");

  return (
    <div className="hidden h-full w-full items-center justify-between lg:flex">
      <section className="flex items-center gap-x-4">
        <figure className="fill-blue-600">
          <a aria-label="Tractian Logo" href={homepageHref}>
            <Logo />
          </a>
        </figure>
        <div className="flex h-[72px] items-center">
          <MenuSection filteredNavItems={filteredNavItems} />
        </div>
      </section>
      <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
        {!!availableLocales?.length && (
          <SwitchLanguageButton availableLocales={availableLocales} />
        )}
        <a
          className="block text-center text-body-md lg:hidden xl:block font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 "
          href="https://app.tractian.com"
          target="_blank"
        >
          Login
        </a>
        <GetDemoButton>{t("getDemo")}</GetDemoButton>
      </section>
    </div>
  );
}
