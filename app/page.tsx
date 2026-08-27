import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProjectGrid from "@/components/ProjectGrid";
import Spotlight from "@/components/Spotlight";
import ApproachSection from "@/components/ApproachSection";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProjectGrid />
      <Spotlight />
      <ApproachSection />
      <ContactBlock />
    </>
  );
}
