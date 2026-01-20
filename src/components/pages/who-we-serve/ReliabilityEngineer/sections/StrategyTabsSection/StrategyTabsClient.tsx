"use client";

import { ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import CheckIcon from "@/components/icons/CheckIcon";

export type StrategyTabItem = {
  id: string;
  title: string;
  body: string[];
  Image: ReactNode;
};

type Props = {
  ariaLabel: string;
  tabs: StrategyTabItem[];
  initialActiveId: string;
};

export default function StrategyTabsClient({
  ariaLabel,
  tabs,
  initialActiveId,
}: Props) {
  const [autoplayDisabled, setAutoplayDisabled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const fallbackId = tabs[0]?.id ?? "tab-0";
  const [activeId, setActiveId] = useState<string>(
    initialActiveId || fallbackId,
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (autoplayDisabled) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const currentIndex = tabs.findIndex((t) => t.id === activeId);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveId(tabs[nextIndex].id);
    }, 1000 * 6); // 6 seconds

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeId, isVisible, tabs, autoplayDisabled]);

  const active = useMemo(
    () => tabs.find((t) => t.id === activeId) ?? tabs[0],
    [tabs, activeId],
  );

  const baseId = useId();

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col items-start gap-8 lg:h-[400px] lg:flex-row lg:justify-between xl:h-[370px]"
    >
      <div className="flex h-[360px] w-full flex-col gap-4 border-l-2 border-slate-300 sm:h-auto lg:gap-6">
        {tabs.map((tab) => {
          const isActive = tab.id === active?.id;

          return (
            <button
              key={tab.id}
              type="button"
              className={clsx(
                "cursor-pointer group h-fit w-full bg-transparent px-4 transition-all duration-500 -ml-[2px] border-l-2",
                isActive ? "border-blue-500" : "border-slate-300",
              )}
              aria-label={ariaLabel}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${tab.id}`}
              id={`${baseId}-tab-${tab.id}`}
              role="tab"
              onClick={() => {
                setAutoplayDisabled(true);
                if (timerRef.current) clearTimeout(timerRef.current);
                setActiveId(tab.id);
              }}
            >
              <div
                className={clsx(
                  "flex w-full items-center gap-3 transition-all duration-500 lg:justify-between",
                  isActive ? "mb-2" : "mb-0",
                )}
              >
                <figure
                  className={clsx(
                    "flex h-6 w-6 items-center justify-center transition-all duration-500 ease-in-out",
                    isActive ? "bg-blue-600" : "bg-slate-400",
                  )}
                  data-cid="homepage-checkbox"
                >
                  <CheckIcon />
                </figure>

                <h3
                  className={clsx(
                    "w-full flex-1 text-left !font-tight font-semibold transition-all duration-500 text-body-lg lg:!text-[20px] lg:!leading-[28px]",
                    isActive
                      ? "text-slate-700 group-hover:brightness-110"
                      : "text-slate-400",
                  )}
                >
                  {tab.title}
                </h3>
              </div>

              <div
                id={`${baseId}-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${tab.id}`}
                className={clsx(
                  "grid transition-[grid-template-rows] transition-all duration-500 ease-in-out",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="flex flex-col gap-2 text-left text-slate-500 text-body-md">
                    {tab.body.map((p, idx) => (
                      <p key={`${tab.id}-p-${idx}`}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <figure
        key={active.id}
        className="relative animate-[fadeIn_2s_both] flex h-full w-full justify-center rounded-sm lg:h-[320px]"
      >
        {active?.Image}
      </figure>
    </div>
  );
}
