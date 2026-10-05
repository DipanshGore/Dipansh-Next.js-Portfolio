// src/components/interactive/tracked-link.tsx
"use client";

import { ReactNode } from "react";
import { incrementProjectView } from "@/app/actions/views";

interface TrackedLinkProps {
  href: string;
  projectTitle: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function TrackedLink({ href, projectTitle, children, className, ariaLabel }: TrackedLinkProps) {
  const handleClick = () => {
    // Fire and forget the server action
    incrementProjectView(projectTitle);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}