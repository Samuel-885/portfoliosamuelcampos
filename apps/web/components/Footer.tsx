import { FiArrowUp } from "react-icons/fi";
import type { Copy } from "@/data/portfolio";

export default function Footer({ t }: { t: Copy }) {
  return (
    <footer className="container footer">
      <div>
        <a className="footer-name" href="#home">
          Samuel Campos<span className="text-accent">.</span>
        </a>
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
      </div>
      <a className="back-top" href="#home" aria-label={t.top}>
        <FiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
