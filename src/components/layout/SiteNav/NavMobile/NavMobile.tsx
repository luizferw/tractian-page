import ToggleMenuButton from "./ToggleMenuButton";
import { NavItem } from "../nav.config";
import { Locale } from "@/i18n.config";
import Logo from "@/components/icons/Logo";

export type NavMobileProps = {
  homepageHref: string;
  filteredNavItems: NavItem[];
  availableLocales?: {
    locale: Locale;
    href: string;
  }[];
};

export default function NavMobile({
  homepageHref,
  filteredNavItems,
  availableLocales,
}: NavMobileProps) {
  return (
    <div className="w-full overflow-hidden lg:hidden">
      <div className="flex w-full items-center justify-between">
        <figure className="fill-blue-600">
          <a aria-label="Tractian Logo" href={homepageHref}>
            <Logo />
          </a>
        </figure>
        <figure className="flex items-center justify-center">
          <ToggleMenuButton
            items={filteredNavItems}
            availableLocales={availableLocales}
          />
        </figure>
      </div>
    </div>
  );
}
