// src/components/interactive/view-badge.tsx
import { Eye } from "lucide-react";
import { getProjectViews } from "@/app/actions/views";

export async function ViewBadge({ title }: { title: string }) {
  // Fetches securely on the server during render
  const views = await getProjectViews(title);

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono text-zinc-400">
      <Eye className="w-3.5 h-3.5 text-emerald-500" />
      <span>{views.toLocaleString()}</span>
    </div>
  );
}