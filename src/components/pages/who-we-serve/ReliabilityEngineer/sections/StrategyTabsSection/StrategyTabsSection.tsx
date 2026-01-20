import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import StrategyTabsClient, { StrategyTabItem } from "./StrategyTabsClient";
import FocusBlueIcon from "@/components/icons/FocusBlueIcon";
import FocusGreenIcon from "@/components/icons/FocusGreenIcon";
import FocusRedIcon from "@/components/icons/FocusRedIcon";
import FocusYellowIcon from "@/components/icons/FocusYellowIcon";

export default function StrategyTabsSection() {
  const t = useTranslations("ReliabilityEngineer.StrategyTabsSection");
  const locale = useLocale();

  const tabs: StrategyTabItem[] = [
    {
      id: "confirmFailure",
      title: t("tabs.confirmFailure.title"),
      body: [
        t("tabs.confirmFailure.body.p1"),
        t("tabs.confirmFailure.body.p2"),
      ].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/confirm-the-failure.png`}
          alt="Move from fire fighting to fire prevention"
          height={600}
          width={800}
          className="object-contain"
        />
      ),
    },
    {
      id: "proveStrategy",
      title: t("tabs.proveStrategy.title"),
      body: [t("tabs.proveStrategy.body.p1")].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/prove-your-strategy.png`}
          alt="Streamline machine troubleshooting"
          height={600}
          width={800}
          className="object-contain"
        />
      ),
    },
    {
      id: "focusTime",
      title: t("tabs.focusTime.title"),
      body: [t("tabs.focusTime.body.p1"), t("tabs.focusTime.body.p2")].filter(
        Boolean,
      ),
      Image: (
        <>
          <Image
            src={`/who-we-serve/machines.png`}
            alt="Take work off your plate"
            height={350}
            width={600}
            className="object-contain"
          />
          <div className="absolute inset-0 h-full w-full">
            <figure className="animate-[fadeIn_1s_both] absolute left-[12%] top-1/2 flex -translate-y-1/2">
              <FocusYellowIcon />
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute left-[31%] top-[47%] flex -translate-y-1/2 md:left-[34%]">
              <FocusRedIcon />
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute right-[29%] top-[51%] flex -translate-y-1/2 md:right-[31%]">
              <FocusGreenIcon />
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute right-[9%] top-[40%] flex -translate-y-1/2">
              <FocusBlueIcon />
            </figure>
          </div>
        </>
      ),
    },
    {
      id: "deepenExpertise",
      title: t("tabs.deepenExpertise.title"),
      body: [t("tabs.deepenExpertise.body.p1")].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/get-insights.png`}
          alt="Cut through the noise, focus on what’s critical"
          height={800}
          width={920}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <section
      className="w-full bg-slate-100 px-4 py-12 lg:py-16"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="uppercase text-blue-600 text-body-md">{t("eyebrow")}</p>
          <h2 className="font-bold text-title-lg">{t("title")}</h2>
        </article>

        <StrategyTabsClient
          ariaLabel={t("aria.selectTab")}
          tabs={tabs}
          initialActiveId="confirmFailure"
        />
      </div>
    </section>
  );
}
