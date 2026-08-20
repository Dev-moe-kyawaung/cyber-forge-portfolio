import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { getTranslations } from "@/i18n/getTranslations";
import { getLocaleFromPath } from "@/i18n/config";

type Params = Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations(locale as any);

  // Pass translations via context or props; here we rely on provider in layout
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}
