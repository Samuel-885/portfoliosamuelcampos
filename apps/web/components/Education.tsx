import { FiBookOpen, FiAward } from "react-icons/fi";
import type { Copy } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Education({ t }: { t: Copy }) {
  return (
    <section className="section education-section container" id="education">
      <SectionTitle
        number="05"
        label={t.educationLabel}
        title={t.educationTitle}
      />
      <div className="education-grid">
        <article className="education-card">
          <span className="education-icon">
            <FiBookOpen aria-hidden="true" />
          </span>
          <div>
            <p className="education-date">{t.studying}</p>
            <h3>{t.degree}</h3>
            <p>UNINTER</p>
          </div>
        </article>
        <article className="education-card">
          <span className="education-icon">
            <FiAward aria-hidden="true" />
          </span>
          <div>
            <p className="education-date">{t.courses}</p>
            <h3>Codecademy</h3>
            <p>
              HTML <span className="text-muted">•</span> CSS{" "}
              <span className="text-muted">•</span> JavaScript
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
