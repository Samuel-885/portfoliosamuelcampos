import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiCode, FiDatabase, FiServer, FiTool, FiGlobe } from "react-icons/fi";
import type { Copy } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

const categories = [
  {
    icon: FiCode,
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F5F5F5" },
      { name: "TypeScript", icon: SiTypescript, color: "#4299E1" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E9653D" },
      { name: "CSS3", icon: SiCss, color: "#469BDA" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    icon: FiServer,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#75B85B" },
      { name: "Express", icon: SiExpress, color: "#F5F5F5" },
      { name: "REST APIs", icon: FiGlobe, color: "#22BDEB" },
    ],
  },
  {
    icon: FiDatabase,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#699DC4" },
      { name: "Prisma", icon: SiPrisma, color: "#E4E9EF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    icon: FiTool,
    technologies: [
      { name: "Git", icon: SiGit, color: "#F07158" },
      { name: "GitHub", icon: SiGithub, color: "#F5F5F5" },
      { name: "VS Code", icon: VscVscode, color: "#3BAAF2" },
    ],
  },
];

export default function TechStack({ t }: { t: Copy }) {
  return (
    <section className="section container" id="stack">
      <SectionTitle
        number="02"
        label={t.stackLabel}
        title={t.stackTitle}
        description={t.stackSubtitle}
      />
      <div className="tech-grid">
        {categories.map(({ icon: CategoryIcon, technologies }, index) => (
          <div className="tech-category" key={index}>
            <h3>
              <CategoryIcon aria-hidden="true" />
              {t.categories[index]}
            </h3>
            <ul>
              {technologies.map(({ name, icon: Icon, color }) => (
                <li key={name}>
                  <Icon style={{ color }} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
