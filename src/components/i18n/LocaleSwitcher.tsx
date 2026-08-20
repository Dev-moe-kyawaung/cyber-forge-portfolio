"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { locales, Locale } from "@/i18n/config";
import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (pathname.split("/")[1] || "en") as Locale;

  function changeLocale(locale: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.push("/" + segments.join("/"));
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLocale(locale)}
          className={
            locale === currentLocale
              ? "text-[var(--cf-neon-primary)] font-semibold"
              : "text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]"
          }
        >
          {t.localeSwitcher[locale]}
        </button>
      ))}
    </div>
  );
}
