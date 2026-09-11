import { FiCode, FiGlobe, FiMapPin } from "react-icons/fi";
import type { Copy } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function About({ t }: { t: Copy }) {
  return (
    <section className="section section-tinted" id="about">
      <div className="container split-section">
        <SectionTitle number="03" label={t.aboutLabel} title={t.aboutTitle} />
        <div className="about-content">
          {t.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-facts">
            <span>
              <FiMapPin aria-hidden="true" />
              Ipatinga – MG
            </span>
            <span>
              <FiCode aria-hidden="true" />
              {t.role}
            </span>
            <span>
              <FiGlobe aria-hidden="true" />
              {t.remote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
