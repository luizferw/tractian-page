import { useTranslations } from "next-intl";
import WorkflowTabsClient, { type WorkflowTabItem } from "./WorkflowTabsClient";
import Image from "next/image";

export default function WorkflowTabsSection() {
  const t = useTranslations("ReliabilityEngineer.WorkflowTabsSection");

  const tabs: WorkflowTabItem[] = [
    {
      id: "failureLifecycleTracking",
      label: t("tabs.failureLifecycleTracking.label"),
      title: t("tabs.failureLifecycleTracking.title"),
      bullets: [
        t("tabs.failureLifecycleTracking.bullets.b1"),
        t("tabs.failureLifecycleTracking.bullets.b2"),
        t("tabs.failureLifecycleTracking.bullets.b3"),
        t("tabs.failureLifecycleTracking.bullets.b4"),
      ].filter(Boolean),
      Image: (
        <Image
          alt={t("tabs.failureLifecycleTracking.image.alt")}
          src={t("tabs.failureLifecycleTracking.image.src")}
          width={1920}
          height={1080}
          className="object-contain"
        />
      ),
    },
    {
      id: "singlePaneOfGlass",
      label: t("tabs.singlePaneOfGlass.label"),
      title: t("tabs.singlePaneOfGlass.title"),
      bullets: [
        t("tabs.singlePaneOfGlass.bullets.b1"),
        t("tabs.singlePaneOfGlass.bullets.b2"),
        t("tabs.singlePaneOfGlass.bullets.b3"),
        t("tabs.singlePaneOfGlass.bullets.b4"),
      ].filter(Boolean),
      Image: (
        <Image
          alt={t("tabs.singlePaneOfGlass.image.alt")}
          src={t("tabs.singlePaneOfGlass.image.src")}
          width={1920}
          height={1080}
          className="object-contain"
        />
      ),
    },
    {
      id: "plantWideVisibility",
      label: t("tabs.plantWideVisibility.label"),
      title: t("tabs.plantWideVisibility.title"),
      bullets: [
        t("tabs.plantWideVisibility.bullets.b1"),
        t("tabs.plantWideVisibility.bullets.b2"),
        t("tabs.plantWideVisibility.bullets.b3"),
        t("tabs.plantWideVisibility.bullets.b4"),
      ].filter(Boolean),
      Image: (
        <Image
          alt={t("tabs.plantWideVisibility.image.alt")}
          src={t("tabs.plantWideVisibility.image.src")}
          width={1920}
          height={1080}
          className="object-contain"
        />
      ),
    },
    {
      id: "smartPreventivePlanning",
      label: t("tabs.smartPreventivePlanning.label"),
      title: t("tabs.smartPreventivePlanning.title"),
      bullets: [
        t("tabs.smartPreventivePlanning.bullets.b1"),
        t("tabs.smartPreventivePlanning.bullets.b2"),
        t("tabs.smartPreventivePlanning.bullets.b3"),
        t("tabs.smartPreventivePlanning.bullets.b4"),
      ].filter(Boolean),
      Image: (
        <Image
          alt={t("tabs.smartPreventivePlanning.image.alt")}
          src={t("tabs.smartPreventivePlanning.image.src")}
          width={1920}
          height={1080}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-4 lg:items-center">
          <h2 className="mt-4 w-full text-left font-bold text-title-md lg:text-center">
            {t("title")}
          </h2>
        </article>

        <section className="w-full">
          <WorkflowTabsClient
            ariaLabel={t("aria.selectTab")}
            initialActiveId="failureLifecycleTracking"
            tabs={tabs}
          />
        </section>
      </div>
    </section>
  );
}
