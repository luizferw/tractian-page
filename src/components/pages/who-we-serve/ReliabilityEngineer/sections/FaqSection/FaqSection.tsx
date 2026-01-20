import { useTranslations } from "next-intl";
import FaqAccordionClient, { FaqItem } from "./FaqAccordionClient";

export default function FaqSection() {
  const t = useTranslations("ReliabilityEngineer.FaqSection");

  const items: FaqItem[] = [
    {
      id: "howDoesTractianHelp",
      question: t("items.howDoesTractianHelp.question"),
      answerHtml: t.raw("items.howDoesTractianHelp.answerHtml") as string,
      defaultOpen: true,
    },
    {
      id: "supportExistingProgram",
      question: t("items.supportExistingProgram.question"),
      answerHtml: t.raw("items.supportExistingProgram.answerHtml") as string,
    },
    {
      id: "supportsBeyondReliability",
      question: t("items.supportsBeyondReliability.question"),
      answerHtml: t.raw("items.supportsBeyondReliability.answerHtml") as string,
    },
    {
      id: "failureConfirmationRca",
      question: t("items.failureConfirmationRca.question"),
      answerHtml: t.raw("items.failureConfirmationRca.answerHtml") as string,
    },
    {
      id: "reduceReactiveMaintenance",
      question: t("items.reduceReactiveMaintenance.question"),
      answerHtml: t.raw("items.reduceReactiveMaintenance.answerHtml") as string,
    },
    {
      id: "preventiveMaintenance",
      question: t("items.preventiveMaintenance.question"),
      answerHtml: t.raw("items.preventiveMaintenance.answerHtml") as string,
    },
    {
      id: "onlyForLargeOperations",
      question: t("items.onlyForLargeOperations.question"),
      answerHtml: t.raw("items.onlyForLargeOperations.answerHtml") as string,
    },
    {
      id: "trainingAndTurnover",
      question: t("items.trainingAndTurnover.question"),
      answerHtml: t.raw("items.trainingAndTurnover.answerHtml") as string,
    },
  ];

  return (
    <section className="relative w-full bg-slate-100 py-12 lg:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16">
        <header className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <p className="text-center uppercase text-blue-600 text-body-md">
            {t("eyebrow")}
          </p>
          <h2 className="text-center font-semibold lg:font-bold text-title-md lg:!text-[40px] lg:!leading-[52px]">
            {t("title")}
          </h2>
        </header>

        <FaqAccordionClient items={items} />
      </div>
    </section>
  );
}
