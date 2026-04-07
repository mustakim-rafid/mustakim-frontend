import BlueprintSection from "@/components/BlueprintSection";
import CourseCurriculumSection from "@/components/CourseCurriculumSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import SkillDevelopSection from "@/components/SkillDevelopSection";
import StruggleSection from "@/components/StruggleSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-0">
      <Navbar />
      <HeroSection />
      <StruggleSection />
      <SkillDevelopSection />
      <BlueprintSection />
      <CourseCurriculumSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
