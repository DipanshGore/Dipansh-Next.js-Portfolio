// src/components/interactive/command-menu.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { 
  FileDown, 
  Home, 
  Mail, 
  Terminal, 
  Search
} from "lucide-react";
import { Icons } from "@/components/ui/icons"; // <-- Import custom brand icons

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-1/2 left-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl z-50 overflow-hidden font-sans"
      >
        <div className="flex items-center border-b border-zinc-800 px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500" />
          <Command.Input
            placeholder="Type a command or search..."
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <Command.List className="max-h-75 overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-6 text-center text-sm text-zinc-500">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-zinc-500">
            <Command.Item
              onSelect={() => runCommand(() => router.push("/"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/#projects"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white"
            >
              <Terminal className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-zinc-500 mt-2">
            <Command.Item
              onSelect={() => runCommand(() => {
                navigator.clipboard.writeText("dgore7078@gmail.com");
              })}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Copy Email Address</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white"
            >
              <FileDown className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Socials" className="px-2 py-1.5 text-xs font-medium text-zinc-500 mt-2">
            <Command.Item
              onSelect={() => runCommand(() => window.open("https://github.com/dipanshgore", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white"
            >
              <Icons.github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => window.open("https://linkedin.com/in/dipanshgore", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-zinc-800 aria-selected:text-white"
            >
              <Icons.linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>

      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}