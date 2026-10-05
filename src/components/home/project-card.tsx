// src/components/home/project-card.tsx
import type { Project } from "@/lib/data";
import { ExternalLink, Zap } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { ViewBadge } from "@/components/interactive/view-badge";
import { TrackedLink } from "@/components/interactive/tracked-link";
import { Suspense } from "react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative rounded-2xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md ${
        featured
          ? "border-emerald-500/30 bg-linear-to-br from-zinc-900/90 via-zinc-900/50 to-emerald-950/20 shadow-xl shadow-emerald-950/20 hover:border-emerald-500/50"
          : "border-zinc-800/90 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-black/40"
      }`}
    >
      <div>
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                featured
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                  : "bg-zinc-800/80 text-zinc-300 border-zinc-700/60"
              }`}
            >
              {project.badge}
            </span>
            {featured && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Flagship Case Study
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {/* 1. Add the Server Component inside a Suspense boundary */}
            <Suspense fallback={<div className="w-12 h-6 animate-pulse bg-zinc-800 rounded-md" />}>
              <ViewBadge title={project.title} />
            </Suspense>

            {/* 2. Wrap external links with the TrackedLink Client Component */}
            {project.githubUrl && (
              <TrackedLink
                href={project.githubUrl}
                projectTitle={project.title}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                ariaLabel="Source Code"
              >
                <Icons.github className="w-4 h-4" />
              </TrackedLink>
            )}
            
            {project.liveUrl && (
              <TrackedLink
                href={project.liveUrl}
                projectTitle={project.title}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                ariaLabel="Live Production Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </TrackedLink>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-zinc-400 font-mono">{project.tagline}</p>
        <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{project.description}</p>

        {/* Hard Engineering Detail Box */}
        <div className="mt-5 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
          <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed font-sans">
            <span className="font-semibold text-white font-mono uppercase text-[11px] block mb-0.5">
              Engineering Architecture
            </span>
            {project.engineeringHighlight}
          </p>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}