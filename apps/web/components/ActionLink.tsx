import type { ReactNode } from "react";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  unavailable: string;
  className?: string;
  download?: boolean;
}

export default function ActionLink({
  href,
  children,
  unavailable,
  className = "button button-secondary",
  download,
}: ActionLinkProps) {
  if (!href.trim()) {
    return (
      <span className="unavailable-action" title={unavailable}>
        <button type="button" className={className} disabled>
          {children}
          <span className="sr-only"> — {unavailable}</span>
        </button>
      </span>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      target={external && !download ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
