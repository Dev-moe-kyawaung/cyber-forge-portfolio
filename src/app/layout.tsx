import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect root to /en by default
  redirect("/en");
}
export const metadata: Metadata = {
  title: "Cyber·Forge Portfolio",
  description:
    "Senior Android & Full‑Stack Developer portfolio with a Cyber‑Forge aesthetic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
