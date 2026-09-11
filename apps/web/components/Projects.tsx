import { projects, type Copy, type Locale } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects({ t, locale }: { t: Copy; locale: Locale }) {
  return (
    <section className="section section-tinted" id="projects">
      <div className="container">
        <SectionTitle
          number="01"
          label={t.projectLabel}
          title={t.projectTitle}
          description={t.projectSubtitle}
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              t={t}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
