import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";
import SiteNav, { SiteNavProps } from "@/components/layout/SiteNav/SiteNav";
import { Locale } from "@/i18n.config";
import StrategyTabsSection from "./sections/StrategyTabsSection/StrategyTabsSection";
import WorkflowTabsSection from "./sections/WorkflowTabsSection/WorkflowTabsSection";
import BuiltByReliabilitySection from "./sections/BuiltByReliabilitySection/BuiltByReliabilitySection";
import TestimonialsSection from "./sections/TestimonialSection/TestimonialSection";
import PeopleBehindMachinesSection from "./sections/PeopleBehindMachinesSession/PeopleBehindMachinesSection";
import FaqSection from "./sections/FaqSection/FaqSection";
import HeroSection from "./sections/HeroSection/HeroSection";

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
      <main>
        <HeroSection />
        <StrategyTabsSection />
        <WorkflowTabsSection />
        <BuiltByReliabilitySection />
        <TestimonialsSection />
        <PeopleBehindMachinesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
