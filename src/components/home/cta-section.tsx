// src/components/home/cta-section.tsx
import { FileDown, Mail } from "lucide-react";
import { Icons } from "@/components/ui/icons"; // Using your custom icons instead
import { PERSONAL_INFO } from "@/lib/data";
import { ContactForm } from "@/components/interactive/contact-form";

export function CtaSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-100 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Narrative */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-emerald-400 mb-6">
              Let&apos;s Build Something
            </h2>

            <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              I enjoy turning complex ideas into <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
                useful, polished web applications.
              </span>
            </p>

            <p className="text-base text-zinc-400 max-w-md mb-10 leading-relaxed">
              Open to React.js, Next.js, and full-stack development opportunities.
              Whether you have a specific project, a role to fill, or just want to connect, I&apos;d love to hear from you.
            </p>

            {/* Social / Direct Links */}
            <div className="flex flex-col gap-4 text-sm font-mono text-zinc-400">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors w-fit"
              >
                <div className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <Mail className="w-4 h-4" />
                </div>
                {PERSONAL_INFO.email}
              </a>
              
              <div className="flex items-center gap-6 mt-4">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icons.github className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icons.linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="/Dipansh Gore Resume.pdf"
                  download
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FileDown className="w-4 h-4" /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: The Contact Form */}
          <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}