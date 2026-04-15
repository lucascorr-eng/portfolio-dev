import AboutHeroSection from "../sections/about/AboutHeroSection";
import AboutInfoSection from "../sections/about/AboutInfoSection";
import AboutCollegeSection from "../sections/about/AboutCollegeSection";
import AboutCuriositySection from "../sections/about/AboutCuriositySection";
import AboutCtaSection from "../sections/about/AboutCtaSection";

function About() {
  return (
    <main>
      <AboutHeroSection />
      <div className="lg:hidden">
        <AboutInfoSection />
      </div>
      <AboutCollegeSection />
      <AboutCuriositySection />
      <AboutCtaSection />
    </main>
  );
}

export default About;
