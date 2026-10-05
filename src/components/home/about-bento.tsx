// src/components/home/about-bento.tsx
import { User, GraduationCap, Award, Fingerprint, MessageSquare } from "lucide-react";
import { CERTIFICATIONS, SOFT_SKILLS } from "@/lib/data";

export function AboutBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
      
      {/* 1. The Core Identity (Emerald Theme) */}
      <div className="group md:col-span-2 p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-emerald-900/20 flex flex-col justify-center relative overflow-hidden">
        {/* Deep ambient glow layer */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <Fingerprint className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider group-hover:text-emerald-300 transition-colors duration-300">Engineering Identity</h3>
          </div>
          <p className="text-lg text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
            I am a Full-Stack Engineer who thrives on transforming high-fidelity designs into resilient, race-condition-free web applications. My background bridges the gap between pixel-perfect client interfaces and scalable, secure backend REST/WebSocket architectures.
          </p>
        </div>
      </div>

      {/* 2. Soft Skills Box (Blue Theme) */}
      <div className="group p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col relative overflow-hidden">
        {/* Deep ambient glow layer */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6 text-blue-400">
            <MessageSquare className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider group-hover:text-blue-300 transition-colors duration-300">Soft Skills</h3>
          </div>
          <ul className="space-y-3 mt-auto">
            {SOFT_SKILLS.map((skill) => (
              <li key={skill} className="group/item flex items-start gap-2.5 text-sm text-zinc-400 hover:text-blue-300 transition-colors duration-300 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0 group-hover/item:bg-blue-400 group-hover/item:scale-150 transition-all duration-300" />
                <span className="group-hover/item:translate-x-1 transition-transform duration-300">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4. Certifications & Achievements (Purple Theme) */}
      <div className="group md:col-span-2 p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-purple-900/20 relative overflow-hidden">
        {/* Deep ambient glow layer */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6 text-purple-400">
            <Award className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider group-hover:text-purple-300 transition-colors duration-300">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.name} 
                className="group/cert p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 flex flex-col justify-center transition-all duration-300 hover:bg-zinc-900 hover:border-purple-500/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-purple-900/20 cursor-default"
              >
                <h4 className="text-sm font-bold text-zinc-200 leading-snug mb-1 group-hover/cert:text-purple-300 transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-xs font-mono text-zinc-500 group-hover/cert:text-purple-400/70 transition-colors duration-300">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}