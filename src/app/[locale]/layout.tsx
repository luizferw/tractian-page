import { Inter, Inter_Tight } from "next/font/google";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { GetDemoDialogProvider } from "@/components/providers/GetDemoDialogProvider";
import "../../styles/globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${interTight.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider>
          <GetDemoDialogProvider>{children}</GetDemoDialogProvider>
        </NextIntlClientProvider>
        <div id="headlessui-portal-root" />
      </body>
    </html>
  );
}
