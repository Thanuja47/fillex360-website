import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProjectGrid from "@/components/ProjectGrid";
import PackagesGrid from "@/components/PackagesGrid";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import ApproachSection from "@/components/ApproachSection";
import FAQ from "@/components/FAQ";
import ContactBlock from "@/components/ContactBlock";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProjectGrid />
      <PackagesGrid />
      <Calculator />
      <Testimonials />
      <ApproachSection />
      <FAQ />
      <ContactBlock />
      <WhatsAppButton />
    </>
  );
}
