import { Locale } from "./config";

export async function getTranslations(locale: Locale) {
  const mod = await import(`./locales/${locale}.json`);
  return mod.default as Record<string, any>;
}
