"use client";

import { createContext, useContext, ReactNode } from "react";

const TranslationsContext = createContext<Record<string, any> | null>(null);

export function TranslationsProvider({
  translations,
  children,
}: {
  translations: Record<string, any>;
  children: ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(TranslationsContext);
  if (!ctx) {
    throw new Error("useTranslations must be used within TranslationsProvider");
  }
  return ctx;
}
