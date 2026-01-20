import { useTranslations } from "next-intl";
import CTAButton from "../../CTAButton";

export default function PeopleBehindMachinesSection() {
  const t = useTranslations("ReliabilityEngineer.PeopleBehindMachinesSection");

  return (
    <section
      className="w-full bg-cover bg-right bg-no-repeat 2xl:min-h-[475px] 3xl:min-h-[525px] 4xl:min-h-[560px]"
      style={{
        backgroundImage: `url(${t("backgroundImage")})`,
      }}
    >
      <div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950/95 px-4 py-12 md:max-w-[50%] md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-16 xl:py-20 2xl:min-h-[475px] 2xl:items-center 2xl:pl-16 2xl:pr-32 3xl:min-h-[525px] 4xl:min-h-[560px]">
        <div className="flex w-fit flex-col items-center gap-8 md:items-start">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <h2 className="text-center font-bold text-white text-title-lg md:text-left">
              {t("titleParts.p1")} <br className="hidden xl:block" />
              {t("titleParts.p2")}
            </h2>

            <p className="text-center text-white text-body-md md:text-left md:font-light">
              {t("descriptionParts.p1")} <br className="hidden xl:block" />
              {t("descriptionParts.p2")} <br className="hidden xl:block" />
              {t("descriptionParts.p3")}
              {t("descriptionParts.p4") && (
                <>
                  {" "}
                  <br className="hidden xl:block" />
                  {t("descriptionParts.p4")}
                </>
              )}
            </p>
          </article>

          <CTAButton className='!text-[14px] !leading-[22px] lg:!leading-[24px] lg:!text-[16px]' label={t("cta")} showArrow={false} />
          {/* <button
            type="button"
            className="relative z-30 mx-auto w-full max-w-fit rounded-sm bg-blue-600 px-4 py-2 text-center font-medium text-body-md text-white transition duration-150 ease-in-out hover:bg-blue-900 active:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-300 md:mx-0"
          >
            CTAButton
            
          </button> */}
        </div>
      </div>
    </section>
  );
}
