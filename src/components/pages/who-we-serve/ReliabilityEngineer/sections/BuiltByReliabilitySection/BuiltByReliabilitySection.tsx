import { useTranslations } from "next-intl";
import FeatureCard from "./FeatureCard";

export default function BuiltByReliabilitySection() {
  const t = useTranslations("ReliabilityEngineer.BuiltByReliabilitySection");

  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <h2 className="font-bold text-title-md lg:text-center">{t("title")}</h2>

        <div className="gap flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-between lg:gap-16">
          <FeatureCard featureKey="onePlatformFullControl" />
          <FeatureCard featureKey="designedToFitWorkflow" />
          <FeatureCard featureKey="aiJustGotSmarter" />
        </div>
      </div>
    </section>
  );
}
