// src/components/layout/footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/60 bg-zinc-950 pt-8 pb-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="text-sm font-bold text-zinc-300 tracking-widest uppercase">
              Dipansh Gore
            </span>
            <p className="text-xs font-mono text-zinc-500">
              © {currentYear} • Full-Stack Engineer
            </p>
          </div>

          {/* Right: Infrastructure & Tech Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-zinc-500">
            {/* Live Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Systems Operational</span>
            </div>

            {/* Stack Badges */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80">Next.js 15</span>
              <span className="px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80">Tailwind</span>
              <span className="px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/80">Vercel Edge</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}