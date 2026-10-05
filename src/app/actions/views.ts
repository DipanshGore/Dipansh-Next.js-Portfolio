// src/app/actions/views.ts
"use server";

import { redis } from "@/lib/redis";
import { revalidatePath } from "next/cache";

// Format project titles into clean URL-safe slugs
const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export async function getProjectViews(title: string): Promise<number> {
  const slug = generateSlug(title);
  const views = await redis.get<number>(`project_views:${slug}`);
  return views ?? 0;
}

export async function incrementProjectView(title: string) {
  const slug = generateSlug(title);
  await redis.incr(`project_views:${slug}`);
  
  // Tell Next.js to purge the cache for the home page so the new count renders immediately
  revalidatePath("/");
}