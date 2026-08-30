import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import QualityPillars from "@/components/QualityPillars";
import StudioManifesto from "@/components/StudioManifesto";
import ProjectGrid from "@/components/ProjectGrid";
import MindsetComparison from "@/components/MindsetComparison";
import PackagesGrid from "@/components/PackagesGrid";
import Calculator from "@/components/Calculator";
import ApproachSection from "@/components/ApproachSection";
import FAQ from "@/components/FAQ";
import ContactBlock from "@/components/ContactBlock";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <QualityPillars />
      <StudioManifesto />
      <ProjectGrid />
      <MindsetComparison />
      <PackagesGrid />
      <Calculator />
      <ApproachSection />
      <FAQ />
      <ContactBlock />
      <WhatsAppButton />
    </>
  );
}
