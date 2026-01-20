import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center bg-gradient-to-r from-[#172554] to-[#1E3A8A] px-4">
      <div className="flex max-w-6xl flex-col items-center gap-x-20 gap-y-10 lg:flex-row">
        <picture className="hidden lg:block">
          <img
            alt="Smart Trac"
            loading="eager"
            width={350}
            height={500}
            decoding="async"
            className="object-contain"
            src="/404/smart-ultra.png"
            style={{ color: "transparent" }}
          />
        </picture>
        <picture className="lg:hidden">
          <img
            alt="Smart Trac"
            loading="eager"
            width={150}
            height={193}
            decoding="async"
            className="object-contain"
            src="/404/smart-ultra-mobile.png"
            style={{ color: "transparent" }}
          />
        </picture>
        <section className="max-w-md text-center text-slate-50 lg:text-left">
          <h1 className="font-semibold !leading-[72px] text-display-lg lg:!text-[160px] lg:!leading-[160px]">
            404...
          </h1>
          <p className="mb-4">{t("title")}</p>
          <p className="mb-8 lg:mb-10">{t("description")}</p>
          <a
            className="mx-auto lg:mx-0 max-w-fit rounded-[2px] w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center bg-blue-600 text-white font-medium text-body-md px-4 py-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300"
            href="/"
          >
            {t("ctaLabel")}
          </a>
        </section>
      </div>
    </main>
  );
}
