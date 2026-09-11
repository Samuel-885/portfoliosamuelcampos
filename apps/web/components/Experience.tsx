import { FiArrowUpRight } from "react-icons/fi";
import type { Copy } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Experience({ t }: { t: Copy }) {
  return (
    <section className="section container" id="experience">
      <SectionTitle
        number="04"
        label={t.experienceLabel}
        title={t.experienceTitle}
      />
      <ol className="timeline">
        {t.jobs.map((job, index) => (
          <li key={index}>
            <div className="timeline-date">
              {index === 0 ? `2026 – ${t.present}` : "2023 – 2026"}
              {index === 0 && <span className="status-dot" />}
            </div>
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <p className="company">
                {index === 0 ? "AmorSaúde" : "Goon Digital"}
              </p>
              <p>{job.description}</p>
              {index === 0 && (
                <a className="related-project" href="#dentools">
                  {t.related}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
