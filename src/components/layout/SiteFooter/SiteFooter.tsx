import { useTranslations } from "next-intl";
import BackToTopIcon from "@/components/icons/BackToTopIcon";
import Logo from "@/components/icons/Logo";
import PhoneIcon from "@/components/icons/PhoneIcon";
import PrivacyChoicesIcon from "@/components/icons/PrivacyChoicesIcon";
import { useLocale } from "next-intl";
import FooterSection from "./FooterSection";
import SocialLink from "./SocialLink";
import { footerConfig, isSectionGroup } from "./footer.config";
import { Button } from "@/components/ui/Button/Button";
import { localeNames } from "@/i18n.config";

export default function SiteFooter() {
  const t = useTranslations("SiteFooter");
  const locale = useLocale();

  const config = footerConfig[locale as keyof typeof footerConfig];

  return (
    <footer className="bg-blue-950 px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <a
          className="mb-4 hidden items-center gap-x-2 self-end text-slate-50 transition hover:text-blue-300 "
          href="#"
          target="_self"
        >
          <p className="text-body-sm">{t("backToTop")}</p>
          <BackToTopIcon className="h-4 w-4" />
        </a>
        <section className="mb-8 flex w-full flex-col gap-x-16 gap-y-8 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-wrap items-center justify-evenly gap-4 lg:w-auto lg:justify-start lg:gap-x-6 xl:flex-nowrap">
            {config.partnerBadges.map((badge) => badge)}
          </div>
          <a
            className="mb-4 hidden items-center gap-x-2 self-end text-slate-50 transition hover:text-blue-300 lg:flex "
            href="#"
            target="_self"
          >
            <p className="text-body-sm">{t("backToTop")}</p>
            <BackToTopIcon className="h-4 w-4" />
          </a>
        </section>
        <section className="mb-12 grid grid-cols-1 justify-between gap-y-3 sm:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:flex lg:grid-cols-5 lg:justify-between lg:gap-x-8 lg:gap-y-12">
          {config.sections.map((section) => {
            if (isSectionGroup(section)) {
              return (
                <article
                  key={section.map((subSection) => subSection.id).join("-")}
                  className="flex grid-cols-1 flex-col gap-4 sm:col-span-2 sm:grid sm:w-full sm:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col lg:gap-6"
                >
                  {section.map((subSection) => (
                    <FooterSection
                      key={subSection.id}
                      title={t(subSection.titleMessageKey)}
                      links={subSection.links.map((link) => ({
                        href: link.href,
                        label: t(link.labelMessageKey),
                        target: link.target,
                      }))}
                    />
                  ))}
                </article>
              );
            }

            return (
              <FooterSection
                key={section.id}
                isSupport={(locale === localeNames.pt || locale === localeNames.en) && section.id === "support"}
                title={t(section.titleMessageKey)}
                links={section.links.map((link) => ({
                  href: link.href,
                  label: t(link.labelMessageKey),
                  target: link.target,
                }))}
              />
            );
          })}
        </section>
        <div className="flex w-full flex-col-reverse justify-between lg:flex-row">
          <div className="mt-8 flex flex-col items-center gap-y-4 lg:mt-0 lg:items-start">
            <Logo className="w-28 fill-white lg:w-40" />
            <p className="whitespace-pre-line uppercase lg:!text-[14px] lg:!leading-[22px] text-slate-50 leading-[20px] transition ease-in-out text-[12px] md:text-body-sm hover:brightness-125 lg:text-body-sm">
              {t("copyright")}
            </p>
            <div className="flex flex-col-reverse gap-y-12">
              <a
                className="group relative flex items-center gap-x-2 text-slate-50 transition "
                href={`tel:${config.phone}`}
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="text-body-sm group-hover:underline">
                  {t("phone")}
                </span>
              </a>
            </div>
          </div>
          <section className="mx-auto flex w-full max-w-fit flex-col items-center gap-y-4 lg:mx-0 lg:items-end">
            <div className="flex items-center gap-x-6">
              {config.socialLinks.map((link) => (
                <SocialLink key={link.href} {...link} />
              ))}
            </div>
            <a
              className="w-full text-slate-50 transition ease-in-out hover:brightness-125 "
              href={config.addressHref}
            >
              <p className="text-body-sm max-md:text-center">
                {config.address}
              </p>
            </a>
            <Button
              variant="ghost"
              className="hover:bg-transparent !p-0 lg:justify-end group flex items-center gap-x-2"
              id="ot-sdk-btn"
            >
              <PrivacyChoicesIcon className="flex w-6" />
              <p className="text-body-sm group-hover:underline font-medium text-slate-50">
                {t("privacyChoices")}
              </p>
            </Button>
          </section>
        </div>
      </div>
    </footer>
  );
}
