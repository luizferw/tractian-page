import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Locale } from "@/i18n.config";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ReliabilityEngineer" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ReliabilityEngineerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "ReliabilityEngineer" });

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
