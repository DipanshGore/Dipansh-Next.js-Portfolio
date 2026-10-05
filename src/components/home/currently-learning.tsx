// src/components/home/currently-learning.tsx
import { Terminal, Code2, Layers, Activity, BrainCircuit, ArrowRight } from "lucide-react";
import { CURRENTLY_LEARNING } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "01": <Terminal className="w-5 h-5" />,
  "02": <Code2 className="w-5 h-5" />,
  "03": <Layers className="w-5 h-5" />,
  "04": <Activity className="w-5 h-5" />,
  "05": <BrainCircuit className="w-5 h-5" />,
};

export function CurrentlyLearning() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
          Currently Learning
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Building beyond MERN. Exploring the tools and practices I&apos;m using to become a stronger, production-ready full-stack developer.
        </p>
      </div>

      {/* Bento-style Grid for Learning Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CURRENTLY_LEARNING.map((item, index) => (
          <div
            key={item.id}
            className={`group relative flex flex-col p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20 overflow-hidden ${
              index === 3 ? "md:col-span-2 lg:col-span-1" : ""
            } ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            {/* Top Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-emerald-400">
                {iconMap[item.id]}
                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-emerald-500/40 transition-colors">
                {item.id}
              </span>
            </div>

            {/* Focus Areas */}
            <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-8">
              {item.focus}
            </p>

            {/* Evidence / Action Footer (Pushes to bottom) */}
            <div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-zinc-500 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 transition-colors" />
                {item.evidence}
              </span>
              
              {item.link && (
                <a 
                  href={item.link}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400"
                  aria-label="View Project"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

      {/* The Career Story Footer */}
      <div className="mt-12 flex items-center justify-center gap-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-500">
        <span className="text-zinc-400">Learning</span>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-500/50" />
        <span className="text-zinc-300">Building</span>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
        <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Shipping</span>
      </div>
    </div>
  );
}