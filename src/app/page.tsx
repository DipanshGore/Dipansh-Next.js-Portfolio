// src/app/page.tsx

import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/home/project-card";
import { AboutBento } from "@/components/home/about-bento";
import { CircuitBackground } from "@/components/ui/circuit-background";
import { CurrentlyLearning } from "@/components/home/currently-learning";
import { CtaSection } from "@/components/home/cta-section";
import { PROJECTS, SKILL_GROUPS } from "@/lib/data";

import {
  Cpu,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-black overflow-x-hidden font-sans">
      {/* Ambient Lighting Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-emerald-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-[40%] right-[-10%] w-125 h-100 bg-blue-500/5 blur-[160px] rounded-full" />

      {/* Subtle Dot Grid Mask */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Featured Technical Case Studies */}
        <section
          id="projects"
          className="py-20 border-b border-zinc-800/80"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Proof of Work
                </span>

                <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">
                  Production Engineering Systems
                </h2>
              </div>

              <p className="text-xs text-zinc-400 font-mono max-w-sm">
                Built with strict attention to asynchronous safety, deep-linking
                fidelity, and real-time socket scalability.
              </p>
            </div>

            {/* Asymmetric 1 + 2 Layout */}
            <div className="space-y-6">
              {/* Flagship: Full Width */}
              <ProjectCard
                project={PROJECTS[0]}
                featured={true}
              />

              {/* Secondary Projects: 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard project={PROJECTS[1]} />
                <ProjectCard project={PROJECTS[2]} />
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Competencies */}
        <section className="relative py-20 border-b border-zinc-800/80">
          {/* Moving Circuit Background */}
          <CircuitBackground />

          {/* Content sits above the circuit animation */}
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            {/* Section Heading */}
            <div className="flex items-center gap-3 mb-10">
              <Cpu className="w-5 h-5 text-emerald-400" />

              <h2 className="text-2xl font-bold tracking-tight text-white">
                System Architecture & Skills
              </h2>
            </div>

            {/* Skill Groups */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="group relative overflow-hidden p-6 rounded-2xl border border-zinc-800/90 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-emerald-900/20"
                >
                  {/* Ambient internal glow (hidden by default, fades in on hover) */}
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Header responds to parent card hover */}
                  <h3 className="relative z-10 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-4 pb-2 border-b border-zinc-800 group-hover:border-emerald-500/20 group-hover:text-emerald-400/90 transition-colors duration-300">
                    {group.category}
                  </h3>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-900/20 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently Learning Section */}
            <div className="mb-20 pt-10 border-t border-zinc-900">
              <CurrentlyLearning />
            </div>

           {/* About Section */}
            <section
              id="about"
              className="relative py-20 border-b border-zinc-800/80 overflow-hidden"
            >
              {/* Massive, subtle background flare to give the section depth */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-100 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-5xl mx-auto px-6">
                
                {/* Interactive Section Header */}
                <div className="group flex items-center gap-3 mb-10 w-fit cursor-default">
                  {/* Icon Container with physics and glow */}
                  <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/80 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:-translate-y-0.5">
                    <User className="w-5 h-5 text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                  </div>

                  {/* Typography with gradient reveal */}
                  <h2 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-emerald-400">
                    About Me
                  </h2>
                </div>

                {/* Bento Box */}
                <AboutBento />
              </div>
            </section>

            {/* Internship & Education */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              
              {/* Internship (Emerald Theme) */}
              <div className="group relative overflow-hidden p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-emerald-900/20">
                
                {/* Emerald Ambient Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                    <span className="flex items-center gap-1.5 text-zinc-400 font-semibold group-hover:text-zinc-200 transition-colors duration-300">
                      <Briefcase className="w-4 h-4 text-emerald-400 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500" />
                      Industry Internship
                    </span>
                    <span className="group-hover:text-emerald-400/80 transition-colors duration-300">July 2022 – Oct 2022</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Web Developer Intern <span className="text-zinc-600 font-normal group-hover:text-emerald-500/40 transition-colors">•</span> JK Innovative Pvt. Ltd.
                  </h3>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    Collaborated in an agile team to ship responsive web UIs,
                    integrated RESTful APIs, and handled dynamic MongoDB data
                    flows with strict cross-browser compliance.
                  </p>
                </div>
              </div>

            {/* Education (Blue Theme) */}
              <div className="group relative overflow-hidden p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-blue-900/20">
                
                {/* Blue Ambient Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                    <span className="flex items-center gap-1.5 text-zinc-400 font-semibold group-hover:text-zinc-200 transition-colors duration-300">
                      <GraduationCap className="w-4 h-4 text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                      Formal Education
                    </span>
                    <span className="group-hover:text-blue-400/80 transition-colors duration-300">Class of May 2024</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    B.E. in Computer Science & Engineering
                  </h3>

                  <p className="text-xs font-mono text-emerald-400 mt-1.5 group-hover:text-blue-300 transition-colors duration-300">
                    Sipna COET, Amravati • CGPA: 8.5 / 10
                  </p>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    Coursework focused on Data Structures, Database Management
                    Systems, Computer Networks, and Distributed Systems.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Split-Pane CTA Section */}
        <CtaSection />

        
      </div>
    </main>
  );
}