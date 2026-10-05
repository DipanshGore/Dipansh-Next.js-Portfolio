// src/components/home/hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Copy, Check, FileDown } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { PERSONAL_INFO } from "@/lib/data";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-24 pb-16 border-b border-zinc-800/80 overflow-hidden">
      {/* Optional: Subtle background glow for depth */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main Flex Container: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12 mb-16">
          
          {/* Left Side: Text & Actions */}
          <div className="flex-1 max-w-2xl">
            {/* Availability Badge */}
            <div className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="group-hover:text-emerald-300 transition-colors">Open to Full-Stack / MERN Engineering Roles</span>
            </div>

            {/* Identity & Hook */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="group flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-emerald-400/90 font-mono cursor-default">
                <span className="group-hover:text-emerald-400 transition-colors">{PERSONAL_INFO.title}</span>
                <span className="text-zinc-600 group-hover:text-emerald-500/50 transition-colors">•</span>
                <span className="flex items-center gap-2 text-zinc-300 group-hover:text-white transition-colors">
                  {PERSONAL_INFO.location}
                  {/* Embedded SVG Flag with hover scale */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 72 72" 
                    className="w-5 h-5 rounded-sm shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  >
                    <path fill="#f3841a" d="M5,17H67a0,0,0,0,1,0,0V29.667a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V17A0,0,0,0,1,5,17Z"/>
                    <path fill="#fff" d="M5,29.667H67a0,0,0,0,1,0,0V42.333a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V29.667A0,0,0,0,1,5,29.667Z"/>
                    <path fill="#028639" d="M5,42.333H67a0,0,0,0,1,0,0V55a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V42.333A0,0,0,0,1,5,42.333Z"/>
                    <circle cx="36" cy="36" r="4.5" fill="#00008b"/>
                    <path fill="#fff" d="M36,32.5c-.3,0-.5.2-.5.5v6c0,.3.2.5.5.5s.5-.2.5-.5v-6c0-.3-.2-.5-.5-.5Z"/>
                    <path fill="#fff" d="M39.5,36c0,.3-.2.5-.5.5h-6c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h6c.3,0 .5.2.5.5Z"/>
                    <path fill="#fff" d="M38.475,33.525c-.2-.2-.5-.2-.7,0l-4.243,4.243c-.2.2-.2.5,0,.7.2.2.5.2.7,0l4.243-4.243c.2-.2.2-.5,0-.7Z"/>
                    <path fill="#fff" d="M33.525,33.525c.2-.2.5-.2.7,0l4.243,4.243c.2.2.2.5,0,.7-.2.2-.5.2-.7,0l-4.243-4.243c-.2-.2-.2-.5,0-.7Z"/>
                  </svg>
                </span>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-3xl hover:text-zinc-300 transition-colors duration-300">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Controls */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:-translate-y-0.5 transition-all shadow-lg shadow-white/5 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95"
              >
                Review Architecture
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Dipansh Gore Resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:text-white hover:border-zinc-500 hover:-translate-y-0.5 transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                Resume (PDF)
              </a>

              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-sm font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/80 transition-all cursor-pointer active:scale-95"
              >
                <div className="relative">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400 scale-100 transition-all" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  )}
                </div>
                <span>{copied ? "Copied!" : PERSONAL_INFO.email}</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-0.5 transition-all active:scale-95"
                  aria-label="GitHub"
                >
                  <Icons.github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all active:scale-95"
                  aria-label="LinkedIn"
                >
                  <Icons.linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Profile Image */}
          <div className="group relative shrink-0 md:pl-10">
            {/* Ambient Glow behind the image - reacts to hover */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full translate-y-4 group-hover:bg-emerald-500/30 transition-all duration-700" />
            
            {/* Image Container with dynamic gradient border */}
            <div className="relative p-1.5 rounded-4xl bg-linear-to-br from-zinc-700/50 via-zinc-800/20 to-emerald-900/30 border border-zinc-700/50 shadow-2xl shadow-black/50 rotate-3 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500 group-hover:border-emerald-500/30">
              <Image
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                width={220}
                height={220}
                quality={95}
                priority
                style={{ width: "auto", height: "auto" }}
                className="rounded-[1.6rem] object-cover bg-zinc-900"
              />
            </div>
          </div>

        </div>

        {/* Quick Enterprise Metrics Bar */}
        <div className="pt-8 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          <div className="group p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-emerald-900/20 cursor-default">
            <div className="text-2xl font-bold font-mono text-zinc-200 group-hover:text-white transition-colors">8.5<span className="text-xs text-zinc-500 group-hover:text-emerald-500/50 transition-colors">/10</span></div>
            <div className="text-xs font-medium text-zinc-500 mt-1 group-hover:text-emerald-400 transition-colors">B.E. Computer Science</div>
          </div>
          
          <div className="group p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-emerald-900/20 cursor-default">
            <div className="text-2xl font-bold font-mono text-emerald-500/80 group-hover:text-emerald-400 transition-colors">100%</div>
            <div className="text-xs font-medium text-zinc-500 mt-1 group-hover:text-emerald-400 transition-colors">Deep-Link URL Sync</div>
          </div>
          
          <div className="group p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-emerald-900/20 cursor-default">
            <div className="text-2xl font-bold font-mono text-zinc-200 group-hover:text-white transition-colors">400ms</div>
            <div className="text-xs font-medium text-zinc-500 mt-1 group-hover:text-emerald-400 transition-colors">Debounced Signal Abort</div>
          </div>
          
          <div className="group p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 hover:shadow-xl hover:shadow-emerald-900/20 cursor-default">
            <div className="text-2xl font-bold font-mono text-emerald-500/80 group-hover:text-emerald-400 transition-colors">WS</div>
            <div className="text-xs font-medium text-zinc-500 mt-1 group-hover:text-emerald-400 transition-colors">Real-Time Event Stream</div>
          </div>

        </div>
      </div>
    </section>
  );
}