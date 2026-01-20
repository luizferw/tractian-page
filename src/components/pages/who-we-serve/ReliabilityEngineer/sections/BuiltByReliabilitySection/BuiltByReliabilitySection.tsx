import { useTranslations } from "next-intl";
import AiSmarterIcon from "@/components/icons/AiSmarterIcon";
import OnePlatformIcon from "@/components/icons/OnePlatformIcon";
import WorkflowFitIcon from "@/components/icons/WorkflowFitIcon";

type FeatureKey =
  | "onePlatformFullControl"
  | "designedToFitWorkflow"
  | "aiJustGotSmarter";

function FeatureCard({ featureKey }: { featureKey: FeatureKey }) {
  const t = useTranslations("ReliabilityEngineer.BuiltByReliabilitySection");

  const iconMap: Record<FeatureKey, React.ReactNode> = {
    onePlatformFullControl: <OnePlatformIcon />,
    designedToFitWorkflow: <WorkflowFitIcon />,
    aiJustGotSmarter: <AiSmarterIcon />,
  };

  const icon = iconMap[featureKey];

  return (
    <div className="flex w-full flex-row items-start gap-4 lg:flex-col lg:items-center">
      <figure className="flex items-center justify-center rounded-sm bg-white p-[14px] lg:h-24 lg:w-24 lg:p-0">
        {icon}
      </figure>

      <article className="flex w-full flex-col sm:gap-1 lg:items-center lg:gap-4">
        <h3 className="text-left !font-tight font-bold lg:text-center text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]">
          {t(`features.${featureKey}.title`)}
        </h3>
        <p className="lg:max-w-[95%] text-left text-slate-500 text-body-md lg:text-center">
          {t(`features.${featureKey}.description`)}
        </p>
      </article>
    </div>
  );
}

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
