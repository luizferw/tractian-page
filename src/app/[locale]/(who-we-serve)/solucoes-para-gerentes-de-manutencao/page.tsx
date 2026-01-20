import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ReliabilityEngineer from "@/components/pages/who-we-serve/ReliabilityEngineer/ReliabilityEngineer";

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

export default async function ReliabilityEngineerPage() {
  return <ReliabilityEngineer />;
}
