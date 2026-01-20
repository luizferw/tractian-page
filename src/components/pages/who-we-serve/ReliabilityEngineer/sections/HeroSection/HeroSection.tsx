import { useTranslations } from "next-intl";
import CTAButton from "../../CTAButton";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("ReliabilityEngineer.HeroSection");

  return (
    <section
      className="relative w-full md:bg-[url('/who-we-serve/reliability-engineers/header.png')] md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-right-top 3xl:min-h-[675px] 4xl:min-h-[695px]"
      aria-label={t("ariaLabel")}
    >
      <div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950 bg-opacity-100 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-16 xl:py-20 2xl:pl-16 2xl:pr-24 3xl:min-h-[675px] 4xl:min-h-[695px]">
        <div className="flex w-full flex-col items-center gap-8 md:w-fit md:items-start">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <p className="font-light text-white text-body-md">{t("eyebrow")}</p>

            <h1 className="text-center font-bold text-white text-title-lg md:text-left">
              {t.rich("title", {
                br: () => <br className="xl:block hidden" />,
              })}
            </h1>

            <p className="text-center font-light text-white text-body-md md:text-left ">
              {t.rich("description", {
                br: () => <br className="xl:block hidden" />,
              })}
            </p>
          </article>
          <CTAButton />
        </div>
      </div>

      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="flex w-full max-w-[240px] flex-col gap-4 rounded-l-[2px] bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-[2px] 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
          <p className="text-slate-500 text-body-sm 2xl:!text-[16px] 2xl:!leading-[24px]">
            {t("quote.text")}
          </p>

          <article className="flex w-full flex-col">
            <p className="!text-[13px] !leading-[19.5px] 2xl:!text-[14px] 2xl:!leading-[22px] font-bold text-body-sm">
              {t("quote.authorName")}
            </p>
            <p className="!text-[13px] !leading-[19.5px] 2xl:!text-[14px] 2xl:!leading-[22px] text-body-sm">
              {t("quote.authorTitle")}
            </p>
            <p className="!text-[13px] !leading-[19.5px] 2xl:!text-[14px] 2xl:!leading-[22px] font-bold text-body-sm">
              {t("quote.authorCompany")}
            </p>
          </article>
        </div>
      </div>

      <figure className="flex h-[340px] w-full sm:h-[290px] md:hidden md:h-[310px]">
        <Image
          alt={t("imageAlt")}
          loading="eager"
          fetchPriority="high"
          width="2560"
          height="1980"
          decoding="async"
          className="hidden h-full w-full object-cover object-right sm:flex"
          src="/who-we-serve/reliability-engineers/header.png"
          style={{ color: "transparent" }}
        />

        <Image
          alt={t("imageAlt")}
          loading="eager"
          width="1280"
          fetchPriority="high"
          height="1080"
          decoding="async"
          className="flex h-full w-full object-cover object-center sm:hidden"
          src="/who-we-serve/reliability-engineers/header-mobile.png"
          style={{ color: "transparent" }}
        />
      </figure>
    </section>
  );
}
