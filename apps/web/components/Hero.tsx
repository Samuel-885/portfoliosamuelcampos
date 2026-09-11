import Image from "next/image";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { heroStack, profile, type Copy } from "@/data/portfolio";
import ActionLink from "./ActionLink";

export default function Hero({ t }: { t: Copy }) {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            {t.available}
          </div>
          <h1 id="hero-title">
            <span className="greeting">{t.greeting}</span>Samuel Campos
            <span className="text-accent">.</span>
          </h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <p className="hero-detail">{t.heroDetail}</p>
          <div className="hero-stack">
            {heroStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="button-row hero-buttons">
            <a className="button button-primary" href="#projects">
              {t.viewProjects}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <ActionLink href={profile.githubUrl} unavailable={t.unavailable}>
              <FiGithub aria-hidden="true" />
              GitHub
            </ActionLink>
            <ActionLink href={profile.linkedinUrl} unavailable={t.unavailable}>
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </ActionLink>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className={`portrait-frame${profile.photoUrl ? " has-photo" : ""}`}>
            <div className="portrait-topline">
              <span>SAMUEL CAMPOS</span>
              <span className="text-accent" aria-hidden="true">
                [ SC ]
              </span>
            </div>
            {profile.photoUrl ? (
              <div className="portrait-image-area">
                <Image
                  src={profile.photoUrl}
                  alt="Samuel Campos Carvalho"
                  fill
                  preload
                  sizes="(max-width: 767px) 90vw, 380px"
                  className="portrait-photo"
                />
              </div>
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-monogram" aria-hidden="true">
                  sc<span>.</span>
                </span>
                <span className="photo-caption">{t.photo}</span>
              </div>
            )}
            <div className="portrait-bottom">
              <span className="status-dot" />
              <span>{t.junior}</span>
            </div>
          </div>
          <div className="portrait-location">
            <FiMapPin aria-hidden="true" />
            {t.location}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          <span className="status-dot" />
          {t.remote}
        </span>
        <a href="#projects">
          {t.scroll}
          <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
