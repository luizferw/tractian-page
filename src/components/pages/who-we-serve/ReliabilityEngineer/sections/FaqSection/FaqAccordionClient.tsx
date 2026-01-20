"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";
import ReliabilityFaqChevronIcon from "@/components/icons/ReliabilityFaqChevronIcon";
import { useTranslations } from "next-intl";

export type FaqItem = {
  id: string;
  question: string;
  answerKey: string;
  defaultOpen?: boolean;
};

export default function FaqAccordionClient({ items }: { items: FaqItem[] }) {
  const t = useTranslations("ReliabilityEngineer.FaqSection");
  const initialOpenIds = useMemo(() => {
    const defaults = items.filter((i) => i.defaultOpen).map((i) => i.id);
    // se nada marcado, deixa o primeiro aberto (opcional)
    return defaults.length ? defaults : items[0]?.id ? [items[0].id] : [];
  }, [items]);

  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(initialOpenIds),
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="flex w-full flex-col gap-y-6">
      {items.map((item) => {
        const open = openIds.has(item.id);
        const active = open;

        return (
          <div
            key={item.id}
            className={clsx(
              "cursor-pointer w-full rounded-[2px] border p-4 transition-colors duration-150 border-slate-300 hover:border-blue-600",
            )}
            onClick={() => toggle(item.id)}
          >
            <button
              type="button"
              className="cursor-pointer flex w-full items-center justify-between gap-3"
              aria-expanded={open}
              aria-controls={`${item.id}-panel`}
            >
              <h3
                className={clsx(
                  "text-left font-medium text-body-md transition-colors duration-150",
                  open ? "text-blue-600" : "text-slate-700 hover:text-blue-600",
                )}
              >
                {t(item.question)}
              </h3>

              <figure>
                <ReliabilityFaqChevronIcon open={open} active={active} />
              </figure>
            </button>

            <div
              id={`${item.id}-panel`}
              className={clsx(
                "grid transition-[grid-template-rows] duration-150 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={clsx(
                    "pt-2 text-left text-slate-500 text-body-md transition-all duration-150 ease-out",
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1",
                  )}
                >
                  {t.rich(item.answerKey, {
                    insightsLink: (chunks) => (
                      <a
                        className="underline underline-offset-2 text-slate-500"
                        target="_blank"
                        rel="noreferrer"
                        href="/solucoes/monitoramento-condicao/insights-e-diagnostico"
                      >
                        {chunks}
                      </a>
                    ),
                    smartTracLink: (chunks) => (
                      <a
                        className="underline underline-offset-2 text-slate-500"
                        target="_blank"
                        rel="noreferrer"
                        href="/smart-trac"
                      >
                        {chunks}
                      </a>
                    ),
                    cmmsLink: (chunks) => (
                      <a
                        className="underline underline-offset-2 text-slate-500"
                        target="_blank"
                        rel="noreferrer"
                        href="/cmms/tracos"
                      >
                        {chunks}
                      </a>
                    ),
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
