import AiSmarterIcon from "@/components/icons/AiSmarterIcon";
import OnePlatformIcon from "@/components/icons/OnePlatformIcon";
import WorkflowFitIcon from "@/components/icons/WorkflowFitIcon";
import { useTranslations } from "next-intl";

type FeatureKey =
  | "onePlatformFullControl"
  | "designedToFitWorkflow"
  | "aiJustGotSmarter";

export default function FeatureCard({ featureKey }: { featureKey: FeatureKey }) {
  const t = useTranslations("ReliabilityEngineer.BuiltByReliabilitySection");

  const iconMap: Record<FeatureKey, React.ReactNode> = {
    onePlatformFullControl: <OnePlatformIcon />,
    designedToFitWorkflow: <WorkflowFitIcon />,
    aiJustGotSmarter: <AiSmarterIcon />,
  };

  const icon = iconMap[featureKey];

  return (
    <div className="flex w-full flex-row items-start gap-4 lg:flex-col lg:items-center">
      <figure className="flex items-center justify-center rounded-[2px] bg-white p-[14px] lg:h-24 lg:w-24 lg:p-0">
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
