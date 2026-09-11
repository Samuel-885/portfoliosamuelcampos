"use client";

import { useEffect, useState } from "react";
import { translations, type Locale } from "@/data/portfolio";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = translations[locale];
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title = `Samuel Campos | ${t.role}`;
  }, [locale, t.role]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header t={t} locale={locale} setLocale={setLocale} />
      <main id="main" tabIndex={-1}>
        <Hero t={t} />
        <Projects t={t} locale={locale} />
        <TechStack t={t} />
        <About t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
