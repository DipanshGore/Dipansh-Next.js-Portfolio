// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CommandMenu } from "@/components/interactive/command-menu";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Replace this with your actual Vercel domain or custom domain once you know it
  metadataBase: new URL("https://dipanshgore.vercel.app"),
  title: "Dipansh Gore | Full-Stack Engineer",
  description: "Full-Stack Engineer specializing in React, Next.js, and real-time systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-zinc-950 text-white"
        suppressHydrationWarning
      >
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Command Menu */}
        <CommandMenu />
      </body>
    </html>
  );
}