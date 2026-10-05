// src/components/layout/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Search, Terminal, User, Mail } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMac, setIsMac] = useState(false);

  // Detect scroll for dynamic styling & check OS for the correct hotkey display
  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().indexOf("MAC") >= 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Programmatically dispatch the keystroke to trigger your existing cmdk menu
  const openCommandMenu = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  const navLinks = [
    { name: "Projects", href: "#projects", icon: Terminal },
    { name: "About", href: "#about", icon: User }, // Assuming you add id="about" to the Bento section
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-4 px-4 py-2.5 rounded-2xl border transition-all duration-300 w-full max-w-4xl ${
          isScrolled
            ? "bg-zinc-900/70 border-zinc-800/80 shadow-2xl shadow-black/50 backdrop-blur-md"
            : "bg-zinc-900/40 border-zinc-800/40 backdrop-blur-sm"
        }`}
      >
        {/* Logo / Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-zinc-950">
            D
          </div>
          <span className="hidden sm:block">Dipansh.</span>
        </a>

        {/* Center Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-950/50 p-1 rounded-xl border border-zinc-800/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all flex items-center gap-2"
            >
              <link.icon className="w-3.5 h-3.5" />
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Search Button & Mobile Menu Hint */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openCommandMenu}
            className="group flex items-center gap-2 sm:gap-4 px-3 py-1.5 sm:py-2 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-emerald-500/50 transition-all"
            aria-label="Search"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
              <span className="text-sm font-medium hidden sm:block">Search...</span>
            </div>
            
            {/* Keystroke Badge */}
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-[10px] font-mono font-semibold text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
              {isMac ? "⌘" : "Ctrl"} K
            </kbd>
          </button>
        </div>
      </nav>
    </header>
  );
}