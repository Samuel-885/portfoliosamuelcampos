import { FiArrowUpRight, FiCheck, FiCircle, FiGithub } from "react-icons/fi";
import { SiGooglechrome } from "react-icons/si";
import type { Project, Copy, Locale } from "@/data/portfolio";
import ActionLink from "./ActionLink";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({
  project,
  index,
  t,
  locale,
}: {
  project: Project;
  index: number;
  t: Copy;
  locale: Locale;
}) {
  const developing = project.status === "development";
  const FeatureIcon = developing ? FiCircle : FiCheck;
  const hasActions =
    !developing &&
    [project.storeUrl, project.liveUrl, project.githubUrl].some((url) =>
      url?.trim(),
    );

  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : project.highlighted ? "project-highlighted" : "project-compact"}`}
      id={project.id}
    >
      <ProjectVisual project={project} index={index} t={t} locale={locale} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.featured ? t.featured : project.kind[locale]}</span>
          {project.version && (
            <span>
              {t.version} {project.version}
            </span>
          )}
        </div>
        <h3>{project.name[locale]}</h3>
        <p className="project-description">{project.description[locale]}</p>
        {project.detail?.[locale].map((paragraph) => (
          <p className="project-detail" key={paragraph}>
            {paragraph}
          </p>
        ))}
        {project.features && (
          <div className="project-feature-group">
            {developing && <p className="eyebrow">{t.projectScope}</p>}
            <ul className="project-features">
              {project.features[locale].map((feature) => (
                <li key={feature}>
                  <FeatureIcon aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!developing && project.stack?.length ? (
          <div className="tags">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        ) : null}
        {project.authors && (
          <p className="project-authors">
            <span>{t.developedBy}</span>
            {project.authors}
          </p>
        )}
        {hasActions && (
          <div className="project-actions">
            {project.storeUrl?.trim() && (
              <ActionLink
                href={project.storeUrl}
                unavailable={t.unavailable}
                className="button button-primary"
              >
                <SiGooglechrome aria-hidden="true" />
                Chrome Web Store
                <FiArrowUpRight aria-hidden="true" />
              </ActionLink>
            )}
            {project.liveUrl?.trim() && (
              <ActionLink
                href={project.liveUrl}
                unavailable={t.unavailable}
                className="text-link"
              >
                {t.viewProject}
                <FiArrowUpRight aria-hidden="true" />
              </ActionLink>
            )}
            {project.githubUrl?.trim() && (
              <ActionLink
                href={project.githubUrl}
                unavailable={t.unavailable}
                className="text-link"
              >
                <FiGithub aria-hidden="true" />
                GitHub
                <FiArrowUpRight aria-hidden="true" />
              </ActionLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
