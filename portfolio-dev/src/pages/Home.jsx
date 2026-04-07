import HeroSection from "../sections/home/HeroSection";
import FeaturedProjectsSection from "../sections/home/FeaturedProjectsSection";
import SkillsPreviewSection from "../sections/home/SkillsPreviewSection";
import ContactCtaSection from "../sections/home/ContactCtaSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsPreviewSection />
      <ContactCtaSection />
    </main>
  );
}

export default Home;
