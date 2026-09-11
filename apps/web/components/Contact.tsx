import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, type Copy } from "@/data/portfolio";
import ActionLink from "./ActionLink";
import SectionTitle from "./SectionTitle";

export default function Contact({ t }: { t: Copy }) {
  return (
    <section className="section section-tinted contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <SectionTitle
            number="06"
            label={t.contactLabel}
            title={t.contactTitle}
          />
          <p className="contact-description">{t.contactText}</p>
          <div className="availability">
            <span className="status-dot" />
            {t.remote}
          </div>
        </div>
        <div className="contact-card">
          <span className="eyebrow">Email</span>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="button-row">
            <a
              className="button button-primary"
              href={`mailto:${profile.email}`}
            >
              <FiMail aria-hidden="true" />
              {t.sendEmail}
            </a>
            <ActionLink href={profile.linkedinUrl} unavailable={t.unavailable}>
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </ActionLink>
            <ActionLink href={profile.githubUrl} unavailable={t.unavailable}>
              <FiGithub aria-hidden="true" />
              GitHub
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
