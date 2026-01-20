import { Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { TestimonialCard } from "./TestimonialCard";
import TestimonialsMobileCarousel from "./TestimonialsMobileCarousel";

const TESTIMONIALS_BY_LOCALE = {
  en: ["jacob", "gautam", "helio", "rafael"],
  pt: ["helio", "rafael", "jacob"],
  es: ["gautam", "helio"],
} as const;

export type TestimonialKey = (typeof TESTIMONIALS_BY_LOCALE)["en"][number];

export default function TestimonialsSection() {
  const t = useTranslations("ReliabilityEngineer.TestimonialsSection");
  const locale = useLocale() as Locale;

  const testimonials = TESTIMONIALS_BY_LOCALE[locale];
  const g2Badges: readonly TestimonialKey[] = ["gautam"];

  const cards = testimonials.map((key) => (
    <TestimonialCard
      key={key}
      quote={t(`items.${key}.quote`)}
      name={t(`items.${key}.name`)}
      role={t(`items.${key}.role`)}
      company={t(`items.${key}.company`) || undefined}
      imageSrc={t(`items.${key}.image`)}
      showG2Badge={g2Badges.includes(key)}
      grabCursor
    />
  ));

  return (
    <section className="w-full bg-white py-12 sm:px-4 lg:py-16 xl:px-0">
      <div className="item-center mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        <h2 className="px-4 text-left font-bold text-title-md sm:px-0 lg:text-center">
          {t("title")}
        </h2>

        {/* Desktop/tablet: igual ao seu HTML (hidden -> sm:grid -> lg:flex) */}
        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {testimonials.map((key) => (
            <TestimonialCard
              key={key}
              quote={t(`items.${key}.quote`)}
              name={t(`items.${key}.name`)}
              role={t(`items.${key}.role`)}
              company={t(`items.${key}.company`) || undefined}
              imageSrc={t(`items.${key}.image`)}
              showG2Badge={g2Badges.includes(key)}
            />
          ))}
        </div>

        <TestimonialsMobileCarousel>{cards}</TestimonialsMobileCarousel>
      </div>
    </section>
  );
}
