import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProjectGrid from "@/components/ProjectGrid";
import PackagesGrid from "@/components/PackagesGrid";
import ApproachSection from "@/components/ApproachSection";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProjectGrid />
      <PackagesGrid />
      <ApproachSection />
      <ContactBlock />
    </>
  );
}
