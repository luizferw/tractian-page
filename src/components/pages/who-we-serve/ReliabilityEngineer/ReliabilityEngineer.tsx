import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";
import SiteNav, { SiteNavProps } from "@/components/layout/SiteNav/SiteNav";
import { Locale } from "@/i18n.config";

export type ReliabilityEngineerProps = {
  locale: Locale;
};

export default function ReliabilityEngineer({
  locale,
}: ReliabilityEngineerProps) {
  const availableLocales: SiteNavProps["availableLocales"] = [
    {
      locale: "pt",
      href: "/solucoes-para-gerentes-de-manutencao",
    },
    {
      locale: "en",
      href: "/en/who-we-serve/reliability-engineer",
    },
    {
      locale: "es",
      href: "/es/who-we-serve/ingeniero-de-confiabilidad",
    },
  ];

  return (
    <>
      <SiteNav availableLocales={availableLocales} locale={locale} />
      <main></main>
      <SiteFooter />
    </>
  );
}
