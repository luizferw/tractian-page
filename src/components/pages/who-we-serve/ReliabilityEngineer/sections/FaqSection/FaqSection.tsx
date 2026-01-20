import { useTranslations } from "next-intl";
import FaqAccordionClient, { FaqItem } from "./FaqAccordionClient";

export default function FaqSection() {
  const t = useTranslations("ReliabilityEngineer.FaqSection");

  const items: FaqItem[] = [
    {
      id: "howDoesTractianHelp",
      question: "items.howDoesTractianHelp.question",
      answerKey: "items.howDoesTractianHelp.answer",
      defaultOpen: true,
    },
    {
      id: "supportExistingProgram",
      question: "items.supportExistingProgram.question",
      answerKey: "items.supportExistingProgram.answer",
    },
    {
      id: "supportsBeyondReliability",
      question: "items.supportsBeyondReliability.question",
      answerKey: "items.supportsBeyondReliability.answer",
    },
    {
      id: "failureConfirmationRca",
      question: "items.failureConfirmationRca.question",
      answerKey: "items.failureConfirmationRca.answer",
    },
    {
      id: "reduceReactiveMaintenance",
      question: "items.reduceReactiveMaintenance.question",
      answerKey: "items.reduceReactiveMaintenance.answer",
    },
    {
      id: "preventiveMaintenance",
      question: "items.preventiveMaintenance.question",
      answerKey: "items.preventiveMaintenance.answer",
    },
    {
      id: "onlyForLargeOperations",
      question: "items.onlyForLargeOperations.question",
      answerKey: "items.onlyForLargeOperations.answer",
    },
    {
      id: "trainingAndTurnover",
      question: "items.trainingAndTurnover.question",
      answerKey: "items.trainingAndTurnover.answer",
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
