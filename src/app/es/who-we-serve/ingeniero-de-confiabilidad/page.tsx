import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

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

export default function ReliabilityEngineerPage() {
  const t = useTranslations("ReliabilityEngineer");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
