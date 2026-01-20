"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

export type WorkflowTabItem = {
  id: string;
  label: string;
  title: string;
  bullets: string[];
  Image: ReactNode;
};

type Props = {
  ariaLabel: string;
  tabs: WorkflowTabItem[];
  initialActiveId: string;
};

export default function WorkflowTabsClient({
  ariaLabel,
  tabs,
  initialActiveId,
}: Props) {
  const fallbackId = tabs[0]?.id ?? "tab-0";
  const [activeId, setActiveId] = useState<string>(
    initialActiveId || fallbackId,
  );

  // autoplay control
  const [autoplayDisabled, setAutoplayDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId),
  );

  const active = useMemo(
    () => tabs[activeIndex] ?? tabs[0],
    [tabs, activeIndex],
  );

  const underlineWidthPx = 288;
  const underlineLeftPx = activeIndex * underlineWidthPx;

  // visibility observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // autoplay timer (only while visible; stops forever after manual interaction)
  useEffect(() => {
    if (!isVisible) return;
    if (autoplayDisabled) return;
    if (tabs.length <= 1) return;

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const currentIndex = Math.max(
        0,
        tabs.findIndex((t) => t.id === activeId),
      );
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveId(tabs[nextIndex].id);
    }, 1000 * 8); // 8 seconds

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeId, autoplayDisabled, isVisible, tabs]);

  function disableAutoplayForever() {
    if (!autoplayDisabled) setAutoplayDisabled(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  return (
    <div ref={containerRef} className="mx-auto flex w-full flex-col gap-12">
      {/* Tabs */}
      <div className="relative mx-auto mt-2 flex w-full flex-col bg-[#F4F4F9] py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={tab.id}
              className={clsx(
                "ease relative col-span-1 flex w-full items-center justify-center border-b px-1 pb-[3px] pt-1 transition-all duration-300 sm:px-0 sm:py-0",
                isActive
                  ? "rounded-md border-transparent bg-[#F4F4F9] sm:rounded-none sm:border-b-blue-600 sm:bg-transparent"
                  : "border-transparent bg-[#F4F4F9] transition-all duration-100 sm:border-b-slate-300 sm:bg-transparent sm:bg-white sm:duration-300 lg:hover:bg-transparent",
              )}
            >
              <button
                type="button"
                aria-label={ariaLabel}
                onClick={() => {
                  disableAutoplayForever();
                  setActiveId(tab.id);
                }}
                className={clsx(
                  "cursor-pointer w-full rounded-sm px-6 py-1.5 transition-all duration-100 text-body-md sm:w-auto sm:items-start sm:p-4 sm:duration-300 sm:text-tag md:text-body-sm lg:rounded-none lg:px-2 text-body-md xl:px-1 2xl:px-2",
                  isActive
                    ? "bg-white font-semibold text-slate-700 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none"
                    : "text-slate-500 hover:text-slate-600",
                )}
              >
                {tab.label}
              </button>
            </div>
          );
        })}

        {/* underline (xl only) */}
        <hr
          className="absolute bottom-0 hidden transition-all duration-500 xl:block xl:border xl:border-blue-600"
          style={{
            width: `${underlineWidthPx}px`,
            left: `${underlineLeftPx}px`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <article className="flex w-full justify-between gap-8 lg:gap-12">
        <div
          key={active.id}
          className="animate-[fadeIn_0.5s_both] flex w-full flex-col items-center justify-between gap-8 transition duration-500 ease-in-out lg:min-h-[434px] lg:flex-row lg:gap-16"
        >
          <div className="flex w-full flex-col gap-8 lg:max-w-[378px] lg:gap-12">
            <article className="flex flex-col items-center gap-4 lg:max-w-[378px] lg:items-start">
              <h3 className="font-bold text-title-xs">{active.title}</h3>

              <ul className="ml-4 flex w-full list-disc flex-col gap-1">
                {active.bullets.map((b, i) => (
                  <li
                    key={`${active.id}-b-${i}`}
                    className="text-slate-500 text-body-md"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <figure className="w-full rounded-sm">
            <div className="relative">{active.Image}</div>
          </figure>
        </div>
      </article>
    </div>
  );
}
