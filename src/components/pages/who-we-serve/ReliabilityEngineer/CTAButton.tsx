"use client";

import { useGetDemoDialog } from "@/components/providers/GetDemoDialogProvider";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

export default function CTAButton({
  label,
  showArrow = true,
  className = ''
}: {
  label?: string;
  showArrow?: boolean;
  className?: string;
}) {
  const t = useTranslations("ReliabilityEngineer.heroSection");
  const { open } = useGetDemoDialog();

  return (
    <button
      className={"cursor-pointer max-w-fit rounded-sm w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center bg-blue-600 text-white font-medium text-body-md px-4 py-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300 relative z-30 mx-auto flex items-center justify-center gap-2 md:mx-0"}
      type="button"
      onClick={() => open()}
    >
      <p className={cn("text-white text-label-md", className)}>{label ?? t("ctaLabel")}</p>
      {showArrow && (
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M15.3671 8.03333L9.90046 13.5L9.16712 12.7667L13.4338 8.5H0.633789V7.5H13.4338L9.16712 3.23333L9.90046 2.5L15.3671 8.03333Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}
