"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiGrid,
  FiImage,
  FiLayers,
  FiMic,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import type { Project, Copy, Locale } from "@/data/portfolio";

export default function ProjectVisual({
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
  const number = `${String(index + 1).padStart(2, "0")} /`;
  const name = project.name[locale];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const screenshots = Array.from(
    new Set(
      [project.image, ...(project.images ?? [])]
        .map((src) => src?.trim())
        .filter((src): src is string => Boolean(src)),
    ),
  );
  const hasGallery = project.id === "dentools" && screenshots.length > 1;
  const activeIndex = hasGallery
    ? Math.min(selectedIndex, screenshots.length - 1)
    : 0;

  // Development scope is intentionally independent of image configuration.
  if (project.status === "development") {
    return (
      <div className="project-technical">
        <span className="preview-index" aria-hidden="true">
          {number}
        </span>
        <span className="project-symbol">
          <FiLayers aria-hidden="true" />
        </span>
        <span className="preview-name">
          {name}
          <span className="text-accent">.</span>
        </span>
        <span className="development-badge">
          <span className="status-dot" />
          {t.development}
        </span>
        <div className="technical-stack">
          <span className="eyebrow">{t.plannedStack}</span>
          <div className="tags">
            {project.stack?.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <p className="technical-note">{t.noInterface}</p>
      </div>
    );
  }

  const image = screenshots[activeIndex];
  const icons = {
    dentools: FiLayers,
    fonoapp: FiMic,
    "lista-de-compras": FiShoppingCart,
  };
  const Icon = icons[project.id as keyof typeof icons] ?? FiGrid;

  return (
    <div className={`project-preview${image ? " has-image" : ""}`}>
      {image ? (
        <div className="project-screenshot">
          <Image
            src={image}
            alt={`${t.screenshotAlt}: ${name}${hasGallery ? ` (${activeIndex + 1}/${screenshots.length})` : ""}`}
            fill
            sizes={
              project.highlighted
                ? "(max-width: 1023px) 100vw, 480px"
                : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 370px"
            }
            className="project-image"
          />
        </div>
      ) : (
        <div className="screenshot-placeholder">
          <span className="project-symbol">
            <Icon aria-hidden="true" />
          </span>
          <span className="preview-name">
            {name}
            <span className="text-accent">.</span>
          </span>
          <span className="preview-caption">
            <FiImage aria-hidden="true" />
            {t.screenshot}
          </span>
        </div>
      )}
      <span className="preview-index" aria-hidden="true">
        {number}
      </span>
      {hasGallery && (
        <div
          className="screenshot-navigation"
          role="group"
          aria-label={`${t.screenshotGallery}: ${name}`}
        >
          <button
            type="button"
            aria-label={t.previousScreenshot}
            disabled={activeIndex === 0}
            onClick={() => setSelectedIndex(activeIndex - 1)}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <span aria-live="polite" aria-atomic="true">
            {activeIndex + 1} / {screenshots.length}
          </span>
          <button
            type="button"
            aria-label={t.nextScreenshot}
            disabled={activeIndex === screenshots.length - 1}
            onClick={() => setSelectedIndex(activeIndex + 1)}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
      {project.id === "dentools" && project.features && (
        <div className="tools-highlight">
          <strong>
            {project.features[locale].length} {t.tools}
          </strong>
          <span>{t.extension}</span>
        </div>
      )}
    </div>
  );
}
