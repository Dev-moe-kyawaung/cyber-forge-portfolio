export const locales = ["en", "mm"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  if (locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  if (locales.includes(maybeLocale as Locale)) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}

export function addLocaleToPath(pathname: string, locale: Locale): string {
  const base = stripLocaleFromPath(pathname);
  if (base === "/") return `/${locale}`;
  return `/${locale}${base}`;
}
