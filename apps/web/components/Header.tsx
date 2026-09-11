import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiMenu, FiX } from "react-icons/fi";
import { profile, type Copy, type Locale } from "@/data/portfolio";
import ActionLink from "./ActionLink";

interface Props {
  t: Copy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export default function Header({ t, locale, setLocale }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onClick = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
      media.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            s<span>.</span>
          </span>
          Samuel Campos<span className="text-accent">.</span>
        </a>
        <div
          className={`header-navigation ${open ? "is-open" : ""}`}
          id="site-navigation"
        >
          <nav
            aria-label={
              locale === "pt" ? "Navegação principal" : "Main navigation"
            }
          >
            {Object.entries(t.nav).map(([id, label]) => (
              <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              role="group"
              aria-label={t.language}
            >
              <button
                type="button"
                lang="pt-BR"
                aria-label="Português"
                aria-pressed={locale === "pt"}
                onClick={() => setLocale("pt")}
              >
                PT
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                lang="en"
                aria-label="English"
                aria-pressed={locale === "en"}
                onClick={() => setLocale("en")}
              >
                EN
              </button>
            </div>
            <ActionLink
              href={profile.cvUrl}
              download
              unavailable={t.unavailable}
              className="button button-small button-secondary"
            >
              {t.download}
              <FiArrowDown aria-hidden="true" />
            </ActionLink>
          </div>
        </div>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
