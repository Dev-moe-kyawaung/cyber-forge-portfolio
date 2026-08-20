import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, defaultLocale, getLocaleFromPath } from "@/i18n/config";
import { getTranslations } from "@/i18n/getTranslations";
import { TranslationsProvider } from "@/i18n/useTranslations";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "../globals.css";

type Params = Promise<{ locale: string }>;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations(locale as any);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations(locale as any);

  return (
    <html lang={locale}>
      <body>
        <TranslationsProvider translations={t}>
          <SiteLayout>{children}</SiteLayout>
        </TranslationsProvider>
      </body>
    </html>
  );
}
