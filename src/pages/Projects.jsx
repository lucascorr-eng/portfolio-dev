import ProjectsCtaSection from "../sections/projects/ProjectsCtaSection";
import ProjectsHeroSection from "../sections/projects/ProjectsHeroSection";
import ProjectsListSection from "../sections/projects/ProjectsListSection";

function Projects() {
  return (
    <main>
      <ProjectsHeroSection />
      <ProjectsListSection />
      <ProjectsCtaSection />
    </main>
  );
}

export default Projects;
