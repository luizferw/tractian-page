"use client";

import { useGetDemoDialog } from "@/components/providers/GetDemoDialogProvider";
import { cnRaw } from "@/lib/cn";
import { useTranslations } from "next-intl";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function CTAButton({
  label,
  showArrow = true,
  className = "",
}: {
  label?: string;
  showArrow?: boolean;
  className?: string;
}) {
  const t = useTranslations("ReliabilityEngineer.HeroSection");
  const { open } = useGetDemoDialog();

  return (
    <button
      className={
        "cursor-pointer max-w-fit rounded-sm w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center bg-blue-600 text-white font-medium text-body-md px-4 py-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300 relative z-30 mx-auto flex items-center justify-center gap-2 md:mx-0"
      }
      type="button"
      onClick={() => open()}
    >
      <p className={cnRaw("text-white text-label-md", className)}>
        {label ?? t("ctaLabel")}
      </p>
      {showArrow && <ArrowRightIcon className="size-4" />}
    </button>
  );
}
